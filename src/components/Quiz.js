import '../styles/Quiz.css'
import QuizContent from './QuizContent.js'
import Modal from './Modal.js'
import FinalScore from './FinalScore.js'
import React, { useState } from 'react'


 export default function Quiz() {
  // const [currentQuestion, updateCurrentQuestion] = useState(0)
  // const [currentScore, updateScore] = useState(0)
  //const [scoreView, setScoreView] = useState('visible')
  //const [isOpen, setIsOpen] = useState(false)
  
  const confirmLeave = e => {
    e.preventDefault()
    const leave = window.confirm('Are you sure you would like to leave?')
    if(leave) 
      window.open('/home', '_self')
    else 
      return null
  }

  const toggleScore = e => {
  //   const score = document.querySelector('h1.score')
  //   const isVisible = document.querySelector.style.visibility 
  //   console.log(score, isVisible)
  //   const newVisibility = isVisible === 'visible'? 'hidden': 'visisble' 
  //   setScoreView(newVisibility)
  }


  const openModal = e => {
    console.log('modal')
  }
  
  return (
    <div className="quiz">
      <nav>
      <p className="link modal" onClick={openModal}>Instructions</p>
      <p className="exit-button link" onClick={confirmLeave}>Exit Quiz</p>
      </nav>

      <div className="score">
        <h1 className="score">Score: 7</h1>
        <p className="hide-score link" onClick={toggleScore}>Hide Score</p>
      </div>

      <Modal className="modal"/>

      <div className="quiz-details">
        <p className="round">Round 1/1</p>
        <p className="questions">Question 9/10</p>
      </div>
        {/* fetched from server*/}
        <QuizContent />
        <FinalScore className="final-score"/>
    </div>
  )
}
