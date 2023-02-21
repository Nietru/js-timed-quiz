// Header and starting screen bindings
const highScoreBtn = document.querySelector(".high-scores");
const mainCont = document.querySelector(".container");
var startCard = document.querySelector(".start-card");
const startBtn = document.querySelector(".start-btn");
// Main and quiz container bindings
var quizCard = document.querySelector(".quiz-card");
var timer = document.querySelector(".timer");
var timerSeconds = document.querySelector(".timer-seconds");
var quizFooter = document.querySelector(".quiz-footer");
var questProgress = document.querySelector(".quest-progress");

// Creating the list of questions and answer-options in an array.
const quizElements = [
  {
    number: 1,
    question:
      "Which is the proper way to start to write a function in JavaScript?",
    answer: "function name(parameter, parameter) {",
    options: [
      "function name[variable] {",
      "function name(parameter, parameter) {",
      "function name{}",
      "function variable(name) {",
    ],
  },

  {
    number: 2,
    question: "Google Chrome is an example of, which of the bollowing?",
    answer: "Web-API",
    options: [
      "Global Variable",
      "Operating System",
      "Web-API",
      "Object Constructor",
    ],
  },

  {
    number: 3,
    question: "Which tag is used to insert JavaScript in the HTML file?",
    answer: "</script>",
    options: ["</href>", "<insert>", "<#java-main>", "</script>"],
  },

  {
    number: 4,
    question: "Which code will give you the length of a string?",
    answer: "let x = var.length;",
    options: [
      "let x = var.length;",
      "length.get () {",
      "let x = var.slice;",
      "substring(start, length);",
    ],
  },

  {
    number: 5,
    question: "Given that x = 5 , which operator would return a false value?",
    answer: "x === '5'",
    options: ["x !== 8", "x === 5", "x == '5'", "x === '5'"],
  },
];

var quiz = document.querySelector(".quiz");

startBtn.addEventListener("click", hideShow, false);

function hideShow() {
  startBtn.style.display = "none"; // hide start button on click.
  quizCard.style.display = "block";
  timer.style.display = "block";
  timerSeconds.style.display = "block";
  quiz.style.display = "block";
  quizFooter.style.display = "block";
  questProgress.style.display = "block";
}

// loop through quiz elements, starting with first question
for (var i = 1; i < quizElements.length; i++) {
  quiz.append(quizElements[i]);
}
