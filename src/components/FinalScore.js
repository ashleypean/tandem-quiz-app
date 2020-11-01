import '../styles/FinalScore.css'

import React from 'react'
import { Link } from 'react-router-dom'

export default function FinalScore() {
  return (
    <div className="final-score mainComp">
      <Link to="/">Exit Quiz</Link>
      <h1>Final Score: 17</h1>

      <h4>Try Again</h4>
      <Link to="/">Go Home</Link>
    </div>
  )
}
