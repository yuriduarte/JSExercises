function loadText() {
  const content = document.querySelector('.content');
  content.appendChild(document.createTextNode('Texto Inserido via JavaScript'));
}
window.onload = loadText();
