let addButton = document.querySelector(".add__value");
let counterText = document.querySelector(".counter");
let resetButton = document.querySelector(".reset");
//console.log(button);
addButton.addEventListener("click", function () {
  counter = counter + 1;
  //console.log(counter);
  counterText.innerText = counter;
});
let counter = 0;
resetButton.addEventListener("click", function () {
  counter = 0;
  counterText.innerText = counter;
});
