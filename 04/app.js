const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  let name = document.querySelector('#name').value;
  const span = document.querySelector('span');

  showName(name);

  function showName(name) {
    reset()
    span.appendChild(document.createTextNode(name));
  }
  
  function reset() {
    document.querySelector('#name').value = '';
    span.textContent = ''  ;
  }
});