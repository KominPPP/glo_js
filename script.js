"use strict";

let title;
let screens;
let screenPrice;
let adaptive;

let rollback = 10;
let fullPrice;
let servicePercentPrice;
let allServicePrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор вестки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

  do {
    screenPrice = prompt("Введите стоимость данной работы");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив эрана?");
};

const getAllServicePrice = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let price = 0;
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    do {
      price = prompt("Введите стоимость доп. услуги");
    } while (!isNumber(price));

    sum += +price;
  }

  return sum;
  // return servicePrice1 + servicePrice2;
};

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

const getFullPrice = function () {
  return +screenPrice + allServicePrice;
};

const getTitle = function (str) {
  str = str.trimStart();
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const getServicePercentPrice = function () {
  servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
  return servicePercentPrice;
};

asking();

allServicePrice = getAllServicePrice();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle(title);

showTypeOf(title);
showTypeOf(adaptive);
showTypeOf(screenPrice);

console.log("allServicePrice", allServicePrice);

// console.log(getTitle(title));
console.log(getRollbackMassage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(servicePercentPrice);
console.log(
  "Стоимость верстки экранов " +
    screenPrice +
    " ₽ и Стоимость разработки сайта " +
    fullPrice +
    " ₽"
);
// console.log("(доп.услуги " + allServicePrice + " ₽)");
