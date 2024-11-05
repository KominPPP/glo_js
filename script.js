let title = prompt("Как называется ваш проект?");
let screens = prompt("Выберите тип экрана: простой, сложный, интерактивный!");
let screenPrice = +prompt("Введите стоимость экрана");
let adaptive = confirm("Нужен ли адаптив эрана?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Введите стоимость услуги");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Введите стоимость услуги");

let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
console.log("Стоимость верстки сайта " + fullPrice + " руб.");
console.log(
  "Стоимость верстки сайта с затратами " + servicePercentPrice + " руб."
);

if (fullPrice >= 3000) {
  console.log("Даем скидку 10%");
} else if (fullPrice >= 1500 && fullPrice < 3000) {
  console.log("Даем скидку 10%");
} else if (fullPrice < 1500 && fullPrice >= 0) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что-то пошло не так");
}

// console.log(typeof title, typeof fullPrice, typeof adaptive);
// console.log(screens.length);
// console.log("Стоимость верстки экранов " + screenPrice + " $");
// console.log("Стоимость верстки сайта " + fullPrice + " $");

// console.log(screens.toLowerCase().split(", "));
// console.log(fullPrice * (rollback / 100) + " $");
