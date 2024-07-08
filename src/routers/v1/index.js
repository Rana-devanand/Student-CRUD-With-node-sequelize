const express = require("express");
const controller = require("../../controllers/student-controller");

const router = express.Router();

router.post("/stu", controller.create);
router.delete("/stu/:id", controller.destroy);

module.exports = router;
