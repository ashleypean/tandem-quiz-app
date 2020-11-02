import React, { useState } from 'react'
import "../styles/QuizDetails.css"
import QuizContent from './QuizContent.js'
import FinalScore from './FinalScore.js'

export default function QuizDetails() {
  const [questionNumber, setQuestionNumber] = useState('1')
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)



  return (
    <div className="quiz-details-wrapper">
      <div className="score">
        <h1 className="score">Score: {score}</h1>
      </div>

      <div className="quiz-details">
        <p className="round">Round {round}/1</p>
        <p className="questions">Question {questionNumber}/10</p>
      </div>

      {/* fetched from server*/}
      <QuizContent questionNumber={questionNumber}/>

      <div className="button">
        <button className="next-question">Next &gt;</button>
      </div>
      
      
      <FinalScore className="final-score"/>
    </div>
  )
}
