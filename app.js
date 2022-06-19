const playAgain = document.querySelector(".play-again");
const closeWrongBox = document.querySelector(".close-wrongbox");
const closeCorrectBox = document.querySelector(".close-correctbox");
let container = document.querySelector(".container");
const clue = document.querySelector(".clue");
const btnGuess = document.querySelector(".btn-guess");
const output = document.querySelector(".output");
const start = document.querySelector(".start");
const correctbox = document.querySelector(".correctbox");
const wrongbox = document.querySelector(".wrongbox");
let randomNum = Math.floor(Math.random() * 21) + 20;
const mainbox = document.querySelector(".mainbox");
let newname = document.querySelector(".name");
let score = 5;

playAgain.addEventListener("click", playAgainbtn);

btnGuess.addEventListener("click", guessButton);

closeCorrectBox.addEventListener("click", closeCorrectEvent);

closeWrongBox.addEventListener("click", closeWrongEvent);

console.log(randomNum);
function guessButton() {
  let input = Number(document.querySelector(".guess").value);

  if (!input) {
    output.textContent = "Input a Number🤷";
  } else if (input === randomNum) {
    correctbox.classList.remove("hidden");
    correctbox.style.backgroundColor = "#68bf54";
    mainbox.classList.add("hidden");
  } else if (input > randomNum) {
    if (score > 1) {
      score--;
      output.textContent = "Your guess is too high📵";
      start.textContent = "Try again";
      document.querySelector(".score span").innerText = score;
    } else {
      wrongbox.style.backgroundColor = "#f87373";
      mainbox.classList.add("hidden");
      wrongbox.classList.remove("hidden");
    }
  } else if (input < randomNum) {
    if (score > 1) {
      score--;
      output.textContent = "Your guess is too low📵";
      start.textContent = "Try again";
      document.querySelector(".score span").innerText = score;
    } else {
      wrongbox.style.backgroundColor = "#f87373";
      mainbox.classList.add("hidden");
      wrongbox.classList.remove("hidden");
    }
  }
  // } else if (input > randomNum) {
  //   if (score > 1) {
  //     score--;
  //     output.textContent = "Your guess is too high📵";
  //     start.textContent = "Try again";
  //     document.querySelector(".score span").innerText = score;
  //   } else {
  //     correctbox.classList.remove("hidden");
  //     correctbox.style.backgroundColor = "#f87373";
  //     document.querySelector(".correct-box h1").textContent =
  //       "You Lost the game ❌";
  //     document.querySelector(".correct-box h3").textContent = "";
  //     mainbox.classList.add("hidden");
  //   }
  // } else if (input < randomNum) {
  //   if (score > 1) {
  //     score--;
  //     output.textContent = "Your guess is too low📵";
  //     start.textContent = "Try again";
  //     document.querySelector(".score span").innerText = score;
  //   } else {
  //     correctbox.classList.remove("hidden");
  //     correctbox.style.backgroundColor = "#f87373";
  //     mainbox.classList.add("hidden");
  //     document.querySelector(".correct-box h1").textContent =
  //       "You Lost the game ❌";
  //     document.querySelector(".correct-box h3").textContent = "";
  //   }
}

function random() {
  return Math.floor(Math.random() * 21) + 20;
}

function playAgainbtn() {
  score = 5;

  randomNum = random();
  console.log(randomNum);

  input = Number((document.querySelector(".guess").value = ""));
  start.textContent = "Start Guessing...";
  output.textContent = "You can do this 🤝";
  document.querySelector(".score span").innerText = score;

  const names = ["JOHN", "MICHEAL", "SANDRA", "SMITH"];
  const randomname = Math.floor(Math.random() * names.length);
  newname.innerText = names[randomname];
}

function closeCorrectEvent() {
  score = 5;

  mainbox.classList.remove("hidden");
  correctbox.classList.add("hidden");

  randomNum = random();
  console.log(randomNum);

  input = Number((document.querySelector(".guess").value = ""));
  start.textContent = "Start Guessing...";
  output.textContent = "You can do this 🤝";
  document.querySelector(".score span").innerText = score;

  const names = ["JOHN", "MICHEAL", "SANDRA", "SMITH"];
  const randomname = Math.floor(Math.random() * names.length);
  newname.innerText = names[randomname];
}

function closeWrongEvent() {
  score = 5;

  mainbox.classList.remove("hidden");
  wrongbox.classList.add("hidden");

  randomNum = random();
  console.log(randomNum);

  input = Number((document.querySelector(".guess").value = ""));
  start.textContent = "Start Guessing...";
  output.textContent = "You can do this 🤝";
  document.querySelector(".score span").innerText = score;

  const names = ["JOHN", "MICHEAL", "SANDRA", "SMITH"];
  const randomname = Math.floor(Math.random() * names.length);
  newname.innerText = names[randomname];
}
