
const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question=0;
let correctAnswer= 0;
let candidateAnswer= [];
let candidateAnswers;
let result;
let grade;
let questionNumber=1;
let questions =['Who was the first American woman in space?','True or false: 5000 meters = 5 kilometers.',
  ' (5 + 3)/2 * 10 = ?', 
  'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?', 
  'What is the minimum crew size for the International Space Station (ISS)?']
let correctAnswers=[ 'Sally Ride','True','40' ,'trajectory', '3']



function askForName(){
candidateName=input.question("Candidate Name:");
console.log("Hello "  + candidateName +"!");
}


function askQuestion() {
for (let i = 0; i < questions.length; i++){

  candidateAnswer [i] = input.question((questionNumber + i) + ") "+ questions[i]+"\nYour answer: ");
  console.log("Correct Answer: "+ correctAnswers[i]+ "\n")
if(candidateAnswer[i].toLowerCase()===correctAnswers[i].toLowerCase()){
correctAnswer +=1;
}
}
}


  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //




function gradeQuiz() {
  
  grade= correctAnswer/questions.length*100;
  if(grade>=80){result="PASSED";
  }else{
    result="FAILED";
  }
  console.log(`>>> Overall Grade: ${grade}% (${correctAnswer} of ${questions.length} responses correct) <<< \n>>> Status: ${result} <<<`);
  return grade;
}

function runProgram() {
  askForName();

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}



  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


 




// Don't write any code below this line //
// And don't change these or your program will not run as expected //

module.exports = {
  askForName:askForName,
  runProgram: runProgram,
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz
  };