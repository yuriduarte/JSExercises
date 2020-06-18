function start() {
  const btn = document.querySelector('#btn');

  btn.addEventListener('click', () => {
    const span = document.querySelector('span');
    const firstNote = Number(document.querySelector('#input1').value);
    const secondNote = Number(document.querySelector('#input2').value);
    const thirdNote = Number(document.querySelector('#input3').value);
    const fourthNote = Number(document.querySelector('#input4').value);
    const notes = [firstNote, secondNote, thirdNote, fourthNote];

    const total = notes.reduce((acc, value) => {
      return acc + value;
    });

    const avarege = total / notes.length;

    span.innerText = `Sua média é: ${avarege}`
  });
}

window.onload = start();

// 1 – Calcule a média de diversas notas digitadas pelo usuário.
