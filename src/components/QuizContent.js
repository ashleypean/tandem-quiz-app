import React from 'react'
import '../styles/QuizContent.css'
import FinalScore from './FinalScore.js'
import { useEffect, useState } from 'react'
import displayAnswers from '../../utils/display-answers'
const data = require('../questions.json')


export default function QuizContent() {
  const [questionList, setQuestionList] = useState([{
    "question": null,
    "incorrect": [],
    "correct": null, 
    "number": 1
  }])
  const [currentQuestion, setCurrentQuestion] = useState({
    "question": null,
    "incorrect": [],
    "correct": null
  })
  const [currentPrompt, setCurrentPrompt] = useState('')
  const [currentAnswers, setCurrentAnswers] = useState([''])
  const [selectAnswer, verifyAnswer] = useState('')

  useEffect(() => {
    setQuestionList()

  }, [])

  //Cycle through currentAnswers array and create an answer choice (in JSX) for each question, if 4 answer choices do not exist, truncate the 4th one
  const displayAnswers = currentAnswers.map((answer, index) => {
    const alpha = ['A', 'B', 'C', 'D']
    return (
      <div className="answer-choice">
        <h3>{alpha[index]}</h3>
        <p key={index}> {currentAnswers[index]} </p>
    </div>
    )
    
  })

  return (
    <div className="quiz-content">
      <h3 className="question">
        {currentPrompt}
      </h3>
      <div className="answers">
        {displayAnswers}
      </div>

        <button className="next-question">Next &gt;</button>
        <FinalScore className="final-score"/>
    </div>
  )
}
