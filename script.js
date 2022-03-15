"use strict";

let userAnswers = document.querySelectorAll("input.user-answer");
const answerBtn = document.querySelector("#submit_answer");

const categoryDisplay = document.querySelector("#category_display");
const questionNumber = document.querySelector("#question_number");
const questionDisplay = document.querySelector("#question_text");
const answersDisplay = document.querySelectorAll("#answers label");

let questions = [
  {
    question_text:
      "A Web ______ is a program that interprets and displays Web pages and enables you to view and interact with a Web page.",
    category: "General",
    answers: [
      {
        answer: "client",
        correct: false,
      },
      {
        answer: "surfer",
        correct: false,
      },
      {
        answer: "brower",
        correct: true,
      },
      {
        answer: "resource locator",
        correct: false,
      },
    ],
  },

  {
    question_text:
      "The ___ tag is used to dislay a horizontal rule acroos the page.",
    category: "HTML",
    answers: [
      {
        answer: "<arcoss>",
        correct: false,
      },
      {
        answer: "<rule>",
        correct: false,
      },
      {
        answer: "<hr />",
        correct: true,
      },
      { answer: "<line>", correct: false },
    ],
  },

  {
    question_text: "The most recent version of HTML is HTML____.",
    category: "JavaScript",
    answers: [
      {
        answer: "4.01",
        correct: false,
      },
      {
        answer: "3.2",
        correct: false,
      },
      {
        answer: "2.0",
        correct: false,
      },
      {
        answer: "5",
        correct: true,
      },
    ],
  },
];

// console.log(questions);
// console.log(questions[0].answers);

categoryDisplay.textContent = `${questions[0].category}`;
questionDisplay.textContent = `${questions[0].question_text}`;

// questions[0].answers.forEach((answer) => {
//    console.log(answer.answer)
// });

// answersDisplay.forEach((label) => {
    
// });
for (const answerText of answersDisplay){

for (let i=0; i <= 4; i++) {
    console.log(questions[0].answers)
    answerText.textContent = `${questions[0]['answer']}}`
}
}
// console.log(questions[0].category);

answerBtn.addEventListener("click", () => {
  let userChoice;
  for (const userAnswer of userAnswers)
    if (userAnswer.checked) {
      userChoice = userAnswer.value;
      console.log(userChoice);
      break;
    }
});
