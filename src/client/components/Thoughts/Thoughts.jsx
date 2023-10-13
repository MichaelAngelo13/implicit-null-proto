import React, { useState, useEffect, useMemo } from "react";
import Quotes from "./Quotes.jsx";
import { Link } from "react-router-dom";
import bgWordsArr from "./bg-words.js";

function Thoughts() {
  const [bgWords, setBgWords] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < bgWordsArr.length) {
        setBgWords((prevText) => prevText + `${bgWordsArr[currentIndex]} `);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  const memoizedWords = useMemo(() => {
    return <p>{bgWords}</p>;
  }, [bgWords]);

  return (
    <div className="relative flex flex-col items-center ">
      <div className="absolute left-0 top-0 z-0 w-full whitespace-normal text-start text-lg">
        {memoizedWords}
      </div>

      <div className="relative z-10 mt-4 w-1/3 rounded-md bg-white py-12 text-center">
        <Link to="/" className="text-5xl">
          .implicit Null
        </Link>
      </div>

      <div className="z-10 mt-3">
        <Quotes />
      </div>
    </div>
  );
}

export default Thoughts;
