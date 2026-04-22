// Import Express framework
const express = require("express");

// Create Express app
const app = express();

// Middleware to read JSON body from requests
app.use(express.json());

// In-memory storage (acts like a temporary database)
const urlDatabase = {};

// Function to generate random 6-character short code
function generateCode() {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    code += chars[randomIndex];
  }

  return code;
}


// API 1: Shorten URL

app.post("/shorten", (req, res) => {
  const { url } = req.body;

  // Validate URL input
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  // Generate short code
  const shortCode = generateCode();

  // Store mapping
  urlDatabase[shortCode] = url;

  // Send response
  res.json({
    shortUrl: `http://localhost:3000/${shortCode}`,
  });
});

// API 2: Redirect to Original URL
app.get("/:code", (req, res) => {
  const code = req.params.code;

  // Look up the original URL
  const originalUrl = urlDatabase[code];

  // If code does not exist
  if (!originalUrl) {
    return res.status(404).send("URL not found");
  }

  // Redirect to original URL
  res.redirect(originalUrl);
});

// ----------------------------
// Start Server
// ----------------------------
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});