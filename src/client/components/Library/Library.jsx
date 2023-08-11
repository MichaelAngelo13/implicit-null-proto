import React from "react";
import SavedQuotes from "./SavedQuotes.jsx";
import { Link } from "react-router-dom";

function Library() {
  return (
    <div id="main-page">
      <h1 id="brand">
        <Link id="logo-home" to="/">
          .implicit Null
        </Link>
      </h1>

      <section id="quotes">
        <SavedQuotes />
      </section>
      <footer>
        save it before it disappears
        <br />
        because it <em>will</em> disappear
      </footer>
    </div>
  );
}

export default Library;
