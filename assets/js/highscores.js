var redoBtn = document.querySelector(".redo-btn");

function renderScores() {
  var currentScores = JSON.parse(localStorage.getItem("highScores"));

  for (i = 0; i < currentScores.length; i++) {
    var newScore = document.createElement("p");
    newScore.textContent = `${currentScores[i].initials} got a score of ${currentScores[i].score}`;

    document.getElementById("container").append(newScore);
  }
}

redoBtn.addEventListener("click", startQuiz); // googled this, not totally sure whats happening here but it works.

function startQuiz() {
  location.replace("/index.html");
}

renderScores();

// function namedFunction (param) {
//     return param
// }

// namedFunction("yo")

// var obj = {
//     functionName: function() {
//         return this;
//     }
// }
