// Получение элементов калькулятора
const quantityInput = document.getElementById('quantity');
const productSelect = document.getElementById('product');
const calculateButton = document.getElementById('calculate');
const totalOutput = document.getElementById('total');

// Добавление обработчика события для кнопки расчета
calculateButton.addEventListener('click', calculateTotal);

// Функция для расчета общей стоимости заказа
function calculateTotal() {
  // Получение значения количества товара
  const quantity = parseInt(quantityInput.value);

  // Получение значения выбранного товара
  const product = productSelect.value;

  // Проверка наличия корректного значения количества
  if (isNaN(quantity) || quantity <= 0) {
    totalOutput.innerText = 'Ошибка: Проверьте введенное количество товара';
    return;
  }

  // Расчет общей стоимости в зависимости от выбранного товара
  let price = 0;
  switch (product) {
    case 'product1':
      price = 10;
      break;
    case 'product2':
      price = 15;
      break;
    case 'product3':
      price = 20;
      break;
    default:
      totalOutput.innerText = 'Ошибка: Выберите товар';
      return;
  }

  const total = quantity * price;

  // Вывод общей стоимости
  totalOutput.innerText = `Общая стоимость: ${total} руб.`;
};