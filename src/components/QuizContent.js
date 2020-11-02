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

  //Used to get correct answer the first time the component is loaded
  useEffect(() => {

  }, [])

  //Used to store string value a,b,c,d of correct answer 
  useEffect(() => {
    const alpha = ['A', 'B', 'C', 'D']
    //index of current question in question list 
    const i = props.questionNumber - 1
    //Grab current answers
    const answersArr = questionList[i].answers
    //Grab correct answer string
    const correctAnswerStr = questionList[i].correct
    const correctIndex = answersArr.indexOf(correctAnswerStr)
    console.log(i, correctIndex, questionList[i])

    setCorrectAnswer(alpha[correctIndex])
  }, [props.questionNumber, questionList])

  //Remove question highlight when new question pops up
  //Remove userSelection when new question pops us
  useEffect(() => {
    setUserSelection()

    if(document.querySelector(`div .selected-style`)) {
      document.querySelector(`div .selected-style`).classList.remove('selected-style')
    }
  }, [props.questionNumber])

  //PROPS
  const index = props.questionNumber - 1
  const setUserSelection = props.setUserSelection
  const setCorrectAnswer = props.setCorrectAnswer



  //Add background color to show what last selection is when user picks an answer
  const handleClick = e => {
    //If answer choice is already selected, remove styling 
    if(document.querySelector(`div .selected-style`)) {
      document.querySelector(`div .selected-style`).classList.remove('selected-style')
    }
    
    const id = e.target.closest('div').id

    //Select new answer choice
    setUserSelection(id)
    //Add styling to new answer choice
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
