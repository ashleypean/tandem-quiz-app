import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {

  return (
    <nav>
        <NavLink exact to="/"className="nav-link" activeClassName="selected-nav-item">
          Home
        </NavLink>
        <NavLink to="/instructions" className="nav-link" activeClassName="selected-nav-item">
          Instructions
        </NavLink>
        <NavLink to="/quiz" activeClassName="selected-nav-item">
          Take a Quiz
        </NavLink>
      </nav>
  )
}
