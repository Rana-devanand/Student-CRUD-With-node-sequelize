const express = require("express");
const { PORT } = require("./src/config/serverConfig");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const setupAndStartService = () => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
};

setupAndStartService();
