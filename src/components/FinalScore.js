import '../styles/FinalScore.css'
import React from 'react'
import { Link, Redirect } from 'react-router-dom'

export default function FinalScore() {
  return (
    <div className="final-score">
      <h1>Final Score: 17</h1>

      <Link to="/" className="go-home link">Go Home</Link>
    </div>
  )
}
