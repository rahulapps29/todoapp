const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://rahul:rahul@atlascluster.umutyha.mongodb.net/toDoApp?retryWrites=true&w=majority&appName=AtlasCluster";

const connetDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to the DB..."))
    .catch((err) => console.log(err));
};

module.exports = connetDB;
