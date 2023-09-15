require('dotenv').config()
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "server has been hitted on /",
  });
});

app.listen(5001, () => {
  console.log(`server is running at http://localhost:5001`);
});
