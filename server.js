const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const server = app.listen(process.env.PORT || 8080, function () {
  const port = server.address().port;
  console.log("App now running on port", port);
});
