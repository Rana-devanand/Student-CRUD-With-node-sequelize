const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const studentRepo = require("./repository/student-repository");

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
    const repo = new studentRepo();
  });
};

setupAndStartService();
