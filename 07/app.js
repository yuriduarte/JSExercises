const lamp = document.querySelector('#lamp');

lamp.addEventListener('mouseover', function() {
  const lampOn = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
  const lampOff = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true";

  if (lamp.src === lampOn) {
    lamp.src = lampOff;
    return;
  }
  lamp.src = lampOn;
})