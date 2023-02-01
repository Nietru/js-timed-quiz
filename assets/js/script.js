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
var quizFooter = document.querySelector(".quizFooter");

var resultCard = document.querySelector(".resultCard");
var results = document.querySelector(".results");
var resultButtons = document.querySelector(".footerBtns");

// empty variables for functionality later:
var answerChoice;
var choiceBtn;
var questNum;

var timerFunction;
var initials;
var submit;
var form;

// timer:
var timerEl = document.createElement("p");
var timerEl = document.createElement("p");

var score = 0;
var timer = 70;

// quiz section - to display the question and the answer choices:
var currentQuest = document.createElement("h3");
var ansChoices = document.createElement("ul");


// The list of questions and answer-options in an array:
var questionList = [
    {
        number: 1,
        question: "Which is the proper way to start to write a function in JavaScript?" ,
        answer: "function name(parameter, parameter) {",
        options: 
            [
            "function name[variable] {",
            "function name(parameter, parameter) {",
            "function name{}",
            "function variable(name) {",
            ]
    },
    
    {
        number: 2,
        question: "Google Chrome is an example of, which of the bollowing?",
        answer: "Web-API",
        options: 
            [
            "Global Variable",
            "Operating System",
            "Web-API",
            "Object Constructor",
            ]
    },

    {   number: 3,
        question: "Which tag is used to insert JavaScript in the HTML file?",
        answer: "</script>",
        options: 
            [
            "</href>",
            "<insert>",
            "<#java-main>",
            "</script>",
            ]
    },

    {   number: 4,
        question: "Which code will give you the length of a string?",
        answer: "let x = var.length;",
        options: 
            [
            "let x = var.length;",
            "length.get () {",
            "let x = var.slice;",
            "substring(start, length);",
            ]
    },

    {   number: 5,
        question: "Given that x = 5 , which operator would return a false value?",
        answer: "x === '5'",
        options: 
            [
            "x !== 8",
            "x === 5",
            "x == '5'",
            "x === '5'",
            ]
    },
]
