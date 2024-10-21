const btnTop = document.querySelector('.btn-top');
const btnBottom = document.querySelector('.btn-bottom');
const tableTop = document.querySelector('.table-top');
let isLowered = false;

btnTop.addEventListener('click', () => {
  if (isLowered) {
    tableTop.classList.remove('lowered');
    isLowered = false;
    console.log('Кнопка ВВЕРХ нажата');
  }
});

btnBottom.addEventListener('click', () => {
  if (!isLowered) {
    tableTop.classList.add('lowered');
    isLowered = true;
  }
});
