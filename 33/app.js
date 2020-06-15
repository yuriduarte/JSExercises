function start() {
  const btn = document.querySelector('#btn');
  const span = document.querySelector('span');

  function getRandom() {
    return Math.floor(Math.random() * (1 + 10) + 0);
  }

  function clear() {
    span.textContent = '';
  }

  btn.addEventListener('click', () => {
    clear();
    const randomNumber = getRandom();
    Math.round(randomNumber)


    span.appendChild(document.createElement('p')).innerText = `Número gerado: ${randomNumber}`;
  });
}

window.onload = start();

// TODO
// (33) Exiba aleatoriamente um número pelo alert()
