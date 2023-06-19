import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import LandingPage from './Home/LandingPage.jsx'
import Thoughts from './Thoughts/Thoughts.jsx'
import Wordfog from './Home/Wordfog.jsx'
import Library from './Library/Library.jsx'
import EasterEgg from './Home/EasterEgg.jsx'
import LinkedIn from './Home/LinkedIn.jsx'

import '../stylesheets/styles.css'

// to fix this we added a historyAPIFallback prop equal to true in the webconfig
function App() {
    return (
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/thoughts" element={<Thoughts />}></Route>
            <Route path="/word-fog" element={<Wordfog />}></Route>
            <Route path="/library" element={<Library />}></Route>
            <Route path="/easterEgg" element={<EasterEgg />}></Route>
            <Route path="/linkedIn" element={<LinkedIn />}></Route>
          </Routes>
        </main>
      </Router>
    )
}

export default App;