const path = require("path");
let t = __dirname;
let tlength = t.substring(t.lastIndexOf("\\") + 1);
tlength = tlength.length;
t = t.substring(0, t.length - tlength - 1);
const{ Task, Luthra, ListItem } = require(path.resolve(t, "models", "Task.js"));
const asyncWrapper = require(path.resolve(t, "middleware", "async.js"));
const { createCustomError } = require(path.resolve(
  t,
  "errors",
  "custom-error.js"
));
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  console.log({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  console.log(req.params);
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  console.log(req.params);
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

// const editTask = asyncWrapper(async (req, res) => {
//   const { id: taskID } = req.params;
//   const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//     new: true,
//     runValidators: true,
//     overwrite: true,
//   });
//   if (!task) {
//    return next(createCustomError(`No task with id: ${taskID}`, 404));
//   }
//   res.status(200).json({ task });
// });

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  // editTask,
};
