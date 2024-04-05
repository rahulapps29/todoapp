const path = require("path");
let t = __dirname;
let tlength = t.substring(t.lastIndexOf("\\") + 1);
tlength = tlength.length;
t = t.substring(0, t.length - tlength - 1);
const { CustomAPIError } = require(path.resolve(
  t,
  "errors",
  "custom-error.js"
));
const errorHandlerMiddlerware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: `Something went wrong, please try again` });
};

module.exports = errorHandlerMiddlerware;
