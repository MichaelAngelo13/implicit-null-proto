// import app to hande routes // ! likely will change to router
const app = require("../server.js");

const philoController = {};

// get quotes from philosophy api
philoController.getAPIQuotes = (req, res, next) => {
  // destructure pageNum from params
  const { pageNum } = req.params;

  // make a fetch to our api endpoint
  fetch(`https://philosophyapi.pythonanywhere.com/api/ideas/?page=${pageNum}`)
    .then((jsonQuotes) => {
      // parse the json response
      return jsonQuotes.json();
    })
    .then((parsedQuotes) => {
      // persist in locals
      res.locals.parsedQuotes = parsedQuotes;
      // go to next
      return next();
    })
    .catch((err) => {
      console.log("dang");
      next(err);
    });
};

module.exports = philoController;
