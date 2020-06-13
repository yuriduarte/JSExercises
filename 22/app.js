const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  const year = document.querySelector('#input1').value;
  const span = document.querySelector('span');

  const result = handleYear(year);
  console.log(result);

  show(result);

  function handleYear(year) {
    const currentYear = new Date().getUTCFullYear();
    const age = currentYear - year;

    console.log(age);

    if (year <= 0 || year === '' || year === null || year === undefined) {
      return 'Por favor insira um ano válido.'
    }

    if (age < 18) {
      return 'Menor de idade 👶🏻'
    }

    if (age >= 18 && age <= 59) {
      return 'Maior de idade. 👩🏻';
    }

    if (age >= 60) {
      return 'Melhor idade. 👵🏻';
    }
  }

  function show(result) {
    clear();
    span.appendChild(document.createTextNode(result))
  }

  function clear() {
    span.textContent = '';
    document.querySelector('#input1').value = '';
  }
})
