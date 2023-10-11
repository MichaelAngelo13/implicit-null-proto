import React from "react";
import Quotes from "./Quotes.jsx";
import { Link } from "react-router-dom";

function Thoughts() {
  return (
    <div>
      <Link to="/" className="text-5xl">
        .implicit Null
      </Link>

      <div className="mt-3">
        <Quotes />
      </div>
    </div>
  );
}

export default Thoughts;
