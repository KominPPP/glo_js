"use strict";

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemPercent = document.querySelectorAll(".other-items.percent");
const otherItemNumber = document.querySelectorAll(".other-items.number");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value");

const startBtn = document.getElementsByClassName("handler_btn")[0];

const resetBtn = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

let appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicePricePercent: 0,
  servicePriceNumber: 0,
  servicesPercent: {},
  servicesNumber: {},
  screenCount: 0,

  init: function () {
    this.addTitle();

    startBtn.addEventListener("click", this.start);

    buttonPlus.addEventListener("click", this.addScreenBlock);
    inputRange.addEventListener("input", this.inputRange);
    inputRange.addEventListener("change", this.inputRange);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  check: function () {
    let error = false;
    screens.forEach(function (screen) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      if (select.value === "" || input.value === "") {
        error = true;
      }
    });

    return error;
  },

  inputRange: function () {
    const value = inputRange.value;
    inputRangeValue.textContent = value;
    appData.rollback = value;
  },

  start: function () {
    if (appData.check()) {
      return;
    }
    appData.addScreens();
    appData.addServices();
    appData.addPrices();

    console.log(appData);
    appData.showResult();
  },

  // isNumber: function (num) {
  //   return !isNaN(parseFloat(num) && isFinite(num));

  showResult: function () {
    total.value = appData.screenPrice;
    totalCount.value = appData.screenCount;
    totalCountOther.value =
      appData.servicePriceNumber + appData.servicePricePercent;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.servicePercentPrice;

    screens.forEach(function (screen) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      select.disabled = true;
      input.disabled = true;
      buttonPlus.disabled = true;
      document.getElementById("start").style.display = "none";
      document.getElementById("reset").style.display = "";
    });
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
    });
  },

  addServices: function () {
    otherItemPercent.forEach(function (item) {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemNumber.forEach(function (item) {
      const check = item.querySelector('input[type="checkbox"]');
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
    console.log(cloneScreen);
  },

  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (const input in appData.screens) {
      appData.screenCount += +appData.screens[input].count;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePriceNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricePercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }
    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricePercent +
      appData.servicePriceNumber;

    appData.servicePercentPrice =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },

  reset: function () {
    resetBtn.addEventListener("click", (e) => {
      e.preventDefault();
      total.value = 0;
      totalCount.value = 0;
      totalCountOther.value = 0;
      fullTotalCount.value = 0;
      totalCountRollback.value = 0;
      inputRange.value = 0;
      inputRangeValue.textContent = 0 + "%";

      const checkboxes = document.querySelectorAll("input[type='checkbox']");
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });

      screens.forEach(function (screen) {
        const select = screen.querySelector("select");
        const input = screen.querySelector("input");

        select.selectedIndex = 0;
        input.value = 0;
        select.disabled = false;
        input.disabled = false;
        buttonPlus.disabled = false;

        document.getElementById("start").style.display = "";
        document.getElementById("reset").style.display = "none";

        if (screens.length > 1) {
          screens[screens.length - 1].remove();
        }
      });
    });
  },
};

appData.init();
appData.reset();
