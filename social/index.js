const express = require("express");

const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(400).send("hello World");
});

app.listen(PORT, () => {
  console.log(`Express app is running on port ${PORT}`);
});
