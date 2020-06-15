function start() {
  const span = document.querySelector('span');

  let operator = 0;
  for (let iE = 0; iE < 11; iE++) {
    span.appendChild(document.createElement('p')).innerText = `Tabuada de: ${iE}`;

    for (let i = 0; i < 10; i++) {
      const p = document.createElement('p');
      const index = i + 1;

      function calc(operator, index) {
        return operator * index;
      }

      const result = calc(operator, index);

      span.appendChild(p).innerHTML = `${operator} x ${index} = ${result}` ;
    }

    span.appendChild(document.createElement('br'));

    operator = operator + 1;
    console.log(operator);
  }

}

start();
