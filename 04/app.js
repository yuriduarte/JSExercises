const btn = document.querySelector('button');


btn.addEventListener('click', () => {
  let n1 = Number(document.querySelector('#n1').value);
  let n2 = Number(document.querySelector('#n2').value);
  
  const span = document.querySelector('span');  
  const result = soma(n1, n2);
  showResult(result);
  
  function soma(n1, n2) {
    return n1 + n2;
  }
  
  function showResult(result) {
    resetFields();

    return span.appendChild(document.createTextNode("Resultado: " + result));
  }
  
  function resetFields() {
    document.getElementById('n1').value="";
    document.getElementById('n2').value="";
    span.textContent = '';
  }
  
});