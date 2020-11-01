import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav>
        <Link className="nav-link">
          Home
        </Link>
        <Link to="/instructions" className="nav-link">
          How to Play
        </Link>
        <Link to="/quizzes/create">
          Create a Quiz
        </Link>
        <Link to="/quizzes/take">
          Take a Quiz
        </Link>
        <Link to="/upcoming-features" className="nav-link">
          Upcoming Features
        </Link>
      </nav>
  )
}
