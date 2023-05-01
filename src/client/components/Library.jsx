import React from 'react'
import SavedQuotes from './SavedQuotes.jsx'
import { Link } from 'react-router-dom'

function Library() {
  return(
    <main id="main-page">
      <h1 id="brand"><Link id="logo-home" to="/">.implicit Null</Link></h1>

      <div id="quotes">
        <SavedQuotes />
      </div>
      <p>
      save it before it disappears<br/>
      because it <em>will</em> disappear
      </p>
    </main>
  )
}

export default Library;