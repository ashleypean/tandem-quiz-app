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

  //Function will show correct answer in green, incorrect in red 
  const showCorrectAnswer = (correctAnswer, userSelection) => {
    if(correctAnswer === userSelection) {
      document.querySelector(`div#${correctAnswer}`).setAttribute('style', "background-color: #99ff99;")
    }else {
      document.querySelector(`div#${userSelection}`).setAttribute('style', "background-color: #ff8080")
      document.querySelector(`div#${correctAnswer}`).setAttribute('style', "background-color: #99ff99;")
    }

    const all = document.querySelectorAll('div.answer-choice')
    setTimeout(function revertColors() {
      all.forEach(x => x.setAttribute('style', "background-color: initial"))
    } , 3000)

  }

  const handleClick = e => {
    console.log(document.querySelectorAll('div.answer-choice'))
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
        if(userSelection === correctAnswer) {
          showCorrectAnswer(correctAnswer, userSelection)
          setScore(prev => prev + 1)
        }else {
          showCorrectAnswer(correctAnswer, userSelection)
          setScore(prev => prev)
        } 
        setTimeout(() => (setQuestionNumber(prev => prev + 1)), 3010)
    }
        
  }

    const quiz = (
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
    </div>
    )

    const finalScore = (
      <FinalScore className="final-score" score={score}/>
    )

  return questionNumber <= 10? quiz: finalScore


}
