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
      <form autoComplete="off" className="mt-5 flex items-center gap-2">
        <input
          type="text"
          placeholder="???"
          className="rounded-sm border-[1px] border-black bg-white px-1"
        />

        <div>
          <button
            onClick={handleAddThought}
            className="rounded-md border-2 border-black bg-white px-1"
          >
            add thought
          </button>
        </div>
      </form>

      <div className="bg-white italic">
        {quotes.length === 0 ? (
          <h3 className="animate-pulse">. . .</h3>
        ) : (
          <h3 className="animate-pulse">search for thoughts</h3>
        )}
      </div>

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

      <section className="my-4 flex w-full flex-wrap justify-center gap-4">
        {quotes.length !== 0 &&
          quotes.map((quoteObj) => (
            <div
              key={quoteObj.id}
              className="flex flex-col items-center justify-center gap-2 rounded-md bg-white px-3 py-5 opacity-0 transition duration-1000 ease-in-out hover:opacity-100 sm:w-11/12 md:w-1/3 xl:w-1/4"
            >
              {/* TODO: Handle how stranger appears {randomNum()} */}
              Stranger:
              <br />
              <div className="">{quoteObj.quote}</div>
              <button
                className="w-20 rounded-md border-2 border-black bg-white  transition duration-200 ease-in-out hover:bg-black hover:text-white"
                onClick={(click) =>
                  handleAddQuote(click, quoteObj.quote, quoteObj.author)
                }
              >
                add
              </button>
            </div>
          ))}
      </section>
    </div>
  );
}

export default Quotes;
