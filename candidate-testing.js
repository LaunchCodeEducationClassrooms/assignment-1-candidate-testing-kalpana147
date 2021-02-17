const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName=" ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American women in space? ";
let correctAnswer="Sally Ride";
let candidateAnswer="";
let questions=["True or false: 5000 meters = 5 kilometers.","(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?"];
let correctAnswers=["True","40","Trajectory","3"];
let candidateAnswers=[];
let questionNumber=1;
let score=0;
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName=input.question("Candidate Name:");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
candidateAnswer=input.question((questionNumber ) + ") "+ question+"\nYour answer: ");
console.log("Correct Answer: "+ correctAnswer + "\n")
for (let i = 0; i < questions.length; i++){  candidateAnswers[i] = input.question((questionNumber+1 + i) + ") "+ questions[i]+"\nYour answer: ");
  console.log("Correct Answer: "+ correctAnswers[i]+ "\n")
} 
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if(candidateAnswer.toLowerCase()=== correctAnswer.toLowerCase()){
score +=1;}
for (let i = 0; i < questions.length; i++){
if(candidateAnswers[i].toLowerCase()=== correctAnswers[i].toLowerCase()){
score +=1;
 }
}
  let grade;
grade= score/(1+questions.length)*100;
  if(grade>=80){result="PASSED";
  }else{
    result="FAILED";
  }
  console.log(`>>> Overall Grade: ${grade}% (${score} of ${questions.length+1} responses correct) <<< \n>>> Status: ${result} <<<`);

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};