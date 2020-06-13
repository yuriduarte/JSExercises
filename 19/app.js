const btn = document.querySelector('#btn');


btn.addEventListener('click', function() {
  const input = document.querySelector('#input1').value;
  const span = document.querySelector('span');

  const result = oddOfEven(input);
  show(result);

  function oddOfEven(number) {
    console.log(number);

    if (number === '' || number === null || number === undefined) {
      return 'Por favor insira um número.'
    }

    if (number % 2 === 0) {
      return 'O número inserido é: par';
    }
    return 'O número inserido é: ímpar';
  }

  function show(result) {
    clear();
    span.appendChild(document.createTextNode(result))
  }

  function clear() {
    span.textContent = '';
    document.querySelector('#input1').value = '';
  }
});
