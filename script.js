"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Введите стоимость данной работы");
let adaptive = confirm("Нужен ли адаптив эрана?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Введите стоимость доп. услуги");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Введите стоимость доп. услуги");
let rollback = 10;
let fullPrice;
let servicePercentPrice;
let allServicePrice;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMassage = function (price) {
  if (price >= 30000) {
    return "Даем скидку 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку 10%";
  } else if (price < 15000 && price >= 0) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

const getAllServicePrice = function () {
  return servicePrice1 + servicePrice2;
};
allServicePrice = getAllServicePrice();

function getFullPrice() {
  fullPrice = screenPrice + allServicePrice;
  return fullPrice;
}

const getTitle = function (str) {
  str = str.trimStart();
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const getServicePercentPrice = function () {
  servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
  return servicePercentPrice;
};

showTypeOf(title);
showTypeOf(adaptive);
showTypeOf(screenPrice);
getFullPrice();
getServicePercentPrice();

console.log(getTitle(title));
console.log(getRollbackMassage(fullPrice));

console.log(screens.length);

console.log(servicePercentPrice);
console.log(
  "Стоимость верстки сайта " +
    screenPrice +
    " ₽ и Стоимость разработки сайта " +
    fullPrice +
    " ₽"
);

console.log("(доп.услуги " + allServicePrice + " ₽)");
