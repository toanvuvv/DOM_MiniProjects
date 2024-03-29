'use strict';
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');

let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
let diceEl = document.querySelector('.dice');

diceEl.classList.add('hidden');
let currentScore0El = document.getElementById('current--0');
let currentScore1EL = document.getElementById('current--1');

currentScore0El.textContent = 0;
currentScore1EL.textContent = 0;
initGame();
// Switch player function
function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
// Rolling dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // random
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // check if dice is 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 50) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});


function initGame() {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    currentScore0El.textContent = 0;
    currentScore1EL.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
// resset
btnNew.addEventListener('click',initGame);
