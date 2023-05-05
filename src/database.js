const sqlite3 = require('sqlite3').verbose();

// Открываем базу данных или создаем новую, если ее нет
const db = new sqlite3.Database('data.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the database.');
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL
      )
    `);
  }
});

module.exports = db;
