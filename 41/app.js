function start() {
  const numbers = [5, 7, 1, 8, 9];
  const span = document.querySelector('span');

  const orderedNumbers = numbers.sort();

  span.appendChild(document.createElement('p')).innerText = orderedNumbers;
}

window.onload = start();

// TODO
// (41) Crie o seguinte array: var numbers = [5, 7, 1, 8, 9]
// E exiba de forma crescente @dica: .sort
// @dica2: http://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores
