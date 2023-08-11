import React from "react";
import { Link } from "react-router-dom";

function EasterEgg() {
  // function to set volume, has to be done once page is loaded to grab audio element that is rendered
  window.onload = () => {
    let audio = document.getElementById("faces-song");
    audio.volume = 0.65;
  };

  return (
    <main id="easter-page">
      <div>
        <img id="face-animation" src="../assets/face-animation.gif" />
      </div>

      <section id="lyrics">
        you are a liar with all of these faces <br />
        internet, public, and in your own spaces
        <br />
        nobody chooses the one they are born with
        <br />
        so how is that fair?
        <br />
        i want to see your mind
        <br />
        but it's behind your..
        <br />
        but its behind your face.
        <br />
      </section>

      <h5>
        <Link id="logo-home" to="/">
          .implicit Null
        </Link>
      </h5>
      <audio id="faces-song" volume={0} autoPlay>
        <source src="../assets/man-facereveal-funeral-clip.wav" />
      </audio>
    </main>
  );
}

export default EasterEgg;
