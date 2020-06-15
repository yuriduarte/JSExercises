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

  const formatedDate = `${day}/${month}/${currentYear}`;

  span.appendChild(document.createElement('p')).innerText = `Data de hoje: ${formatedDate}`;
}

window.onload = start();

// TODO
// (35) Exiba a data atual pelo JavaScript no seguinte formato: dia/mês/Ano

