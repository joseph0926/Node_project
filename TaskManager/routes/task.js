const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.get("/:id", taskController.getTask);
router.post("/:id", taskController.updateTask);
router.post("/:id", taskController.deleteTask);

module.exports = router;
