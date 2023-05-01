// we install mongoose and require it to create a mongoDB
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
// we declare a constant and give it the url of our cluster from atlas
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

// we invoke the connect method
mongoose.connect(MONGO_URI,{
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'implicit-null-quotes'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// define our schema for our quotes
const quoteSchema = new Schema({
  text: { type: String, required: true },
  author: { type: String, required: true }
})

// define a constant Quote that will be assigned our quotes collection
const Quote = mongoose.model('quote', quoteSchema)

// export our collection
  module.exports = Quote