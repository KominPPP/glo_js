let title = promt("Как называется ваш проект?");
let screens = promt("Выберите тип экрана: простой, сложный, интерактивный!");
let screenPrice = +promt("Введите стоимость экрана");
let adaptive = confirm("Нужен ли адаптив эрана?");
let service1 = promt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +promt("Введите стоимость услуги");
let service2 = promt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +promt("Введите стоимость услуги");

let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
console.log(servicePercentPrice);

// console.log(typeof title, typeof fullPrice, typeof adaptive);
// console.log(screens.length);
// console.log("Стоимость верстки экранов " + screenPrice + " $");
// console.log("Стоимость верстки сайта " + fullPrice + " $");

// console.log(screens.toLowerCase().split(", "));
// console.log(fullPrice * (rollback / 100) + " $");
