import React, { useState, useEffect } from "react";

function TheFog() {
  // destructure useState setting state as an empty array
  const [thefog, setTheFog] = useState([]);

  // define useEffect
  useEffect(() => {
    setInterval(() => {
      // declare an async func to fetch our quotes
      async function fetchSavedQuotes() {
        const response = await fetch("/db/savedQuotes");
        const data = await response.json();
        const fetchedQuotes = data;
        // when we have our quote Objects we set them as our quotes
        setTheFog(fetchedQuotes);
      }
      // we invoke our async func
      fetchSavedQuotes();
    }, 3000);
  }, []);

  return (
    <section>
      <div>
        {thefog.map((word, i) => {
          // create a random generator for top and left position
          const left = Math.floor(Math.random() * 1000);
          const top = Math.floor(Math.random() * 750);
          console.log(top, left);
          return (
            <div
              key={i}
              id="word-fog"
              style={{
                position: "absolute",
                top: `${top}px`,
                left: `${left}px`,
              }}
            >
              {word.text}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TheFog;
