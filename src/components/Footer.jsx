import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import "../styles/Footer.css"

export default function Footer() {
  return (
    <footer>
    <p>
      Coded with ❤️ &nbsp;by&nbsp;
      {/* Creating a link Component will prompt redirect due to config in App.js. Use onClick attribute to open link instead */}
      <Router>
        <Link to="https://github.com/ashleypean">
          Ashley Pean
        </Link>
      </Router>

      </p>      
  </footer>
  )
}
