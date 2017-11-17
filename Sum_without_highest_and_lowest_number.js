'use strict';

function sumArray(array) {

  let sum = 0;
  if (array.length) {

    function fn(a, b) {
      return a - b;
    }

    let newArray = array.sort(fn);

    for (let i = 1; i < newArray.length - 1; i++) {
      sum += newArray[i];
    }
    return sum;
  }
  return 0;

}

sumArray([6, 2, 1, 8, 10]);
sumArray([1, 1, 11, 2, 3]);
let result = sumArray([null]);
