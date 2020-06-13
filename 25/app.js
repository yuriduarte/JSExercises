function start() {
  const span = document.querySelector('span');

  for (let i = 0; i < 20; i++) {
    const p = document.createElement('p');
    const message = `${i + 1} - Repetição`;

    p.appendChild(document.createTextNode(message));
    span.appendChild(p)

    console.log(p);
  }
}

start();
