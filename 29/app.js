function start() {
  const span = document.querySelector('span');

  for (let i = 0; i < 10; i++) {
    const p = document.createElement('p');

    span.appendChild(document.createElement('p')).innerHTML = i + 1;
  }
}

start();
