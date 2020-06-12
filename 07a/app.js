const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;

  alert(`Olá ${firstName} ${lastName}.`)  
})
