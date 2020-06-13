const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  const input1 = Number(document.querySelector('#soma1').value);
  const input2 = Number(document.querySelector('#soma2').value);
  const span = document.querySelector('span');

  const result = sum(input1, input2);
  show(result);

  // Comentário de uma linha
  function sum(n1, n2) {
    return n1 + n2;
  }

  function show(result) {
    clear();
    span.appendChild(document.createTextNode(`Resultado: ${result}`))
  }

  function clear() {
    span.textContent= '';
    document.querySelector('#soma1').value='';
    document.querySelector('#soma2').value='';
  }

});
