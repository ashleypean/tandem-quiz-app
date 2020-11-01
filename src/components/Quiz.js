import '../styles/Quiz.css'
import QuizContent from './QuizContent.js'
import React, { useState, useEffect } from 'react'


export default function Quiz(props) {
  //const [currentQuestion, updateCurrentQuestion] = useState(0)
  //const [currentScore, updateScore] = useState(0)
  //const [scoreView, changeScoreView] = useState(true)
  
  const confirmLeave = (e) => {

  }
  
  return (
    <div className="quiz mainComp">
      <nav>
      <p className="exit-button" onClick={confirmLeave}>Exit Quiz</p>
      </nav>

      <h1 className="score">Score: 7</h1>
      <p className="hide-score">Hide Score</p> 

      <div className="quiz-details">
        <p className="round">Round 1</p>
        <p className="questions">Question 9</p>
        <div className="quiz-content">
          {/* Dynamically entered from information fetched from server*/}
        </div>
      </div>
      
    </div>
  )
}
