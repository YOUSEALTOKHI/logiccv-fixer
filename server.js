const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS submissions (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT, date DATETIME DEFAULT CURRENT_TIMESTAMP)");
});

app.post('/api/save', (req, res) => {
  const data = JSON.stringify(req.body);
  const stmt = db.prepare("INSERT INTO submissions (data) VALUES (?)");
  stmt.run(data, function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "تم الحفظ بنجاح!", id: this.lastID });
  });
  stmt.finalize();
});

app.get('/api/admin/data', (req, res) => {
  db.all("SELECT * FROM submissions ORDER BY date DESC", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Backend server running on port 3000');
});
