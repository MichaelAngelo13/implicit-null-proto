// import path, express, and the invocation of express to use their methods
const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

// we can use the sendFile method available from our response and path to create an absolute path to go to new html files
app.use('/nice', (req, res) => res.sendFile(path.join(__dirname, '../client/html-pages/nice.html')))

// to open a new page send a get request to an extension that will then serve a new html




/**
 * handle requests for static files on our serverside
 */
app.use(express.static(path.resolve(__dirname, '../client')));
/**
* start server
*/
app.listen(PORT, () => {
 console.log(`Server listening on port: ${PORT}...`);
});