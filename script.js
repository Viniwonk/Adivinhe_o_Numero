'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMensagem(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //quando não há nenhum imput
  if (!guess) {
    displayMensagem('Escolhe o Número Zé!! 😡');
  }

  //quando o jogador vence
  else if (guess === secretNumber) {
    displayMensagem('👌Na Mosca!🦟');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    displayMensagem(
      guess > secretNumber ? 'Muito alto!!⬆️' : 'Muito Baixo!!⬇️'
    );
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMensagem('🧨Perdeu!!');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMensagem('Chuta ai...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
