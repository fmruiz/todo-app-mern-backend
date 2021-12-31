const express = require("express");
// create server
const app = express();

app.get('/', (request, response) => {
    response.send('hello world')
})

const PORT = process.env.PORT || 4000;
// server on
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
