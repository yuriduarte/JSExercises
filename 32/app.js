function start() {
  const btn = document.querySelector('#btn');

  function verifyDota(text) {
    let message = 'O texto NÃO contém a palavra Dota.';

    if (text.includes('dota') || text.includes('Dota')) {
      return message = 'O texto contém a palavra Dota.'
    }

    return message;
  }

  btn.addEventListener('click', () => {
    const input = document.querySelector('input').value;
    const span = document.querySelector('span');
    const result = verifyDota(input);
    clear();

    span.appendChild(document.createElement('p')).innerText = result;

    console.log(result);
  });

  function clear() {
    document.querySelector('input').value = '';
    document.querySelector('span').textContent = '';
  }
}

window.onload = start();

// TODO
// (32) Crie uma função que informa se tem os caracteres 'dota' no parâmetro informado.
// Ex: 'Dota é melhor que LOL' (verdadeiro)
// Ex: 'Lol é melhor que CS' (falso) / e Falso na vida real tmb.
