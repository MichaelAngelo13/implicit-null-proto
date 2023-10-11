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
    <div id="quotes-stack">
      <section className="flex flex-col items-center gap-4">
        {savedQuotes
          .map((quote) => {
            return (
              <div
                className="flex w-5/12 flex-col items-center gap-2 rounded-md bg-white px-2 py-3"
                key={`${quote._id}`}
              >
                {quote.text}
                <br />
                {quote.author}
                <br />
                <button
                  className="w-20 rounded-md border-2 border-black bg-white"
                  onClick={(click) => handleDeleteQuote(click, quote._id)}
                >
                  delete
                </button>
              </div>
            );
          })
          .reverse()}
      </section>
    </div>
  );
}

export default SavedQuotes;
