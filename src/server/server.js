// import path, express, and the invocation of express to use their methods
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

const quoteController = require("./controllers/quoteController");
const philoAPIController = require("./controllers/philoAPIController");

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// to open a new page send a get request to an extension that will then serve a new html
// we can use the sendFile method available from our response and path to create an absolute path to go to new html files
// app.use('/nice', quoteController.niceTest, (req, res) => res.sendFile(path.join(__dirname, '../client/html-pages/nice.html')));

// need route to handle creation of original quote
// ? strangely this route would not work using a use method, had to be post
// adds quotes to our quote collection
app.post("/db/addQuote", quoteController.addQuote, (req, res) => {
  res.status(200).json(res.locals.newQuote);
});

// handles creation of api quote
app.post(
  "/db/addStrangerQuote",
  quoteController.addStrangerQuote,
  (req, res) => {
    res.status(200).json(res.locals.newStrangerQuote);
  }
);

// to handle deletion
app.delete(
  "/db/deleteQuote/:quoteId",
  quoteController.deleteQuote,
  (req, res) => {
    res.status(200).json(res.locals.deletedQuote);
  }
);

// and to handle getting(will be initiated by the front end mostlikely)
app.get("/db/savedQuotes", quoteController.getQuotes, (req, res) => {
  res.status(200).json(res.locals.quotes);
});

// get api quotes through proxy
app.get("/api/quotes/:pageNum", philoAPIController.getAPIQuotes, (req, res) => {
  return res.status(200).json(res.locals.parsedQuotes);
});

// lastly updating

/**
 * handle requests for static files on our serverside
 */
// TODO: here i need to make it so when we are in production we read from dist directory
app.use(express.static(path.resolve(__dirname, "../client")));

/* express error handler */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

// export app to import in other files
module.exports = app;
