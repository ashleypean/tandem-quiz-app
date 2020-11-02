import '../styles/QuizWrapper.css'
import QuizContent from './QuizContent.js'
import Modal from './Modal.js'
import React from 'react'
import QuizDetails from './QuizDetails'

export default function Quiz() {

  return (
    <div className="quiz">
      <nav>
      <p className="link modal">Instructions</p>
      <p className="exit-button link">Exit Quiz</p>
      </nav>

      <Modal className="modal"/>

      <QuizDetails />
        
    </div>
  )
}
