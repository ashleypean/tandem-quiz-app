import getRandomNum from './random-num'

//Generate 10 random questions
const getTenQuestions = (quiz) => {
  const list = [] //Stores question list 
  const numList = [] //Stores randomly generated numbers

  //Check if question has already been generated, if not add to question list
  while(list.length !== 10) {
    const num = getRandomNum(10) + 1

    //If question is not in list, add it. If it is - do nothing
    if(!numList.includes(num)) {
      list.push(quiz[num])
      numList.push(num)
    }
  }
}

export default getTenQuestions

