const express = require('express')
const quiz = require('./questions.json')

const app = express()
const PORT = process.env.PORT || 4000

const cors = require('cors')

const getQuestions = (quiz) => {
  const list = []
  const numList = []

  while(list.length !== 10) {
    const num = Math.floor(Math.random() * quiz.length)
    if(!numList.includes(num)) {
      list.push(quiz[num])
      numList.push(num)
    }
  }
  return list
}

app.get('/', (req, res) => {
  res.send('home page')
})

app.get('/instructions', (req, res) => {
  res.send('on instructions page')
})

app.get('/take', cors(), (req, res) => {
  res.status(200).send(getQuestions(quiz))
})

app.listen(PORT, () => {
console.log(`Server is on port ${PORT}`)
})