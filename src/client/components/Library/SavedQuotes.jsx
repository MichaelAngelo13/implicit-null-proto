import React, { useState, useEffect, uesRef } from "react";
// import { Link } from 'react-router-dom'

function SavedQuotes() {
  const [savedQuotes, setSavedQuotes] = useState([]);

  // declare a interval id

  async function fetchSavedQuotes() {
    const response = await fetch("/db/savedQuotes");
    const data = await response.json();
    const fetchedQuotes = data;
    setSavedQuotes(fetchedQuotes);
  }

  // define useEffect
  useEffect(() => {
    // we invoke our async func
    fetchSavedQuotes();
  }, []);

  // declare a func to delete quote from database
  function handleDeleteQuote(e, id) {
    const quoteId = id;
    console.log(quoteId);
    // initiate fetch delete request
    fetch(`/db/deleteQuote/:${quoteId}`, {
      method: "DELETE",
    })
      // once we delete it from our database we reload the page
      .then((_) => fetchSavedQuotes());
  }

  return (
    <main id="quotes-stack">
      <div>
        {savedQuotes
          .map((quote) => {
            return (
              <div id="quote-container" key={`${quote._id}`}>
                {quote.text}
                <br />
                {quote.author}
                <br />
                <button
                  onClick={(click) => handleDeleteQuote(click, quote._id)}
                >
                  delete
                </button>
              </div>
            );
          })
          .reverse()}
      </div>
    </main>
  );
}

export default SavedQuotes;
