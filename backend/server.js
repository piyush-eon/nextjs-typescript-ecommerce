const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.listen(5000, () => {
  console.log(`Server Started on PORT ${PORT}!`);
});
