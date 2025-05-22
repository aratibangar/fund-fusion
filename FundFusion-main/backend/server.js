const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // ✅ Only declare once

const app = express();

//✅ Enable CORS for your frontend
app.use(cors({
  origin: 'http://localhost:5173', // frontend port
}));

app.use(bodyParser.json());

const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");


app.use("/api", authRoutes);
app.use("/api", contactRoutes);


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
