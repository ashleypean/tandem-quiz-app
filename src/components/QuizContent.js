import React from 'react'
import '../styles/QuizContent.css'

export default function QuizContent() {
  return (
    <div className="quiz-content">
      <h5 className="question">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur atque impedit accusantium! Reiciendis ipsa culpa necessitatibus eaque nostrum quia, amet recusandae dolorum illo! Corporis, doloremque neque! Quisquam, dolore repudiandae?
      </h5>
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
