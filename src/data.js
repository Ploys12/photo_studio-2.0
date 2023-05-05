const db = require('./database');

// Функция для сохранения данных в базе данных
const saveData = (formData) => {
  const { name, email, phone } = formData;
  db.run(`
    INSERT INTO users (name, email, phone)
    VALUES (?, ?, ?)
  `, [name, email, phone], (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Data saved: ${name}, ${email}, ${phone}`);
    }
  });
}

module.exports = { saveData };
