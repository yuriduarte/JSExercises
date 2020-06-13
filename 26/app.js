function start() {
  const span = document.querySelector('span');

  const repeat = 5;
  let index = 0

  while (index < repeat) {
    index++

    const p = document.createElement('p');
    const message = `${index} - Repetição`

    p.appendChild(document.createTextNode(message));
    span.appendChild(p);
  }
}

start();
