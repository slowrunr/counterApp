const counterText = document.getElementById("counterValue");
const addValueButton = document.getElementById("addValueButton"); // если обращаемся к id то .getElementById
const resetButton = document.getElementById("resetButton");

const COUNTER_INITIAL_VALUE = 0; // все конкретные цифры выносятся в отдельные переменные
let counter = COUNTER_INITIAL_VALUE; // вместо записи 'counter = 0'
const COUNTER_ADDED_VALUE = 1;

addValueButton.addEventListener("click", function () {
  counter = counter + COUNTER_ADDED_VALUE; //вариант с parseint(addValueButton.dataset.pool) выдаёт NaN
  //console.log(counter);
  counterText.innerText = counter;
});

resetButton.addEventListener("click", function () {
  counter = COUNTER_INITIAL_VALUE;
  counterText.innerText = counter;
});
