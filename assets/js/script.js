// Header and starting screen bindings
const highScoreBtn = document.querySelector(".high-scores");
const mainCont = document.querySelector(".container");
var startCard = document.querySelector(".start-card");
const startBtn = document.querySelector(".start-btn");
// Main and quiz container bindings
var quizCard = document.querySelector(".quiz-card");
var time = document.querySelector(".timer");
var secondsLeft = 70;
var quizFooter = document.querySelector(".quiz-footer");
var questProgress = document.querySelector(".quest-progress");

// Creating the list of questions and answer-options in an array.
const quizElements = [
  {
    number: 0,
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
    number: 1,
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
    number: 2,
    question: "Which tag is used to insert JavaScript in the HTML file?",
    answer: "</script>",
    options: ["</href>", "<insert>", "<#java-main>", "</script>"],
  },

  {
    number: 3,
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
    number: 4,
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
  time.style.display = "block";
  quiz.style.display = "block";
  quizFooter.style.display = "block";
  questProgress.style.display = "block";
  //   for (var i = 0; i < quizElements.length; i++) {
  //     console.log(quizElements[i]);
  //   }
  quizElements.forEach(function (numb, quest, option) {
    var numbs = numb.number++;
    var quests = quest.question++;

    console.log(numbs);
    // showing each object in the console
    for (var i = 0; i < numbs; i++) {}
    console.log(quizElements[i]);
  });
}

function setTime() {
  // sets interval in a binding
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerInterval.textContent = secondsLeft + " seconds remaining!";
    if (secondsLeft === 0) {
      // stops execution of action at set interval
      clearInterval(timerInterval);
      //   showResults(); // have to make this function for results container/card to show after time runs out.
    }
  }, 1000);
}
// loop through quiz elements, starting with first question
// for (var j = 1; j < quizElements.length; j++) {
//   quiz.append(quizElements[j]);
// }
