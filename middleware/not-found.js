const notFound = (req, res) =>
  res
    .status(404)
    .send(`<h1><hr>Route doesn't exist for URL: ${req.url}<hr></h1>`);
module.exports = notFound;
