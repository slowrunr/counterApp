let button = document.querySelector("button");
let counterText = document.querySelector(".counter");
//console.log(button);
button.addEventListener("click", function () {
  counter = counter + 1;
  console.log(counter);
  counterText.innerText = counter;
});
let counter = 0; //объявляем первую переменную
//DOM document object model
