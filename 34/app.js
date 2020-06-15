function start() {
  const btn = document.querySelector('#btn');
  const span = document.querySelector('span');

  function getRandom() {
    return Math.floor(Math.random() * (0 + 1)) + 1
  }

  function clear() {
    span.textContent = '';
    document.querySelector('input').value = '';
  }

  function checkMathNumbers(inputNumber) {
    const generatedNumber = getRandom();

    console.log('generatedNumber: ' + generatedNumber);
    console.log('inputNumber: ' + inputNumber );


    let message = 'Você errou! =('

    if (inputNumber <= 0 || inputNumber >= 11) {
      return message = 'Por favor digite um número entre 1 e 10!'
    }

    if (inputNumber === '' || inputNumber === null || inputNumber === undefined) {
      return message = 'Por favor digite um número válido!'
    }

    if (generatedNumber == inputNumber) {
      return message = 'Você acertou! =)'
    }

    return message;
  }

  btn.addEventListener('click', () => {
    const input = document.querySelector('input').value;
    const result = checkMathNumbers(input);
    clear();

    span.appendChild(document.createElement('p')).innerText = result;
  });
}

window.onload = start();

// TODO
// (34) Agora faça um botão que ao clicar nele informa se a pessoa acertou o número.
