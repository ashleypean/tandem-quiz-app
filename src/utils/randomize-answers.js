import getRandomNum from './random-num'
import fetchQuestions from '../utils/fetch-questions.js'

//Correct answer currently appears in same position for every questions
//Generate an array that will randomize answer choices 
const randomizeAnswerOrder = (questions) => {
  //Fetch 10 random questions
  questions = fetchQuestions(questions)
  
  //Attach answers array to question object
  for(let i in questions){
    //Store incorrect answers in answer array first
    let answersList = questions[i].incorrect

    //Store value for correct answer
    const correctAnswer = questions[i].correct

    //Not all questions will have the 4 answers, generate a value b/w the number of incorrect answers + 1 (for the correct answer)
    const num = getRandomNum(answersList.length + 1)

    //Insert the correct answer into the array at the random location
    answersList.splice(num, 0, correctAnswer)
    console.log(answersList)
    //Attach new answers array to the object
    questions[i].answers = answersList
}
  
return questions
}

export default randomizeAnswerOrder