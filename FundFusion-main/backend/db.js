const mysql = require("mysql2");


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cdac", // use your MySQL password
  database: "fun",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

module.exports = db;
