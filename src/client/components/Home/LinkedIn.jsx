import React from "react";
import { Link } from "react-router-dom";

function LinkedIn() {
  return (
    <section className="flex flex-col items-center">
      <img className="my-10 h-auto w-96" src="../assets/ricky-roll.png" />
      in the future we won't need words to communicate
      <h5>
        <Link id="logo-home" to="/">
          .implicit Null
        </Link>
      </h5>
    </section>
  );
}

export default LinkedIn;
