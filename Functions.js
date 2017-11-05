'use strict';

let getSum = function(a, b) {
  return a + b;
};

getSum(5, 7);


let sum = new Function('a,b', 'return a+b');
let resultSum = sum(1, 3);


function pow(x, n) {
  if (n !== 1) {
    return x * pow(x, n - 1);
  }
  return x;
}

pow(2, 3);


function sumTo(n) {

  if (n !== 0) {
    return n + sumTo(n - 1);
  }
  return n;

}

sumTo(4);
