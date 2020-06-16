function start() {
  const span = document.querySelector('span');
  const numbers = [5, 7, 1, 8, 9];
  const descreasingNumbers = numbers.sort((a, b) => b - a);

  span.appendChild(document.createElement('p')).innerText = descreasingNumbers;
}

window.onload = start();

// TODO
// (42) Crie o seguinte array: var numbers = [5, 7, 1, 8, 9]
// E exiba de forma decrescente.
