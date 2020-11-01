import React from 'react'
import '../styles/QuizContent.css'
import { useEffect, useState } from 'react'

export default function QuizContent() {
  const [questionList, setQuestionList] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(questionList[0])

  useEffect(() => {
    async function fetchQuestion() {
      const res = 
      await (await fetch("../server/server.js")).json()
      .then(res => setQuestionList(res))
      .catch(err => console.log(err))
    }

  }, [])

  return (
    <div className="quiz-content">
      <h3 className="question">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur atque impedit accusantium! Reiciendis ipsa culpa necessitatibus eaque nostrum quia, amet recusandae dolorum illo! Corporis, doloremque neque! Quisquam, dolore repudiandae?
      </h3>
      <div className="answers">
        <div className="answer-choice">
          <h3>A</h3>
          <p className="answer-choice-a">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet 
          </p>
        </div>
        <div className="answer-choice">
          <h3>B</h3>
          <p className="answer-choice-b">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet 
          </p>
        </div>
        <div className="answer-choice">
          <h3>C</h3>
          <p className="answer-choice-c">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet 
          </p>
        </div>
        <div className="answer-choice">
          <h3>D</h3>
          <p className="answer-choice-d">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet 
          </p>
        </div>
      </div>
    </div>
  )
}
