'use strict';

console.log(isNaN(12));
console.log(isNaN('12'));
console.log(isNaN('count'));

console.log(isFinite(15));
console.log(isFinite('156'));
console.log(isFinite('number'));

console.log (parseFloat ('12.3.4'));
console.log (parseFloat ('12.898pd'));
console.log (parseFloat ('12em'));
console.log (parseInt ('12px'));

let n = 15.134;
console.log (n.toFixed (1));

let price1 = 0.1;
let price2 = 0.2;
console.log ((+price1 + +price2).toFixed (2));

let max = 10;
console.log(Math.random() * max);

let minNum = 5;
let maxNum = 15;
console.log(minNum + Math.random() * (maxNum - minNum));

function randomInteger(min, max) {
  return (min + Math.random() * (max - min)).toFixed(0);
}
console.log(randomInteger(1, 10));
