// import path, express, and the invocation of express to use their methods
const path = require('path');
const express = require('express');
const app = express();

const quoteController = require('./controllers/quoteController')

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());

// to open a new page send a get request to an extension that will then serve a new html
// we can use the sendFile method available from our response and path to create an absolute path to go to new html files
app.use('/nice', quoteController.niceTest, (req, res) => res.sendFile(path.join(__dirname, '../client/html-pages/nice.html')))



/**
 * handle requests for static files on our serverside
 */
app.use(express.static(path.resolve(__dirname, '../client')));


/* express error handler */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
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