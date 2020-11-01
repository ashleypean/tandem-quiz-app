import '../styles/Quiz.css'
import QuizContent from './QuizContent.js'
import React, { useState, useEffect } from 'react'


export default function Quiz(props) {
  //const [currentQuestion, updateCurrentQuestion] = useState(0)
  //const [currentScore, updateScore] = useState(0)
  //const [scoreView, changeScoreView] = useState(true)
  
  const confirmLeave = e => {
    e.preventDefault()
    const leave = window.confirm('Are you sure you would like to leave?')
    if(leave) 
      window.open('/home', '_self')
    else 
      return null
  }

  const openModal = e => {
    console.log('modal')
  }
  
  return (
    <div className="quiz">
      <nav>
      <p className="link modal" onClick={openModal}>Instructions</p>
      <p className="exit-button link" onClick={confirmLeave}>Exit Quiz</p>
      </nav>

      <div className="score">
        <h1 className="score">Score: 7</h1>
        <p className="hide-score link">Hide Score</p>
      </div>
 

      <div className="quiz-details">
        <p className="round">Round 1/1</p>
        <p className="questions">Question 9/10</p>
      </div>
      <div className="quiz-content">
          {/* fetched from server*/}
      </div>
      
    </div>
  )
}
