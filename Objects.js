'use strict';

let objFruits = {
  first: 'Apple',
  second: 'Orange',
  third: 'Cherry'
};

for (let fruit in objFruits) {
  console.log (fruit, objFruits[fruit]);
}

let codes = {
  '7': 'Russia',
  '38': 'Ukrane',
  '1': 'USA'
};

for (let code in codes) {
  console.log (code, codes[code]);
}

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let shedule = {};

console.log (isEmpty (shedule));

shedule['8:30'] = 'up';

console.log (isEmpty (shedule));

let salaries = {
  'Vasya': 500,
  'Petya': 860,
  'Darya': 250
};

let getSalaries = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
};
console.log (getSalaries (salaries));


let maxCount = (salaries) => {
  let b = 0;
  for (let salary in salaries) {
    b < salaries[salary] ? b = salaries[salary] : b;
  }
  return b;
};
console.log (maxCount (salaries));

let cars = {};

function isCars(cars) {
  for (let car in cars) {
    return 'properties here';
  }
  return 'no properties';
}

console.log (isCars (cars));

cars['bmw'] = 'X2';

console.log (isCars (cars));

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

function isNumeric(n) {
  return !isNaN (parseFloat (n)) && isFinite (n);
}

function multipleNumeric(obj) {

  for (let key in obj) {
    if (isNumeric (obj[key])) {
      obj[key] *= 2;
    }
  }

}

multipleNumeric (menu);
console.log (menu);

let browsers = {
  Chrome: 65,
  Safari: 11,
  Firefox: 59
};

let lastVersions = browsers;
browsers.Firefox = 58;

console.log(lastVersions);
