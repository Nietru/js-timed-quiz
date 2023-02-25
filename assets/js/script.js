// Header and starting screen bindings
const highScoreBtn = document.querySelector(".high-scores");
const mainCont = document.querySelector(".container");
var startCard = document.querySelector(".start-card");
const startBtn = document.querySelector(".start-btn");
// Main and quiz container bindings
var quizCard = document.querySelector(".quiz-card");
var questArea = document.querySelector(".question-area");
var time = document.querySelector(".timer");
var secondsLeft = 70;
var currentQ = 0;
var quizFooter = document.querySelector(".quiz-footer");
var questProgress = document.querySelector(".quest-progress");

// ------------------------------- Creating the list of questions and answer-options in an array. --------------------
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
// --------------------------------------- End of object array ---------------------------------------------

var quiz = document.querySelector(".quiz");

startBtn.addEventListener("click", startQuiz); // googled this, not totally sure whats happening here but it works.

function startQuiz() {
  startBtn.style.display = "none"; // hide start button on click.
  quizCard.style.display = "block";
  setTime();
  showQuestion();
}

function showQuestion() {
  // time.style.display = "block";
  // quiz.style.display = "block";
  // quizFooter.style.display = "block";
  // questProgress.style.display = "block";
  //   for (var i = 0; i < quizElements.length; i++) {
  //     console.log(quizElements[i]);
  //   }
  // quizElements.forEach(function (numb, quest, option) {
  //   var numbs = numb.number++;
  //   var quests = quest.question++;
  //   console.log(numbs);
  //   // showing each object in the console
  //   for (var i = 0; i < numbs; i++) {}
  //   console.log(quizElements[i].question); // looks great in the console.... now what?...
  //   console.log(quizElements[i].options);
  // });
  questArea.textContent = quizElements[currentQ].question;
  quiz.innerHTML = "";
  for (i = 0; i < quizElements[currentQ].options.length; i++) {
    var newBtn = document.createElement("button");
    newBtn.textContent = quizElements[currentQ].options[i];
    newBtn.addEventListener("click", answerQuestion);
    quiz.append(newBtn);
  }
}

var feedback = document.getElementById("result-feedback");

function answerQuestion(event) {
  // console.log("yo, I got clicked");
  // console.log(event.target);
  var userChoice = event.target.textContent;
  if (userChoice == quizElements[currentQ].answer) {
    console.log("yeah you right, score goes up");
    //we can do something to increase the score);
    feedback.textContent = "correct!";
    feedback.style.color = "green";

    setTimeout(function () {
      feedback.textContent = "";
    }, 2500);
  } else {
    console.log("wrong");
    //time goes down
    secondsLeft -= 10;
    feedback.textContent = "incorrect!";
    feedback.style.color = "red";

    setTimeout(function () {
      feedback.textContent = "";
    }, 2500);
  }

  currentQ++;
  if (currentQ < quizElements.length) {
    showQuestion();
  }
}

function setTime() {
  // sets interval in a binding
  var timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds remaining!";
    if (secondsLeft <= 0 || currentQ >= quizElements.length) {
      // stops execution of action at set interval
      clearInterval(timerInterval);
      //   showResults(); // have to make this function for results container/card to show after time runs out.
    }
  }, 1000);
}
// loop through quiz elements, starting with first question
// for (var j = 0; j < quizElements.length; j++) {
//   questArea.append(quizElements[0].question);
//   quiz.append(quizElements[0].options[j]);
//   questProgress.textContent = " 1/5 ";
// }
