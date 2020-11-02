import '../styles/Quiz.css'
import QuizContent from './QuizContent.js'
import Modal from './Modal.js'
import FinalScore from './FinalScore.js'
import React, { useState, Component } from 'react'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2)

export default function Quiz(props) {

  return (
    <div className="quiz">
      <nav>
      <p className="link modal">Instructions</p>
      <p className="exit-button link">Exit Quiz</p>
      </nav>



      <Modal className="modal"/>


        {/* fetched from server*/}
        <QuizContent />
        <p className="next-question">Next &gt;</p>
        <FinalScore className="final-score"/>
    </div>
  )
}
