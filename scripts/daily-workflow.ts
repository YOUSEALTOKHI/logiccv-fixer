import TelegramBot from 'node-telegram-bot-api';
import { Client } from 'whatsapp-web.js';
import { createWorker } from 'tesseract.js';
import * as XLSX from 'xlsx';
import OpenAI from 'openai';
import * as cron from 'node-cron';
import * as fs from 'fs';
import * as path from 'path';

// Environment variables (add to .env)
const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const WHATSAPP_SESSION_PATH = process.env.WHATSAPP_SESSION_PATH || './whatsapp-session';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const EXCEL_FILE_PATH = process.env.EXCEL_FILE_PATH || './data.xlsx';

// Initialize clients
const telegramBot = new TelegramBot(TELEGRAM_TOKEN, { polling: false });
const whatsappClient = new Client({
  session: fs.existsSync(WHATSAPP_SESSION_PATH) ? require(WHATSAPP_SESSION_PATH) : undefined,
  puppeteer: { headless: true }
});
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

// OCR Worker
const ocrWorker = createWorker();

// Data storage
let collectedData: any[] = [];

// Function to extract text from image
async function extractTextFromImage(imagePath: string): Promise<string> {
  await ocrWorker.loadLanguage('eng+ara'); // English and Arabic
  await ocrWorker.initialize('eng+ara');
  const { data: { text } } = await ocrWorker.recognize(imagePath);
  return text;
}

// Function to analyze data with AI
async function analyzeData(data: string): Promise<any> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Analyze the following message data, extract key information, categorize, and summarize.' },
      { role: 'user', content: data }
    ]
  });
  return JSON.parse(response.choices[0].message.content || '{}');
}

// Fetch Telegram messages
async function fetchTelegramMessages(chatId: string): Promise<any[]> {
  const updates = await telegramBot.getUpdates({ offset: -1, limit: 100 });
  return updates.filter(u => u.message?.chat.id === parseInt(chatId)).map(u => ({
    platform: 'Telegram',
    chatId,
    message: u.message?.text || '',
    date: new Date(u.message?.date * 1000),
    sender: u.message?.from?.username || u.message?.from?.first_name
  }));
}

// WhatsApp client setup
whatsappClient.on('ready', () => {
  console.log('WhatsApp client is ready');
});

whatsappClient.on('message', async (msg) => {
  if (msg.fromMe) return; // Ignore own messages
  let text = msg.body;
  if (msg.hasMedia) {
    const media = await msg.downloadMedia();
    const imagePath = path.join(__dirname, 'temp_image.jpg');
    fs.writeFileSync(imagePath, media.data, 'base64');
    text += await extractTextFromImage(imagePath);
    fs.unlinkSync(imagePath);
  }
  collectedData.push({
    platform: 'WhatsApp',
    chatId: msg.from,
    message: text,
    date: new Date(),
    sender: msg.author || msg.from
  });
});

whatsappClient.initialize();

// Main workflow function
async function runWorkflow() {
  console.log('Starting daily workflow...');

  // Fetch Telegram data (replace with actual chat IDs)
  const telegramChats = ['-1001234567890']; // Example group ID
  for (const chatId of telegramChats) {
    const messages = await fetchTelegramMessages(chatId);
    collectedData.push(...messages);
  }

  // WhatsApp data is collected via events, but for daily, we can process collectedData

  // Analyze data
  for (const item of collectedData) {
    const analysis = await analyzeData(item.message);
    item.analysis = analysis;
  }

  // Organize and export to Excel
  const ws = XLSX.utils.json_to_sheet(collectedData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Data');
  XLSX.writeFile(wb, EXCEL_FILE_PATH);

  console.log('Workflow completed. Data exported to Excel.');
  collectedData = []; // Reset for next day
}

// Schedule daily at midnight
cron.schedule('0 0 * * *', runWorkflow);

// For testing, run once
if (process.argv[2] === 'run') {
  runWorkflow();
}

export default runWorkflow;