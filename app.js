const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddlerware = require("./middleware/error-handler");
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddlerware);
// app.get("/hello", (req, res) => {
//   res.send("<br><hr><h1>Task Manager App</h1><hr>");
// });

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
