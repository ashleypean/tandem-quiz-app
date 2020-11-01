import '../styles/Home.css'
import React from 'react'
import Nav from './Navbar'
import Footer from './Footer'

export default function Home() {

  return (
    <div className="home">
        <Nav />
        <h1>QUIZZLY</h1>
        <Footer />
    </div>
  )
}

