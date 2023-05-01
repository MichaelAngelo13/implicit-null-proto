import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

 function SavedQuotes() {

  // destructure useState setting state as an empty array
  const [savedQuotes, setSavedQuotes] = useState([]);

  // define useEffect
  useEffect(() => {
    // declare an async func to fetch our quotes
    async function fetchSavedQuotes() {
      const response = await fetch('http://localhost:3000/savedQuotes');
      const data = await response.json();
      const fetchedQuotes = data;
      // when we have our quote Objects we set them as our quotes
      setSavedQuotes(fetchedQuotes);
    }
    // we invoke our async func
    fetchSavedQuotes();
  }, []);

  // declare a func to delete quote from database
  function handleDeleteQuote(e, id) {
    const quoteId = id;
    console.log(quoteId);
    // initiate fetch delete request
    fetch(`http://localhost:3000/deleteQuote:${quoteId}`, {
      method: 'DELETE'
    })
    // once we delete it from our database we reload the page
    .then(doc => window.location.reload());
  }


  return (
    <main id="quotes-stack">
      <div>
        {savedQuotes.map(quote => {
          return (
            <div id="quote-container" key={`${quote._id}`}>
              {quote.text}<br/>
              {quote.author}<br/>
              <button onClick={(click) => handleDeleteQuote(click, quote._id)}>delete</button>
            </div>
        )}).reverse()}
      </div>
    </main>
  )
}

export default SavedQuotes;