const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  const cpf = document.querySelector('#cpfPoint').value;
  const span = document.querySelector('span');

  const result = formatCPF(cpf);
  show(result);

  function formatCPF(cpf) {
    return cpf
    .split('.')
    .join('')
    .replace(/-/g, '');
  }

  function show(result) {
    clear();
    span.appendChild(document.createTextNode(result));
  }

  function clear() {
    span.textContent = '';
    document.querySelector('#cpfPoint').value = '';
  }
});
