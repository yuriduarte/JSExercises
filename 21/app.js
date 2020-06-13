const btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
  const price = document.querySelector('#input1').value;
  const discountValue = document.querySelector('#discount').value;

  const resultValue = document.querySelector('#resultValue');
  const resultDiscount = document.querySelector('#resultDiscount');
  const resultValueWithDiscount = document.querySelector('#resultValueWithDiscount');

  const result = handleDiscount(price, discountValue);
  show(result);

  function handleDiscount(price, discountValue) {
    const product = {
      value: price,
      discount: discountValue / 100 * price,
      valueWithDiscount: price - (discountValue / 100 * price)
    }

    console.log(product);
    return product;
  }

  function show(result) {
    clear();

    resultValue.value = `R$ ${result.value},00`;
    resultDiscount.value = `R$ ${result.discount},00`;
    resultValueWithDiscount.value = `R$ ${result.valueWithDiscount},00`
  }

  function clear() {
    document.querySelector('#discount').value = '';
    document.querySelector('#input1').value = '';
  }
});
