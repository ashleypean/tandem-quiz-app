import '../styles/Instructions.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Navbar'
import Footer from './Footer'

export default function Instructions(props) {
  const buttonStyling = {
    color: 'white',
    backgroundColor: 'gray', 
    width: '7rem',  
    padding: '.5rem 1rem',
    margin: '0 auto', 
    borderRadius: '8px', 
    textDecoration: 'none'
  }
  const { quizSelected } = props
  
  return (
    <div className="instructions">
      <Nav />
      <div className="how-to-play">
        <h4>General Instructions</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta vero labore repellat cumque recusandae fugiat saepe libero animi, quam consequatur facere ea illo totam, in nisi non ratione excepturi porro.Totam pariatur hic aliquid saepe expedita deserunt beatae eligendi natus, sed vitae recusandae eaque possimus dolorem sapiente laboriosam, officiis harum ad! Corrupti suscipit porro magni sed dicta. Ipsum, commodi nulla?</p>
        <hr/>
        <h4>Keyboard</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur praesentium, distinctio non sed corrupti vel. Fuga vitae aut, esse quam eius est dicta deserunt suscipit illo corrupti voluptatibus error qui.</p>
        <div className="keyboard">
          <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
          <img src="" alt=""/>
        </div>
      </div>
        
      <Footer />
    </div>
  )
}
