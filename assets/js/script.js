// making variables for the buttons:
const startBtn = document.querySelector(".startBtn");
const highScBtn = document.querySelector(".highScores");
const nextBtn = document.querySelector(".nextBtn");
const redoBtn = document.querySelector(".redoBtn");
const quitBtn = document.querySelector(".quitBtn");

//  other html element variables:
var startCard = document.querySelector(".startCard");
var title = document.querySelector(".title");

var quizCard = document.querySelector(".quizCard");
var timer = document.querySelector(".timer");
var quiz = document.querySelector(".quiz");
var quizFooter = document.querySelector(".quizFooter");
var questProgress = document.querySelector(".questProgress");

var resultCard = document.querySelector(".resultCard");
var results = document.querySelector(".results");
var resultButtons = document.querySelector(".footerBtns");

// empty variables for functionality later:
var option;
var choiceBtn;
var questNum = 0;
var ansChoices = 0;

var initials;
var submit;
var form;

// timer:
var timerSeconds = document.querySelector(".timerSeconds");
var timerText = document.querySelector(".timerText");

var score = 0;
var timer = 70;


// The list of questions and answer-options in an array:
var questionList = [
    {
        number: 1,
        question: "Which is the proper way to start to write a function in JavaScript?" ,
        answer: "function name(parameter, parameter) {",
        options: 
            [
            "a. function name[variable] {",
            "b. function name(parameter, parameter) {",
            "c. function name{}",
            "d. function variable(name) {",
            ]
    },
    
    {
        number: 2,
        question: "Google Chrome is an example of, which of the bollowing?",
        answer: "Web-API",
        options: 
            [
            "a. Global Variable",
            "b. Operating System",
            "c. Web-API",
            "d. Object Constructor",
            ]
    },

    {   number: 3,
        question: "Which tag is used to insert JavaScript in the HTML file?",
        answer: "</script>",
        options: 
            [
            "a. </href>",
            "b. <insert>",
            "c. <#java-main>",
            "d. </script>",
            ]
    },

    {   number: 4,
        question: "Which code will give you the length of a string?",
        answer: "let x = var.length;",
        options: 
            [
            "a. let x = var.length;",
            "b. length.get () {",
            "c. let x = var.slice;",
            "d. substring(start, length);",
            ]
    },

    {   number: 5,
        question: "Given that x = 5 , which operator would return a false value?",
        answer: "x === '5'",
        options: 
            [
            "a. x !== 8",
            "b. x === 5",
            "c. x == '5'",
            "d. x === '5'",
            ]
    },
]

// quiz section - to display the question and the answer choices:
var currentQuest = document.createElement("h3");
// currentQuest.textContent = questionList[0].question; // to see it works, need a function with a loop.

var ansChoices = document.createElement("ul");
var option = document.createElement("li");

ansChoices.appendChild(option);
quiz.appendChild(currentQuest);
quiz.appendChild(ansChoices);



function startQuiz () {
    startCard.style.display="none";
    quizCard.style.display="block";
    showQuestion();
    showOptions();
}
// setup start button to hide after click:
startBtn.addEventListener("click", startQuiz);

// setup quiz inside of quizcard with questionList array:
function showQuestion() {
    console.log(questNum);
    currentQuest.textContent = questionList[questNum].question;
    questNum = questNum + 1;
}

function showOptions() {
    ansChoices.textContent = questionList.options[option];
    ansChoices = ansChoices + 1;
        // create loop that renders the options with an event listener in the button to go to next question, rerun showQuestion() with conditions for end of quiz.

}


