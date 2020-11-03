import '../styles/QuizWrapper.css'
import Modal from './Modal.js'
import React from 'react'
import QuizDetails from './QuizDetails'

export default function Quiz() {
  
  //Prompt user to make sure they would like to exit quiz
  const confirmLeave = e => {
    const leave = window.confirm('Are you sure you want to leave? If you do, your quiz progress will not be saved.')
    if(leave)
      window.open('/', '_self')
  }

  return (
    <div className="quiz">
      <nav>
        {/* TODO add instructions modal to show instructions mid-quiz*/}
        
        <p className="exit-button link" onClick={confirmLeave}>Exit Quiz</p>
      </nav>

      {/* TODO add instructions modal to show instructions mid-quiz
      <Modal className="modal"/>*/}

      <QuizDetails />
        
    </div>
  )
}
