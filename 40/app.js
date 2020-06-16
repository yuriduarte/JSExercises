function start() {
  const deuses = ['Aegir', 'Aud', 'Balder'];
  const input = document.querySelector('input');
  const btn = document.querySelector('#btn');

  loadArray();

  function loadArray() {
    input.focus();
    deuses.map((value) => {
      const tbody = document.querySelector('tbody');
      const createTr = document.createElement('tr');
      const createTd = document.createElement('td');

      tbody
        .appendChild(createTr)
        .appendChild(createTd)
        .innerText = value
    });
  }

  btn.addEventListener('click', () => {
    const input = document.querySelector('input').value;
    deuses.push(input);
    clear()
    loadArray();
  });

  input.addEventListener('keydown', event => {
    if (event.keyCode === 13){
      const input = document.querySelector('input').value;
      deuses.push(input);
      clear()
      loadArray();
    }
  });

  function clear() {
    const tbody = document.querySelector('tbody');
    const tr = tbody.querySelectorAll('tr');
    const rowCount = tr.length;

    for (let i = rowCount - 1; i > -1; i--) {
      tbody.removeChild(tr[i]);
    }

    input.value = '';
    input.focus();
  }
}

window.onload = start();

// TODO
// (38) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
// Adicione os 3 Deuses: ('Loki', 'Odin', 'Frey') com a função push()

