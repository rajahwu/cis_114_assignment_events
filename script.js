"use strict";

const userAnswers = document.querySelectorAll("input.user-answer");
const answerBtn = document.querySelector("#submit_answer");

const categoryDisplay = document.querySelector("#category_display");
const questionNumberDisplay = document.querySelector("#question_number");
const questionDisplay = document.querySelector("#question_text");
const answersDisplay = document.querySelectorAll("#answers label");

// let questions = [
//   {
//     question_text:
//       "A Web ______ is a program that interprets and displays Web pages and enables you to view and interact with a Web page.",

//     category: "General",

//     answers: [
//       { answer: "client", correct: false },

//       { answer: "surfer", correct: false },

//       { answer: "browser", correct: true },

//       { answer: "resource locator", correct: false },
//     ],
//   },

//   {
//     question_text:
//       "The ___ tag is used to dislay a horizontal rule acroos the page.",

//     category: "HTML",

//     answers: [
//       { answer: "<arcoss>", correct: false },

//       { answer: "<rule>", correct: false },

//       { answer: "<hr />", correct: true },

//       { answer: "<line>", correct: false },
//     ],
//   },

//   {
//     question_text: "The most recent version of HTML is HTML____.",

//     category: "JavaScript",

//     answers: [
//       { answer: "4.01", correct: false },

//       { answer: "3.2", correct: false },

//       { answer: "2.0", correct: false },

//       { answer: "5", correct: true },
//     ],
//   },
// ];

let testQuestons = [];
class Question {
  constructor(question_text, category, answers) {
    this.question_text = question_text;
    this.category = category;
    this.answers = answers;
  }
  showCategorty() {
    categoryDisplay.textContent = `${this.category}`;
  }
  showQueston() {
    questionDisplay.textContent = `${this.question_text}`;
  }
  showAnswers() {
    for (let i = 0; i <= this.answers.length; i++) {
      answersDisplay[i].textContent = this.answers[i].answer;
    }
  }
  addQuestion(){
        testQuestons.push(this);
  }

}

let question1 = new Question("This is the first qustion", "Test", [
  { answer: "first solution", correct: false },
  { answer: "second solution", correct: false },
  { answer: "third solution", correct: true },
  { answer: "fourth solution", correct: false },
]);

let question2 = new Question(
  "A Web ______ is a program that interprets and displays Web pages and enables you to view and interact with a Web page.",
  "JavaScript",
  [
    { answer: "client", correct: false },
    { answer: "surfer", correct: false },
    { answer: "browser", correct: true },
    { answer: "resource locator", correct: false },
  ]
);


question1.addQuestion();
question2.addQuestion();
console.log(testQuestons);
console.log(typeof testQuestons);
console.log(testQuestons[0]);
console.log(testQuestons[1])

// console.log(question1);
question1.showCategorty();
question1.showQueston();
question1.showAnswers();

getUserChoice();

function getUserChoice() {
  answerBtn.addEventListener("click", () => {
    let userChoice;
    for (const userAnswer of userAnswers)
      if (userAnswer.checked) {
        userChoice = userAnswer.value;
        console.log(userChoice);
        break;
      }
  });
}
