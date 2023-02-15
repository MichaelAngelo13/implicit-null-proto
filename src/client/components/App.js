import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Thoughts from './Thoughts.jsx'
import Wordfog from './Wordfog.jsx'

import '../stylesheets/styles.css'

function App() {
    return (
      <Router>
        <main>
          <Routes>
            <Route path="/nicer" element={<Thoughts />}></Route>
            <Route path="/word-fog" element={<Wordfog />}></Route>
          </Routes>
        </main>
      </Router>
    )
}

export default App;