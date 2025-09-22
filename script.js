let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let attempts = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  
  
  if (!guess) {
    displayMessage(' Please Enter a Number!');
    document.querySelector('body').style.backgroundColor = '#ff0000';
    return;
  }

  
  attempts++;

  
  if (attempts >= 20) {
    displayMessage('No more chances left!');
    document.querySelector('body').style.backgroundColor = '#ff0000';
    document.querySelector('.check').disabled = true;
    return;
  }

  
  if (guess === secretNumber) {
    displayMessage('Congratulations!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ' Too high!' : ' Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' You lost!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  attempts = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});