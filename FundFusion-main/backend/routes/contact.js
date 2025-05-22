const express = require("express");
const router = express.Router();
const db = require("../db");

//post contact
router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  db.query(sql, [name, email, message], (err) => {
    if (err) return res.status(500).send("Failed to save message");
    res.send("Message received");
  });
});

module.exports = router;

//get contact
router.get("/contact", (req, res) => {
  const sql = "SELECT * FROM contacts ";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send("Failed to retrieve contacts");
    res.json(results);
  });
});