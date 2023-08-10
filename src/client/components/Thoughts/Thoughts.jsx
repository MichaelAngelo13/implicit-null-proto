import React from "react";
import Quotes from "./Quotes.jsx";
import { Link } from "react-router-dom";

function Thoughts() {
  return (
    <main id="main-page">
      <h1 id="brand">
        <Link id="logo-home" to="/">
          .implicit Null
        </Link>
      </h1>

      <div id="quotes">
        <Quotes />
      </div>
    </main>
  );
}

export default Thoughts;
