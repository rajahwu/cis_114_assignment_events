'use strict';

let userAnswers = document.querySelectorAll('input.user-answer');
const answerBtn = document.querySelector('#submit_answer');
const questionDisplay = document.querySelector('#question');

let questions = [ 
    {
    "question-text": "A Web ______ is a program that interprets and displays Web pages and enables you to view and interact with a Web page",
    "option1": {
        "answer": "client",
        "correct": false
    },
    "option2": {
        "answer": "surfer",
        "correct": false
    },
    "option3": {
        "answer": "brower",
        "correct": true
    },
    "option4": {
        "answer": "resource locator",
        "correct": false
    }
},

{
    "question-text": "The ___ tag is used to dislay a horizontal rule acroos the page.",
    "option1": {
        "answer": "<arcoss>",
        "correct": false
    },
    "option2": {
        "answer": "<rule>",
        "correct": false
    },
    "option3": {
        "answer": "<hr />",
        "correct": true
    },
    "option4": {
        "answer": "<line>",
        "correct": false
    }
},

{
    "question-text": "The most recent version of HTML is HTML____.",
    "option1": {
        "answer": "4.01",
        "correct": false
    },
    "option2": {
        "answer": "3.2",
        "correct": false
    },
    "option3": {
        "answer": "2.0",
        "correct": false
    },
    "option4": {
        "answer": "5",
        "correct": true
    }
},

]



answerBtn.addEventListener('click', () => {
    let userChoice;
    for (const userAnswer of userAnswers)
        if (userAnswer.checked) {
            userChoice = userAnswer.value
            console.log(userChoice);
            break;
        }
})
