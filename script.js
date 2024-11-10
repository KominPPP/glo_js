"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrice: 0,
  service1: "",
  service2: "",

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор вестки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные"
    );

    do {
      appData.screenPrice = prompt("Введите стоимость данной работы");
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив эрана?");
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
  },

  getAllServicePrice: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      let price = 0;
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
      }

      do {
        price = prompt("Введите стоимость доп. услуги");
      } while (!appData.isNumber(price));

      sum += +price;
    }

    return sum;
  },

  getRollbackMassage: function (price) {
    if (price >= 30000) {
      return "Даем скидку 10%";
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку 10%";
    } else if (price < 15000 && price >= 0) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },

  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrice;
  },

  getTitle: function (str) {
    str = str.trimStart();
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  },

  getServicePercentPrice: function () {
    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
    return appData.servicePercentPrice;
  },

  start: function () {
    appData.asking();
    appData.allServicePrice = appData.getAllServicePrice();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrice();
    appData.title = appData.getTitle(appData.title);
    appData.logger();
  },

  logger: function () {
    for (let key in appData) {
      console.log(appData[key]);
    }
  },
};

appData.start();
