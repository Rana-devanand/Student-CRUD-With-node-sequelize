const express = require("express");
const { PORT } = require("./src/config/serverConfig");

const app = express();

const setupAndStartService = () => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
};

setupAndStartService();
