const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let luaCode = ""; 

app.post('/execute', (req, res) => {
  luaCode = req.body.code;
  console.log("Received LuaU code:", luaCode);
  res.send("LuaU code received");
});

app.get('/code', (req, res) => {
  res.json([1, luaCode]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
