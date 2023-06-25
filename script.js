// Project: AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// Set up selectors, initializer variables, wins losses, 
var startButtonEl = document.querySelector(".start-button");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector("#options");
var answerEl = document.querySelectorAll(".answer");
var quizTimeEl = document.querySelector("#quiz-time");
var alertEl = document.querySelector("#alert");
var aText = document.querySelector("a-text");
var bText = document.querySelector("b-text");
var cText = document.querySelector("c-text");
var dText = document.querySelector("d-text");


// var winCount = 0;
// var lossCount = 0;
var totalScore= 0;
let quizTime = 60;
var questions = [{
    question: "Question 1: What Does HTML Stand For? ",
    choices: ["HyperText Markup Language", "Handling The Main Layout", "Hidden Text Makes Language", "None of the Above"],
    answer: "HyperText Markup Language"
},
{
    question: "Question 2: What Does CSS Stand For? ",
    choices: ["Cascading Style Sheets", "Complete Styling System", "Centralized Styling System", "None of the Above"],
    answer: "Cascading Style Sheets",
},
{
    question:"Question 3: What Are Elements Nested Inside Other Elements Called? ",
    choices:["Cozy Elements", "Dependent Elements","Child Elements", "None of the Above"],
    answer:"Child Elements"
},
{
    question: "Question 4: What is the Tool that Takes a Static HTML/CSS webpage and Makes it Interactive? ",
    choices:["API's","JavaScript","Magic", "None of the Above"],
    answer: "JavaScript"
},
{
    question: "Question 5: What is the Term that Refers to the Order in Which a Computer Executes Code in a Script? ",
    choices: ["Control Flow", "Random", "Bottom, Up", "None of the Above"],
    answer: "Control Flow"
}
];


var correctAnswer = [];

function startTimer() {
    let quizInterval = setInterval(function () {
        if (quizTime === -1) {
            clearInterval(quizInterval)
            // lossCount++;
        } else {
            quizTimeEl.textContent = "Time Left: " + quizTime
            quizTime--;
        };

    }, 1000)
}
let questionsNumber = 0;

function displayQuestions() {
    questionEl.innerHTML = ""
    optionsEl.innerHTML = ""
    let questionObject = questions[questionsNumber];
    questionEl.textContent = questionObject.question
    let choices = questionObject.choices
    let answer = questionObject.answer
    let choiceDiv = document.createElement("div")
    for (i = 0; i < choices.length; i++) {
        let choiceBtn = document.createElement("button")
        choiceBtn.textContent = choices[i]
        choiceBtn.addEventListener("click", function (event) {
            event.preventDefault()
            console.log(event.target.innerHTML)
            if (event.target.innerHTML === answer) {
                alertEl.textContent = "correct answer"
                questionsNumber++;
                displayQuestions()
            } else {
                alertEl.textContent = "incorrect answer"
                questionsNumber++;
                displayQuestions()
            }
        })
        choiceDiv.append(choiceBtn)

    }
    optionsEl.append(choiceDiv)

    
}

// HOW GAME STARTS
// WHEN I click the start button,
// THEN a timer starts and I am presented with a question.

function startQuiz() {
    // console.log("start")
    startTimer();
    displayQuestions()
}


// How do I win?
// WHen time greater thn 0
 function correctGuess() {
    if(alertEl.textContent === "correct" ) {
        totalScore++;
        localStorage.setItem("scoreCount", totalScore);

    }
 }



startButtonEl.addEventListener("click", startQuiz);


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
