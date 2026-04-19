# N8N Workflow Setup - جدول العمل اليومي

## 1. تثبيت N8N على السيرفر

```bash
npm install -g n8n
# أو باستخدام Docker
docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n
```

## 2. بدء N8N

```bash
n8n start
# سيكون متاحًا على: http://localhost:5678
```

## 3. استيراد الورك فلو

1. افتح http://localhost:5678
2. اذهب إلى: Menu → Workflows
3. اضغط "Create" → "Import"
4. اختر ملف `n8n-workflow.json`

## 4. إضافة بيانات الاعتماد

### أ. تلجرام Bot
- اذهب إلى Credentials
- أضف "Telegram Bot" credential
- ادخل: `TELEGRAM_BOT_TOKEN` من @BotFather
- أضف البوت للجروبات

### ب. واتس أب
- استخدم Twilio WhatsApp أو WhatsApp Business API
- أضف credentials في N8N

### ج. OpenAI API
- أضف `OPENAI_API_KEY` في متغيرات البيئة

### د. AWS S3 (لحفظ الملفات)
- أضف AWS credentials (Access Key & Secret)
- أنشئ bucket سميه `cvlogic-data`

### هـ. Slack (للإشعارات)
- أنشئ Bot في Slack Workspace
- أضف token في N8N

## 5. متغيرات البيئة

أضف في `.env`:
```
N8N_TELEGRAM_CHAT_ID=-1001234567890
N8N_WHATSAPP_CHAT_ID=201012345678
N8N_OPENAI_API_KEY=sk-xxxxx
N8N_AWS_BUCKET=cvlogic-data
```

## 6. تشغيل الورك فلو

- Workflow سيعمل تلقائيًا كل يوم الساعة 00:00 (منتصف الليل)
- يمكنك اختبارها يدويًا من "Test" button
- ستحفظ البيانات في Excel وترفعها لـ S3

## 7. مواصفات الورك فلو

✅ جدولة يومية تلقائية
✅ جلب الرسائل من تلجرام والواتس
✅ استخراج النصوص من الصور (OCR)
✅ تحليل البيانات بـ AI
✅ دمج البيانات وتنسيقها
✅ حفظ في Excel
✅ رفع إلى السحابة
✅ إشعارات Slack عند الانتهاء

## 8. التوسع والتخصيص

- العربية: أضف language packs في OCR
- تنكس: غير `schedule` من `days` إلى `hours`
- قواعد مخصصة: أضف nodes جديدة في "Analyze with AI"
