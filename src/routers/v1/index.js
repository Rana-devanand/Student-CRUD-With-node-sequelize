const express = require("express");
const controller = require("../../controllers/student-controller");

const router = express.Router();

router.post("/stu", controller.create);
router.delete("/stu/:id", controller.destroy);
router.get("/stu/:id", controller.get);
// router.update("/stu/:id", controller.update);
// not define yet

module.exports = router;
