import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div id="landing-page" className="h-screen">
      <header className="flex items-center bg-white">
        <h1 className="mb-3 mt-3 border-r-2 border-black pr-8 text-7xl">
          .implicit Null
        </h1>

        <nav className="flex flex-1 justify-around">
          <Link to="/thoughts">strangers' thoughts</Link>
          <Link to="/word-fog">word fog</Link>
          <Link to="/library">words you gave time</Link>
        </nav>

        <a
          href="/linkedIn"
          className="relative w-40 border-l-2 border-black pl-12"
        >
          <img
            src="../assets/wire-face.jpg"
            className="h-16 border-[1px] border-black"
          />
        </a>
      </header>

      <section className="w- relative flex flex-col items-center pt-36">
        <div>
          <img src="../assets/proto-img.png" className="absolute w-[430px]" />
          <img
            className="duration-1500 h-[298px] w-[430px] opacity-0 transition-opacity ease-in hover:opacity-95"
            src="../assets/faces-you-dont-remember.png"
          />
          <Link
            className="absolute left-[630px] top-72 opacity-0 hover:opacity-95"
            to="/easterEgg"
          >
            egg
          </Link>
        </div>
      </section>

      <p className="end-0 m-12 text-lg">
        fog hides nothing to be seen, or does it?
      </p>
    </div>
  );
}

export default LandingPage;
