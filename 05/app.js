const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  const input = document.querySelector('#text').value.length;
  const span = document.querySelector('span');
  
  show(span);

  function show(span) {
    reset();
    span.appendChild(document.createTextNode(`Total: ${input} caracteres.`));    
  }

  function reset() {
    span.textContent = '';
    document.querySelector('#text').value = '';
  }
})
