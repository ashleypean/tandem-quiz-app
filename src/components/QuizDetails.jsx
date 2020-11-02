import React, { useState, useEffect } from 'react'
import "../styles/QuizDetails.css"
import QuizContent from './QuizContent.js'
import FinalScore from './FinalScore.js'


export default function QuizDetails() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)
  const [userSelection, setUserSelection] = useState(null)
  const [correctAnswer, setCorrectAnswer] = useState(null)

  const handleClick = e => {
    //Handle user input if a question has not been selected
    if(!userSelection) {
      const next = window.confirm('No answer selected. Are you sure you would like to continue?')

      //If user confirms moving to next question, update question count
      if(next) {
        setQuestionNumber(prev => prev + 1)
      }
    } else {
        //Validate user's answer choice, and increment score if answer is correct  
        console.log(userSelection, correctAnswer)
        userSelection === correctAnswer ? setScore(prev => prev + 1): setScore(prev => prev)
        setQuestionNumber(prev => prev + 1)
    }
        
  }

  return (
    <div className="quiz-details-wrapper">
      <div className="score">
        <h1 className="score">Score: {score}</h1>
      </div>

      <div className="quiz-details">
        <p className="round">Round {round}/1</p>
        <p className="questions">Question {questionNumber}/10</p>
      </div>

      {/* fetched from JSON file*/}
      <QuizContent questionNumber={questionNumber} setUserSelection={setUserSelection} setCorrectAnswer={setCorrectAnswer}/>

      <div className="button">
        <button className="next-question" onClick={handleClick}>Next</button>
      </div>
      
      
      <FinalScore className="final-score"/>
    </div>
  )
}
