const btnGreen = document.querySelector('#btn-green');
const btnRed = document.querySelector('#btn-red');
const container = document.querySelector('.container');

btnGreen.addEventListener('click', function() {
  container.classList.remove('bg-red');
  container.classList.add('bg-green');
});

btnRed.addEventListener('click', function() {
  container.classList.remove('bg-green');
  container.classList.add('bg-red');
});



