import React from 'react'
import '../styles/QuizContent.css'
import { useEffect, useState } from 'react'


const setQuestionIndex = (data) => {
  for(let i = 0; i < data.length; i++) {
    data[i].number = i + 1
  }
  return data
}

const getRandomNum = () => {
  return Math.floor(Math.random() * 4) + 1
}

const randomizeQuestionOrder = (data) => {
  const answers = data[0].incorrect
  const correctAnswer = data[0].correct
  const num = getRandomNum()
  answers.splice(num, 0, correctAnswer)
  return answers
}

const showAnswerChoice = (index, currentAnswers) => {
  const alpha = ['A', 'B', 'C', 'D']
  const choice = (
    <div className="answer-choice">
    <h3>D</h3>
    <p className="answer-choice-d">
      {currentAnswers[3]}
    </p>
  </div>
  )
}

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
    const data = async () => {
      await fetch('http://localhost:4000/take')              
      .then(res => res.json())
      .then(data => {
        setQuestionList(setQuestionIndex(data))
        setCurrentQuestion(data[0])
        setCurrentPrompt(data[0].question)
        setCurrentAnswers(randomizeQuestionOrder(data))
        setQuestionList(setQuestionIndex)
      })
      .catch(err => console.log(err))
    }
    data()
  }, [])

  const choiceD = (
  <div className="answer-choice">
    <h3>D</h3>
    <p className="answer-choice-d">
      {currentAnswers[3]}
    </p>
  </div>
  )
  return (
    <div className="quiz-content">
      <h3 className="question">
        {currentPrompt}
      </h3>
      <div className="answers">
        <div className="answer-choice">
          <h3>A</h3>
          <p className="answer-choice-a">
            {currentAnswers[0]}
          </p>
        </div>
        <div className="answer-choice">
          <h3>B</h3>
          <p className="answer-choice-b">
          {currentAnswers[1]}
          </p>
        </div>
        <div className="answer-choice">
          <h3>C</h3>
          <p className="answer-choice-c">
          {currentAnswers[2]}
          </p>
        </div>
          {currentAnswers[3]? (choiceD): null}
        
      </div>
    </div>
  )
}
