function start() {
  const span = document.querySelector('span');

  const deuses = ['Aegir', 'Aud', 'Balder'];
  const formatedDeuses = deuses
    .toLocaleString()
    .replace(/,/g, ', ');

  span.appendChild(document.createElement('h2')).innerText = `Deuses`;
  span.appendChild(document.createElement('p')).innerText = `Nomes: ${formatedDeuses}.`;
  span.appendChild(document.createElement('p')).innerText = `Quantidade: ${deuses.length}.`;
}

window.onload = start();

// TODO
// (37.a) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
// E Exiba a quantidade/comprimento que ele tem com a função .length

