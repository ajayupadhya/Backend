const express = require("express");
const dateF = require("date-format");
const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(400).send("hello World");
});

app.get("/api/v1/instagram", (req, res) => {
  const data = {
    user: "Ajay Upadhyay",
    follow: 20,
    follower: 1000,
    date: dateF("hh:mm:ss.SSS", new Date()),
  };
  res.status(400).json(data);
});

app.get("/api/v1/:id/", (req, res) => {
  res.status(200).send(`${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`Express app is running on port ${PORT}`);
});
