const path = require("path");
let t = __dirname;
let tlength = t.substring(t.lastIndexOf("\\") + 1);
tlength = tlength.length;
t = t.substring(0, t.length - tlength - 1);
const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  // editTask,
} = require(path.resolve(t, "controllers", "tasks.js"));

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);
// .put(editTask);

module.exports = router;
