const Quote = require('../models/quote')

const quoteController = {};

quoteController.niceTest = (req, res, next) => {
  // created a test document that gets added to atlas db(tested and working)
  Quote.create({ text: 'this is a test', author: 'myself'})
  .then(doc => {
    // we then go to our next mw func
    return next()
  })
  .catch(err => {
    console.log('dang');
    next(err)});
}

// creates documents
quoteController.addQuote = (req, res, next) => {
  // add a document to my quote collection
  Quote.create({ text: req.body.quote, author: 'a person in fog'})
  .then(doc => {
    // add body to locals
    res.locals.newQuote = req.body;
    // we then go to our next mw func
    return next()
  })
  .catch(err => {
    console.log('dang');
    next(err)});
}

quoteController.addStrangerQuote = (req, res, next) => {
  async function fetchQuotes() {
    // fecth the api quotes
    const response = await fetch('https://philosophyapi.pythonanywhere.com/api/ideas/');
    const data = await response.json();
    const fetchedQuotes = data.results;
    // declare selected quote object
    const quoteObject = fetchedQuotes[req.body.quoteId - 1];
    // add a document to my quote collection 
    Quote.create({ text: quoteObject.quote, author: quoteObject.author})
    .then(doc => {
      // add body to locals
      res.locals.newStrangerQuote = doc;
      // we then go to our next mw func
      return next()
    })
    .catch(err => {
      console.log('dang');
      next(err)});
  }

  return fetchQuotes()
}

// get documents
quoteController.getQuotes = (req, res, next) => {
  // add a document to my quote collection
  Quote.find({})
  .then(doc => {
    // add body to locals
    res.locals.quotes = doc;
    // we then go to our next mw func
    return next()
  })
  .catch(err => {
    console.log('dang');
    next(err)});
}

// delete a quote
quoteController.deleteQuote = (req, res, next) => {
  // declare our correct id; by removing the colon in front of it; not sure why its there
  const quoteId = req.params.quoteId.replace(/[^a-z]/i, '')
  // find and delte the doc
  Quote.findByIdAndDelete(quoteId)
  .then(doc => {
    res.locals.deletedQuote = doc;
    return next();
  })
  .catch(err => {
    console.log('dang');
    next(err)});
}





// to connect our database we create a chain of export/imports that has the js file containing our database
module.exports = quoteController;