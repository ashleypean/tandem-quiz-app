import getRandomNum from './random-num'

//Correct answer currently appears in same position for every questions
//Generate an array that will randomize answer choices 
const randomizeAnswerOrder = (questions) => {

  //Attach answers array to question object
  questions.forEach((question, i) => {
    //Store incorrect answers in answer array first
    const answers = question[i].incorrect

    //Store value for correct answer
    const correctAnswer = question[i].correct

    //Not all questions will have the 4 answers, generate a value b/w the number of incorrect answers + 1 (for the correct answer)
    const num = getRandomNum(answers.length + 1)

    //Insert the correct answer into the array at the random location
    answers.splice(num, 0, correctAnswer)

    //Attach new answers array to the object
    question.answers = answers
  })
}


export default randomizeAnswerOrder