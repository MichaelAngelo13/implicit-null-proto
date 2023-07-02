import React, { useState, useEffect } from 'react';


function Quotes() {
  // destructure useState setting state as an empty array
  const [quotes, setQuotes] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  // TODO: declare a variable to represent our page number

  // define useEffect
  useEffect(() => {
    // declare a random number from 2-17
    const randomPageNum = Math.floor(Math.random() * 17)

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

  // random number for authors
  function randomNum() {
    return Math.floor(Math.random() * 999999)
  }

  // create onClick from original quotes
  function handleAddThought(e) {
    // stops the from from submitting
    e.preventDefault()
    // we declare our value
    const input = document.getElementById('add-thought');
    const value = input.value;
    // then we send it to our server
    fetch('/db/addQuote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({quote: value})
    });
    input.value = '';
  }

  // create onClick for quotes
  const handleAddQuote = (e, id) => {
    // stops the from from submitting
    e.preventDefault()
    // we declare our id
    const quoteId = id;
    console.log(id);
    // then we send it to our server
    fetch('/db/addStrangerQuote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({quoteId: quoteId})
    });
  }

  const handlePageTraversal = pageTraversal => {
    if (pageNum + pageTraversal === 0) return;
    setPageNum(pageNum + pageTraversal);
  }

  // TODO: I also want to have a poems section
  return (
    <div id="quotes-stack">

      <form autocomplete="off">
        <div id="holds-add">
          <div>
            <input id="add-thought" type="text" placeholder='???'/>
          </div>

          <div>
            <button onClick={handleAddThought}>add</button>
          </div>
        </div>
      </form>

      <h3>thoughts from strangers</h3>

      <div id="nav-button-container">
        <button onClick={() => handlePageTraversal(-1)}>back</button>
        <button onClick={() => handlePageTraversal(1)}>next</button>
      </div>

      {quotes.length === 0 ? (
          <h2>loading</h2>
      ) :
      quotes.map((quote) => (
        <div key={quote.id} id="quote-container">
          Stranger {randomNum()}:<br/>
          <div id="holds-add">
          {quote.quote}
          </div>
          <button id="add-on-quotes" onClick={(click) => handleAddQuote(click, quote.id)}>add</button>
        </div>
      ))}
    </div>
  );

}

export default Quotes;