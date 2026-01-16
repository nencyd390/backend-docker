const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Backend  , server is running on port number 3000 ");
});

app.listen(3000, () => {
  console.log("Server running");
});

