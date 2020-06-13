function start() {
  const span = document.querySelector('span');

  for (let i = 0; i < 2; i++) {
    const p = document.createElement('p');
    const message = 'Repetição';

    p.appendChild(document.createTextNode(message));
    span.appendChild(p)

    console.log(p);
  }
}

start();
