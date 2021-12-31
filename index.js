const express = require("express");
const { connectDB } = require("./config/db");
// create server
const app = express();

// connect to database
connectDB();

app.use(express.json({ extended: true }));

// add routing
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 4000;
// server on
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
