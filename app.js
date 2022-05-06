// import functions and grab DOM elements
const ball1 = document.getElementById('ball1');
const ball2 = document.getElementById('ball2');
const ball3 = document.getElementById('ball3');
const button1 = document.getElementById('shell1button');
const button2 = document.getElementById('shell2button');
const button3 = document.getElementById('shell3button');
const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');


// let state
let wins = 0;
let total = 0;

function resetBalls() {
    ball1.classList.remove('reveal');
    ball2.classList.remove('reveal');
    ball3.classList.remove('reveal');
}

function displayResults() {
    winsSpan.textContent = wins;
    totalSpan.textContent = total;
    lossesSpan.textContent = total - wins;
}

// set event listeners 
button1.addEventListener('click', () => {
  // get user input
    total++;
    resetBalls();
  // use user input to update state 
    const ballPlace = Math.ceil(Math.random() * 3);
    if (ballPlace ===1) {
        ball1.classList.add('reveal');
    } else if (ballPlace === 2) {
      ball2.classList.add('reveal');
    }

  // update DOM to reflect the new state
  displayResults();
});