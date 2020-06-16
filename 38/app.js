function start() {
  const span = document.querySelector('span');
  span.appendChild(document.createElement('h2')).innerText = `Deuses`;

  const deuses = ['Aegir', 'Aud', 'Balder'];
  const formatedDeuses = deuses
    .toLocaleString()
    .replace(/,/g, ', ');

  for (deus of deuses) {
    const link = span.appendChild(document.createElement('a'))
    link.innerText = deus;
    link.setAttribute('href', '#');

    link.addEventListener('click', event => {
      const d = event.target.textContent;
      alert(`Deus: ${d}.`);
    });

    span.appendChild(document.createElement('br'))
  }

}

window.onload = start();

// TODO
// (38) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
// E exiba um a um com alert() - De preferencia para laços de repetição (for, forEach, while, do{}while)

