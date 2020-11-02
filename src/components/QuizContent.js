import React from 'react'
import '../styles/QuizContent.css'
import { useEffect, useState } from 'react'
//Utilities 
import randomizeAnswers from '../utils/randomize-answers.js'
//Import JSON data
const data = require('../questions.json')

export default function QuizContent(props) {

  const [questionList, setQuestionList] = useState([{
    question: null,
    incorrect: [],
    correct: null, 
    number: 1, 
    answers: ['...', '...', '...', '...']
  }])

  //IIFE that will fetch 10 random questions and add an answer list to it
  //Value get saved as question list for quiz
  //FIX THIS LATER, for now it works ¯\_(ツ)_/¯
  useEffect(() => {
    setQuestionList(randomizeAnswers(data))

  }, [])

  //PROPS
  const index = props.questionNumber - 1
  const setUserSelection = props.setUserSelection
  const userSelection = props.userSelection

  //Add background color to show what last selection is when user picks an answer
  const handleClick = e => {
    //If answer choice is already selected, remove styling 
    if(document.querySelector(`div .selected-style`)) {
      document.querySelector(`div .selected-style`).classList.remove('selected-style')
    }
    
    const id = e.target.closest('div').id

    //Select new answer choice
    setUserSelection(id)
    //Add styling
    document.querySelector(`div #${id}`).classList.add('selected-style')
  }


  const displayQuestions = questionList[index].answers.map((answer, i) => {
    const alpha = ['A', 'B', 'C', 'D']
    return (
      <div key={i} className='answer-choice'id={alpha[i]} onClick={handleClick}>
        <h3>{alpha[i]}</h3>
        <p> {answer}</p>
      </div>
    )
  })

  return (
    <div className="quiz-content">
      <h3 className="question">
        {questionList[index].question}
      </h3>
      <div className="answers">
        {displayQuestions}
      </div>
    </div>
  )
}
