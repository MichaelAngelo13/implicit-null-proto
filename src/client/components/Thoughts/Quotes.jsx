import React, { useState, useEffect } from "react";

function Quotes() {
  // destructure useState setting state as an empty array
  const [quotes, setQuotes] = useState([]);
  // TODO: For now we can only traverse the pages, would like to implement numbers we can click
  const [pageNum, setPageNum] = useState(1);

  // define useEffect
  useEffect(() => {
    // declare a random number from 2-17
    const randomPageNum = Math.floor(Math.random() * 17);

    // declare an async func to fetch our quotes
    async function fetchQuotes() {
      const response = await fetch(`/api/quotes/${pageNum}`);
      const data = await response.json();
      const fetchedQuotes = data.results;
      console.log(fetchedQuotes);

      // when we have our quote Objects we set them as our quotes
      setQuotes(fetchedQuotes);
    }
    // we invoke our async func
    fetchQuotes();
  }, [pageNum]);

  // TODO: make this synchronized with the fetch of quotes
  // random number for authors
  function randomNum() {
    return Math.floor(Math.random() * 999999);
  }

  // create onClick from original quotes
  function handleAddThought(e) {
    // stops the from from submitting
    e.preventDefault();
    // we declare our value
    const input = document.getElementById("add-thought");
    const value = input.value;
    // then we send it to our server
    fetch("/db/addQuote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quote: value }),
    });
    input.value = "";
  }

  // create onClick for quotes
  const handleAddQuote = (e, quote, author) => {
    // TODO: I am using a form but will experiment w this and the form;
    e.preventDefault();

    // then we send it to our server
    fetch("/db/addStrangerQuote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quote,
        author,
      }),
    });
  };

  const handlePageTraversal = (pageTraversal) => {
    if (pageNum + pageTraversal <= 0 || pageNum + pageTraversal >= 18) return;
    setPageNum(pageNum + pageTraversal);
  };

  // TODO: I also want to have a poems section; fix form
  return (
    <div id="quotes-stack">
      <form autoComplete="off">
        <div id="holds-add">
          <div>
            <input id="add-thought" type="text" placeholder="???" />
          </div>

          <div>
            <button onClick={handleAddThought}>add</button>
          </div>
        </div>
      </form>

      <h3>thoughts from strangers</h3>

      <nav id="nav-button-container">
        <button onClick={() => handlePageTraversal(-1)}>back</button>
        <button onClick={() => handlePageTraversal(1)}>next</button>
      </nav>

      {quotes.length === 0 ? (
        <h2>loading ...</h2>
      ) : (
        quotes.map((quoteObj) => (
          <section key={quoteObj.id} id="quote-container">
            Stranger {randomNum()}:<br />
            <div id="holds-add">{quoteObj.quote}</div>
            <button
              id="add-on-quotes"
              onClick={(click) =>
                handleAddQuote(click, quoteObj.quote, quoteObj.author)
              }
            >
              add
            </button>
          </section>
        ))
      )}
    </div>
  );
}

export default Quotes;
