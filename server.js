const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let luaCode = ""; // Store the LuaU code

// Route to receive LuaU code
app.post('/execute', (req, res) => {
  luaCode = req.body.code || ""; // Use an empty string if no code is provided
  console.log("Received LuaU code:", luaCode);
  res.send("LuaU code received and stored.");
});

// Route to fetch LuaU code for Roblox executor
app.get('/code', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // Send JSON response with an ID and code
  res.json([1, luaCode]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
