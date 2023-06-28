
// Set up selectors, initializer variables, wins losses, 
var startButtonEl = document.querySelector(".start-button");
var questionEl = document.querySelector("#question");
var optionsEl = document.querySelector("#options");
var answerEl = document.querySelectorAll(".answer");
var quizTimeEl = document.querySelector("#quiz-time");
var alertEl = document.querySelector("#alert");
var winCountEl = document.querySelector("#win-count");
var submitFormEl = document.querySelector("#submit-form");
var scoreEl = document.querySelector("#highscore");
var usernameEl = document.querySelector("#username");
var submitBtnEl = document.querySelector("#submit-button");
var mainEl = document.querySelector("#main-div");
var scoreDisplayEl = document.querySelector("#score-display");
// var aText = document.querySelector("a-text");
// var bText = document.querySelector("b-text");
// var cText = document.querySelector("c-text");
// var dText = document.querySelector("d-text");


var winCount = 0;
let quizTime = 60;
// / must select from multiple choice answers-
// WHEN I answer a question
// THEN I am presented with another question
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
},
];


var correctAnswer = [];

function startTimer() {
    let quizInterval = setInterval(function () {
        if (quizTime === -1) {
            clearInterval(quizInterval)
            // lossCount++;
        } else {
           quizTime--;
            quizTimeEl.textContent = "Time Left: " + quizTime
        };

    }, 1000)
}
let questionsNumber = 0;

function displayQuestions() {
    questionEl.textContent = ""
    optionsEl.textContent = ""
    var questionObject = questions[questionsNumber];
    questionEl.textContent = questionObject.question
    var choices = questionObject.choices
    var answer = questionObject.answer
    var choiceDiv = document.createElement("div")
    for (i = 0; i < choices.length; i++) {
        let choiceBtn = document.createElement("button")
        choiceBtn.textContent = choices[i]
        choiceBtn.addEventListener("click", function(event) {
            event.preventDefault()
            console.log(event.target.textContent)
            if (event.target.textContent === answer) {
                alertEl.textContent = "correct answer"
                questionsNumber++;
                winCount++;
                winCountEl.textContent=winCount;
                scoreEl.textContent = winCount;
                if(questionsNumber<questions.length) {
                    displayQuestions()
                }else{
                    transition()
                    console.log("quiz is over")
                }
                displayQuestions()
            } else{
                alertEl.textContent = "incorrect answer"
                questionsNumber++;
                quizTime--;
                quizTimeEl.textContent = "Time Left: " + quizTime
                scoreEl.textContent = winCount;
                displayQuestions()
            }
            })
        
        choiceDiv.append(choiceBtn)
    }

    
    optionsEl.append(choiceDiv)
}

function transition() {
    mainEl.setAttribute("class","hide")
    submitFormEl.removeAttribute("class","hide")

}
// for(i=0; i<questionObject.length; i++){
//     questionEl.innerHTML = questionObject[i].question
//     for(i=0; i<questionObject[i].choices.length; i++){
//     answerEl.textContent = questionObject[i].answer
//     }}

// HOW GAME STARTS
// WHEN I click the start button,
// THEN a timer starts and I am presented with a question.

function startQuiz() {
    // console.log("start")
    startTimer();
    displayQuestions()
}

function saveScore() {
    var scoreArray = JSON.parse(localStorage.getItem("scoreList"))||[]

    var newScore = {
        name: usernameEl.value,
        score: winCount,
    }
    scoreArray.push(newScore)
    localStorage.setItem("scoreList",JSON.stringify(scoreArray))
    displayScore()
}

function displayScore(){
    var scoreArray = JSON.parse(localStorage.getItem("scoreList"))||[]
    scoreArray.forEach(function(scoreItem){
        var listItem = document.createElement("li")
        listItem.textContent= scoreItem.name + ": " + scoreItem.score
        scoreDisplayEl.append(listItem)
    })
}
// displayScore()
submitBtnEl.onclick = saveScore
// How do I win?
// WHen time greater thn 0
//  function correctGuess() {
//     if(alertEl.textContent === "correct" ) {
//         winCount++;
//         localStorage.setItem("winCount", winCount);
//         updateScore()
//     }
//  }

// function updateScore() {
//     winCountEl.textContent = winCount;
// }

startButtonEl.addEventListener("click", startQuiz);


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// HOW GAME ENDS
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score
