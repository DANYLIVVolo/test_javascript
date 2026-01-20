// Ціна одного товару
// const — значення не змінюється
const price = 100;

// Знаходимо кнопку по класу
const button = document.querySelector('.calc-btn');

// Знаходимо поле введення по id
const input = document.querySelector('#qty');

// Знаходимо елемент для результату
const resultField = document.querySelector('.result');

// Додаємо обробник кліку
button.addEventListener('click', () => {

  // Беремо значення з input
  // input.value — це ТЕКСТ, тому перетворюємо в число
  const quantity = Number(input.value);

  // Перевірка: якщо введене не число
  if (isNaN(quantity)) {
    resultField.innerText = 'Введіть число!';
    return; // зупиняємо код
  }

  // Перевірка: кількість не може бути від’ємною
  if (quantity < 0) {
    resultField.innerText = 'Кількість не може бути менше 0!';
  } else {

    // Обчислення суми
    const total = price * quantity;

    // Виводимо результат
    resultField.innerText = 'До сплати: ' + total + ' грн';
  }
});
