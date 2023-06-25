// Project: AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// Set up selectors, initializer variables, wins losses, 
var startButtonEl = document.querySelector(".start-button");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelectorAll(".answer");
var submitButtonEl = document.querySelector("#submit");
var aText = document.querySelector("a-text");
var bText = document.querySelector("b-text");
var cText = document.querySelector("c-text");
var dText = document.querySelector("d-text");


var winCount = 0;
var lossCount = 0;
var questions = [{
    question:"Question One",
    choices: ["Option1", "Option2","Option3"],
    answer: "Option2",
},
{
    question:"Question Two",
    choices: ["Option4", "Option5","Option6"],
    answer: "Option5",
}
]; 

var correctAnswer = [];



// HOW GAME STARTS
// WHEN I click the start button,
// THEN a timer starts and I am presented with a question.

function startQuiz() {
    console.log("start")
}

startButtonEl.addEventListener("click",startQuiz)

// must select from multiple choice answers- ul 

// WHEN I answer a question
// THEN I am presented with another question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// HOW GAME ENDS 
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score
