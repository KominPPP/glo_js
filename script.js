let title = "DevLab";
let screens = "Simple, Hard, Interactive";
const screenPrice = 50;
let rollback = 10;
let fullPrice = 150;
let adaptive = true;

console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " $");
console.log("Стоимость верстки сайта " + fullPrice + " $");

console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100) + " $");
