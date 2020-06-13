const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  const input1 = document.querySelector('#input1').value;
  const input2 = document.querySelector('#input2').value;
  const span = document.querySelector('span');

  main();

  function main() {
    const result = mult(input1, input2);
    show(result);
  }

  function mult(n1, n2) {
    return n1 * n2;
  };

  function show(result) {
    clear();
    span.appendChild(document.createTextNode(result));
  }

  function clear() {
    span.textContent = '';
    document.querySelector('#input1').value = '';
    document.querySelector('#input2').value = '';
  }
});
