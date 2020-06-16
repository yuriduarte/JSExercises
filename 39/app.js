function start() {
  const span = document.querySelector('span');
  span.appendChild(document.createElement('h2')).innerText = `Deuses`;

  const deuses = ['Aegir', 'Aud', 'Balder'];
  const formatedDeuses = deuses
    .toLocaleString()
    .replace(/,/g, ', ');

  deuses.map((value) => {
    const link = document.createElement('a')
    link.innerText = value
    link.setAttribute('href', '#');

    span.appendChild(link);
    span.appendChild(document.createElement('br'));

    link.addEventListener('click', event => {
      console.log(event.target.textContent);

      alert(`Deus: ${value}.`)
    });
  });
}

window.onload = start();

// TODO
// (38) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
// E exiba um a um com alert() - De preferencia para funções com callbacks, Ex:(map, reduce, filter)

