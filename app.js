let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const check = document.querySelector(".check");
const again = document.querySelector(".again");
const guessInput = document.querySelector(".guess");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const body = document.querySelector("body");
const highscoreText = document.querySelector(".highscore");
const scoreText = document.querySelector(".score");

check.addEventListener("click", function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    message.textContent = "No Number";
  } else if (secretNumber === guess) {
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";

    number.textContent = secretNumber;
    message.textContent = "Correct Number";

    if (score > highscore) {
      highscore = score;
      highscoreText.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? "Too High" : "Too Low";
      score--;
      scoreText.textContent = score;
    } else {
      message.textContent = "You Lose The Game";
      scoreText.textContent = 0;
    }
  }
});

again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = "Start guessing...";
  scoreText.textContent = score;
  number.textContent = "?";
  guessInput.value = "";

  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
});
