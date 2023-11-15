import React from "react";
import SavedQuotes from "./SavedQuotes.jsx";
import { Link } from "react-router-dom";

function Library() {
  return (
    <div id="the-library" className="h-screen">
      <Link className="text-5xl" to="/">
        .implicit Null
      </Link>

      <section className="mt-6">
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
