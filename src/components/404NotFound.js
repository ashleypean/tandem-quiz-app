import '../styles/404.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="not-found mainComp">
      <h4>The page you are looking for does not exist. Let's try heading back home</h4>
      <Link to="/">Home</Link>
    </div>
  )
}
