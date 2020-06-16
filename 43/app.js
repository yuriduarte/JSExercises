function start() {
  const span = document.querySelector('span');
  const createP = span.appendChild(document.createElement('p'));
  const progress = document.querySelector('progress');
  let count = 5;

  const loadTimer = setInterval(() => {
    createP.innerText = count;
    progress.value = count;
    count--;

    if (count < 0) {
      clearInterval(loadTimer);
    }
  }, 1000);
}

window.onload = start();

// TODO
// (43) Crie um contador como o abaixo:
