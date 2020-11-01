const express = require('express')
const quiz = require('./questions.json')

const app = express()
const PORT = process.env.PORT || 3001

const getQuestions = (quiz) => {
  const list = []
  const numList = []

  while(list.length !== 10) {
    const num = Math.floor(Math.random() * quiz.length+1)
    if(!numList.includes(num)) {
      list.push(quiz[num])
      numList.push(num)
    }
      

  console.log('list length is: ' + list.length)
  }
  return list
}

app.get('/', (req, res) => {
  res.send('home page')
})

app.get('/instructions', (req, res) => {
  res.send('on instructions page')
})

app.get('/take', (req, res) => {
  res.send(getQuestions(quiz))
})

app.listen(PORT, () => {
console.log(`Server is on port ${PORT}`)
})