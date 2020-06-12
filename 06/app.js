const lamp = document.querySelector("#lamp");
const btn = document.querySelector("#btn");

btn.addEventListener('click', function () {
  if(lamp.src === "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true") {
    btn.textContent = 'Apagar';
    btn.classList.toggle('off');
    lamp.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true"
    return;
  }
  btn.textContent = 'Acender';
  btn.classList.toggle('off');
  lamp.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true"
});