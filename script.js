'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '💥 no number';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '❤ correct number';
    document.querySelector('body').style.backgroundColor = 'coral';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = '😜 too high';
      displayMessage(guess > secretNumber ? '😜 too high' : '🤦‍♂️ too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😒 you lost the game';
      displayMessage('😒 you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '🤦‍♂️ too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😒 you lost the game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

const again = document.querySelector('.again');
again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
