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

// Header and starting screen bindings
const highScoreBtn = document.querySelector(".high-scores");
const mainCont = document.querySelector(".container");
var startCard = document.querySelector(".start-card");
const startBtn = document.querySelector(".start-btn");
// Main and quiz container bindings
var quizCard = document.querySelector(".quiz-card");
var questArea = document.querySelector(".question-area");
var time = document.querySelector(".timer");
var secondsLeft = 60;
var currentQ = 0;
var quizFooter = document.querySelector(".quiz-footer");
// var questProgress = document.querySelector(".quest-progress");
var quiz = document.querySelector(".quiz");
var resultCard = document.querySelector(".result-card");
var results = document.querySelector(".results");
var endQuizBtns = document.querySelector(".footer-btns");
var restartBtn = document.querySelector(".redo-btn");
var submitBtn = document.querySelector(".submit-score-btn");
var pastHighScores = document.querySelector(".past-high-scores");

startBtn.addEventListener("click", startQuiz); // googled this, not totally sure whats happening here but it works.

function startQuiz() {
  startCard.style.display = "none"; // hide start button on click.
  quizCard.style.display = "block";
  setTime();
  showQuestion();
}

function showQuestion() {
  // changing the questArea div, from the html, to display the current question from the quizElements array.
  // `currentQ = 0;` ^^ our created binding, is first element of array.
  // because our array holds objects, we can use dot notation to target question -> '.question'
  questArea.textContent = quizElements[currentQ].question;
  // have to clear the options buttons each time a new question is shown:
  quiz.innerHTML = "";
  // created a new button for each answer option with a for loop:
  for (i = 0; i < quizElements[currentQ].options.length; i++) {
    var newBtn = document.createElement("button");
    newBtn.textContent = quizElements[currentQ].options[i];
    // answerQuestion will be the call back function, we create later, so it will throw an error for now.
    newBtn.addEventListener("click", answerQuestion);
    quiz.append(newBtn);
  }
}

var feedback = document.getElementById("result-feedback");
var scorePoints = 100; // user score

function answerQuestion(event) {
  // the .target.textContent will let you know what has been clicked by the user, then we can compare it to the correct answer.
  var userChoice = event.target.textContent;
  if (userChoice == quizElements[currentQ].answer) {
    console.log("yeah you right, score goes up");
    //we can do something to increase the score);
    feedback.textContent = "correct!";
    feedback.style.color = "green";

    setTimeout(function () {
      feedback.textContent = "";
      // 3000 =  3 seconds to display if they got the answer correct or incorrect.
    }, 3000);
  } else {
    console.log("wrong");
    //time goes down
    secondsLeft -= 10;
    scorePoints -= 20;
    feedback.textContent = "incorrect!";
    feedback.style.color = "red";

    setTimeout(function () {
      feedback.textContent = "";
    }, 3000);
  }
  // currentQ++ will go to the next question when the user picks an answer, whether it is right or wrong (outside of if else^)
  currentQ++;
  // will stop trying to show another question (showQuestion function) if there are no more questions left in the quiz.
  if (currentQ < quizElements.length) {
    showQuestion();
  }
}

function setTime() {
  // sets interval in a binding
  var timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds remaining!";
    //  if we run out of time OR || questions, the quiz is over.
    if (secondsLeft <= 0 || currentQ >= quizElements.length) {
      // stops execution of action at set interval
      clearInterval(timerInterval);
      // show results at the end of the quiz.
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizCard.style.display = "none"; // hide the quiz at the end
  resultCard.style.display = "block"; // show the results box at end of quiz
  results.style.display = "block"; // show results
  console.log(scorePoints + "%");
  // created variable for total score% and added it to the html in the results card.
  let endResults = scorePoints + "%";
  results.innerHTML = endResults;
  // replay quiz button functionality
  restartBtn.onclick = () => {
    window.location.reload();
  };

  // ATTEMPTING LOCAL STORAGE:
  submitBtn.onclick = () => {
    var initials = prompt("Please Enter Your Initials: ");
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var score = {
      score: endResults,
      initials: initials,
    };
    // add new score and initials to the highScores array with push()
    highScores.push(score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores);
    // .replace will show the highscores.html, just created for showing scoreboard.
    location.replace("./js-timed-quiz/highscores.html");
    submitBtn.style.display = "none";
  };
}

// will need to append these to the dom element -> (pastHighScores div):
// score.score;
// score.initial;
// for loop to go through each array item in local storage.
