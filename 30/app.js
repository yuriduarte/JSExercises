function start() {
  const span = document.querySelector('span');

  for(let i = 0; i < 20; i++) {
    console.log(i);
    const index = i + 1;

    function handleOddOrEven(index) {
      if (index % 2 === 0) {
        return index;
      }
      return '';
    }

    const even = handleOddOrEven(index);

    span.appendChild(document.createElement('p')).innerHTML = even;
  }
}

start();
