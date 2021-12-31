const express = require("express");
const { connectDB } = require("./config/db");
// create server
const app = express();

// connect to database
connectDB();

app.get("/", (request, response) => {
  response.send("hello world");
});

const PORT = process.env.PORT || 4000;
// server on
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
