import React, { useState } from 'react'

export default function QuizDetails() {
  return (
    <div className="quiz-details">
      <div className="score">
        <h1 className="score">Score: 7</h1>
      </div>

      <div className="quiz-details">
        <p className="round">Round 1/1</p>
        <p className="questions">Question 9/10</p>
      </div>
    </div>
  )
}
