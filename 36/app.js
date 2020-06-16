function start() {
  const span = document.querySelector('span');

  function getDate() {
    return new Date();
  }

  function serializedDate(number) {
    if (number <= 9) {
      return `0${number}`
    }
    return number;
  }

  const date = getDate();
  const currentYear = date.getUTCFullYear();
  const currentMonth = date.getUTCMonth();
  const currentDay = date.getDate();
  const day = serializedDate(currentDay);
  const month = serializedDate(currentMonth + 1);
  const nextMonth = serializedDate(currentMonth + 2);
  const formatedDate = `${day}/${month}/${currentYear}`;

  span.appendChild(document.createElement('p')).innerText = `Data de hoje: ${formatedDate}`;
  span.appendChild(document.createElement('p')).innerText = `Próximo mês: ${nextMonth}`;
}

window.onload = start();

// TODO
// (36) Exiba o próximo mês (dinamicamente obviamente)

