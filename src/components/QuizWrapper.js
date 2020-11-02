import '../styles/QuizWrapper.css'
import Modal from './Modal.js'
import React from 'react'
import QuizDetails from './QuizDetails'

export default function Quiz() {
  
  //Prompt user to make sure they would like to exit quiz
  const confirmLeave = e => {
    const leave = window.confirm('Are you sure you want to leave? If so, your quiz progress will not be stored.')
    if(leave)
      window.open('/', '_self')
  }

  return (
    <div className="quiz">
      <nav>
      <p className="exit-button link" onClick={confirmLeave}>Exit Quiz</p>
      </nav>

      <Modal className="modal"/>

      <QuizDetails />
        
    </div>
  )
}
