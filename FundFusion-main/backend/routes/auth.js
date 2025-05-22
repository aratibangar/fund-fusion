const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

// Secret key for JWT
const JWT_SECRET = "Hello@123"; // use .env in production

// Validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{6,}$/;

// ✅ Registration
router.post("/register", async (req, res) => {
  const { first_name, last_name, dob, phone, city, state, email, password } = req.body;

  if (!emailRegex.test(email)) return res.status(400).send("Invalid email format");
  if (!passwordRegex.test(password)) return res.status(400).send("Password must be at least 6 characters");
  if (!/^[0-9]{10}$/.test(phone)) return res.status(400).send("Invalid phone number");

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (results.length > 0) return res.status(400).send("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 
      `INSERT INTO users (first_name, last_name, dob, phone, city, state, email, password)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
   db.query(sql, [first_name, last_name, dob, phone, city, state, email, hashedPassword], (err) => {
  if (err) {
    console.error("MySQL Error:", err); // 👈 Add this line
    return res.status(500).send("Error registering user");
  }
  return res.status(201).send("User registered successfully");
});
  });
});


// ✅ Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!emailRegex.test(email)) return res.status(400).send("Invalid email");
  if (!passwordRegex.test(password)) return res.status(400).send("Invalid password format");

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (results.length === 0) return res.status(401).send("User not found");

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Incorrect password");

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
    return res.json({ message: "Login successful", token });
  });
});



//get
router.get("/user", (req, res) => {
  db.query("SELECT id, first_name, last_name, dob, phone, city, state, email FROM users", (err, results) => {
    if (err) return res.status(500).send("Error retrieving users");
    if (results.length === 0) return res.status(404).send("No users found");
    res.json(results);
  });
});


//delete
router.delete("/user/:id", (req, res) => {
  const userId = req.params.id;

  db.query("DELETE FROM users WHERE id = ?", [userId], (err, result) => {
    if (err) return res.status(500).send("Error deleting user");
    if (result.affectedRows === 0) return res.status(404).send("User not found");
    res.send("User deleted successfully");
  });
});

//update password
router.put("/user/password/:id", async (req, res) => {
  const userId = req.params.id;
  const { old_password, new_password } = req.body;

  if (!passwordRegex.test(new_password)) return res.status(400).send("New password must be at least 6 characters");

  db.query("SELECT * FROM users WHERE id = ?", [userId], async (err, results) => {
    if (err) return res.status(500).send("Error retrieving user");
    if (results.length === 0) return res.status(404).send("User not found");

    const user = results[0];
    const isMatch = await bcrypt.compare(old_password, user.password);
    if (!isMatch) return res.status(401).send("Incorrect old password");

    const hashedPassword = await bcrypt.hash(new_password, 10);
    db.query("UPDATE users SET password = ? WHERE id = ?", [hashedPassword, userId], (err) => {
      if (err) return res.status(500).send("Error updating password");
      res.send("Password updated successfully");
    });
  });
});



router.post('/donate', (req, res) => {
  const { donor_name, amount, project_id, user_id } = req.body;

  if (!donor_name || !amount || !project_id || !user_id) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = 'INSERT INTO donations (donor_name, amount, project_id, user_id) VALUES (?, ?, ?, ?)';
  db.query(sql, [donor_name, amount, project_id, user_id], (err, result) => {
    if (err) {
      console.error("Mysql Error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({ message: "Donation added", donationId: result.insertId });
  });
});

// 2. READ all donations with user info
router.get('/donations', (req, res) => {
  const sql = `
    SELECT donations.id, donations.project_id, donations.donor_name, donations.amount, donations.donation_date, 
           users.first_name, users.last_name, users.email 
    FROM donations 
    JOIN users ON donations.user_id = users.id
  `;
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Fetch Error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({ donations: results });
  });
});

// 3. READ donations by user
router.get('/donations/user/:user_id', (req, res) => {
  const sql = 'SELECT * FROM donations WHERE user_id = ?';
  db.query(sql, [req.params.user_id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.status(200).json({ donations: results });
  });
});

// 4. READ donations by project
router.get('/donations/project/:project_id', (req, res) => {
  const sql = 'SELECT * FROM donations WHERE project_id = ?';
  db.query(sql, [req.params.project_id], (err, results) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.status(200).json({ donations: results });
  });
});

// 5. UPDATE a donation
router.put('/donation/:id', (req, res) => {
  const { donor_name, amount, project_id, user_id } = req.body;
  const donationId = req.params.id;

  if (!donor_name || !amount || !project_id || !user_id) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = `
    UPDATE donations 
    SET donor_name = ?, amount = ?, project_id = ?, user_id = ? 
    WHERE id = ?
  `;
  db.query(sql, [donor_name, amount, project_id, user_id, donationId], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Donation not found" });
    }
    res.status(200).json({ message: "Donation updated" });
  });
});

// 6. DELETE a donation
router.delete('/donation/:id', (req, res) => {
  const sql = 'DELETE FROM donations WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Donation not found" });
    }
    res.status(200).json({ message: "Donation deleted" });
  });
});


module.exports = router;