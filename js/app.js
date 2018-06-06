/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//  - - - variables - - -

var scores, roundScore, activePlayer, diceDOM;

startNewGame()


// - - - set the UI - - -

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// - - - functions - - -

function rollTheDices () {
  var dice = Math.floor(Math.random()*6) +1;
  document.querySelector('.dice').style.display = 'block';
  document.querySelector('.dice').src = 'assets/dice-' + dice + '.png'

  if (dice !== 1) {
    document.querySelector("#current-" + activePlayer).textContent = dice;
    roundScore += dice;
    // document.querySelector("#score-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
};

function holdTheGame() {
  scores[activePlayer] += roundScore;
  checkTheWinner()
  document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
  nextPlayer()
};

function nextPlayer() {
  document.querySelector(".player-" + activePlayer + "-panel").classList.toggle('active');
  // document.querySelector("#score-" + activePlayer).textContent = 0;
  document.getElementById('current-' + activePlayer).textContent = '0';
  document.querySelector('.dice').style.display = 'none';
  roundScore = 0;
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector(".player-" + activePlayer +"-panel").classList.toggle('active');
}

function checkTheWinner() {
  if (scores[0] > 100 && scores[0] > scores[1]) {
    alert('Player 1 - WIN');
  } else if (scores[1] > 100 && scores[1] > scores[0])  {
    alert('Player 2 - WIN');
    }
}

function startNewGame() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
}

// - - - commands - - -

document.querySelector('.btn-roll').addEventListener('click', rollTheDices);
document.querySelector('.btn-hold').addEventListener('click', holdTheGame);
document.querySelector('.btn-new').addEventListener('click', startNewGame);
