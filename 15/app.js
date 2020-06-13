const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  function loadText() {
    const span = document.querySelector('span');
    span.textContent='';
    span.appendChild(document.createTextNode('Texto Inserido via JavaScript'));
  }

  loadText();
});

