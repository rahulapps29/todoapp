const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [200, "Name can not be more then 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Task", TaskSchema);
const Luthra = mongoose.model("Luthra", TaskSchema);
const ListItem = mongoose.model("List", TaskSchema);
module.exports = { Task, Luthra, ListItem };
