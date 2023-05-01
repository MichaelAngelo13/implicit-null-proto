import React from 'react';
import { Link } from 'react-router-dom'

 function LandingPage() {
  return (
    <main id="main-page">
      <div id="header">
        <h1 id="brand">.implicit Null</h1>

        <div id="nav-button-container">
          <button id="homepage-button"><Link id="homepage-button" to='/thoughts'>strangers' thoughts</Link></button>
          <button id="homepage-button"><Link id="homepage-button" to='/word-fog'>word fog</Link></button>
          <button id="homepage-button"><Link id="homepage-button" to='/library'>words you gave time</Link></button>
        </div>

        <div id="obey">
          <img id="obey-img" src="../assets/wire-face.jpg"/>
          <Link id="linkedIn" to="/linkedIn">0.0</Link>
        </div>
      </div>

      <div id="main-body">

        <div id="imgs-holder">
          <img id="proto-img" src="../assets/proto-img.png"></img>
          <img id="forgotten-faces" src="../assets/faces-you-dont-remember.png"></img>
          <Link id="easter-egg" to="/easterEgg">egg</Link>
        </div>
        
        <p id="slogan">fog hides nothing to be seen, or does it?</p>
      </div>
    </main>
  )
}

export default LandingPage;