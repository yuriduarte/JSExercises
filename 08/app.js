const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  let cpf = String(document.querySelector('#cpf').value);
  const span = document.querySelector('span');

  const formatCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  const showCpfFormated = (resultado) => {
    clear();
    span.appendChild(document.createTextNode(resultado));
  }

  const clear = () => {
    document.querySelector('#cpf').value = '';
    span.textContent = '';
  }

  const resultado = formatCPF(cpf);
  showCpfFormated(resultado)

  console.log(resultado);
})
