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
    <div className="flex flex-col items-center gap-2">
      <form autoComplete="off" className="mt-10 flex items-center gap-2">
        <input type="text" placeholder="???" className="rounded-sm" />

        <div>
          <button
            onClick={handleAddThought}
            className="rounded-md border-2 border-black px-1"
          >
            add
          </button>
        </div>
      </form>

      <h3 className="italic">thoughts from strangers</h3>

      <nav className="mb-2 flex gap-3 rounded-sm px-2 py-1">
        <button
          onClick={() => handlePageTraversal(-1)}
          className="text-md rounded-sm bg-white px-2"
        >
          back
        </button>
        <button
          onClick={() => handlePageTraversal(1)}
          className="text-md rounded-sm bg-white px-2"
        >
          next
        </button>
      </nav>

      <section className="flex w-full flex-col items-center gap-3">
        {quotes.length === 0 ? (
          <h2>loading ...</h2>
        ) : (
          quotes.map((quoteObj) => (
            <div
              key={quoteObj.id}
              className="flex w-5/12 flex-col items-center gap-2 rounded-md bg-white px-2 py-3"
            >
              Stranger {randomNum()}:<br />
              <div className="">{quoteObj.quote}</div>
              <button
                className="w-20 rounded-md border-2 border-black bg-white"
                onClick={(click) =>
                  handleAddQuote(click, quoteObj.quote, quoteObj.author)
                }
              >
                add
              </button>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Quotes;
