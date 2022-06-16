const playAgain = document.querySelector(".play-again");
const times = document.querySelector(".times");
let container = document.querySelector(".container");
const clue = document.querySelector(".clue");
const btnGuess = document.querySelector(".btn-guess");
const output = document.querySelector(".output");
const start = document.querySelector(".start");
const correctbox = document.querySelector(".correctbox");
let randomNum = Math.floor(Math.random() * 21) + 20;
const mainbox = document.querySelector(".mainbox");
let newname = document.querySelector(".name");
let score = 5;

console.log(randomNum);
function guessButton() {
  let input = Number(document.querySelector(".guess").value);

  if (!input) {
    output.textContent = "Input a Number🤷";
  } else if (input === randomNum) {
    correctbox.classList.remove("hidden");
    correctbox.style.backgroundColor = "#68bf54";
    mainbox.classList.add("hidden");
  } else if (input < randomNum) {
    if (score > 1) {
      score--;
      output.textContent = "Your guess is too low📵";
      start.textContent = "Try again";
      document.querySelector(".score span").textContent = score;
    } else {
      correctbox.classList.remove("hidden");
      correctbox.style.backgroundColor = "#f87373";
      mainbox.classList.add("hidden");
      document.querySelector(".correct-box h1").textContent =
        "You Lost the game ❌";
      document.querySelector(".correct-box h3").textContent = "";
    }
  } else if (input > randomNum) {
    if (score > 1) {
      score--;
      output.textContent = "Your guess is too high📵";
      start.textContent = "Try again";
      document.querySelector(".score span").textContent = score;
    } else {
      correctbox.classList.remove("hidden");
      correctbox.style.backgroundColor = "#f87373";
      document.querySelector(".correct-box h1").textContent =
        "You Lost the game ❌";
      document.querySelector(".correct-box h3").textContent = "";

      mainbox.classList.add("hidden");
    }
  }
}

function playAgainbtn() {
  input = Number((document.querySelector(".guess").value = ""));
  start.textContent = "Start Guessing...";
  output.textContent = "You can do this 🤝";
  document.querySelector(".score span").textContent = "5";

  const names = ["JOYCE", "SANDRA", "SMITH"];
  const randomname = Math.floor(Math.random() * names.length);
  newname.innerText = names[randomname];
  return (randomNum = Math.floor(Math.random() * 2));
}

function closetimes() {
  correctbox.classList.add("hidden");
  mainbox.classList.remove("hidden");
  start.textContent = "Start Guessing...";
  output.textContent = "You can do this 🤝";
  document.querySelector(".score span").textContent = "5";
  let input = Number((document.querySelector(".guess").value = ""));
}

btnGuess.addEventListener("click", guessButton);

playAgain.addEventListener("click", playAgainbtn);

times.addEventListener("click", closetimes);
