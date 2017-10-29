'use strict';

let arrFruits = ['Apple', 'Orange', 'Pear', 'Lemon'];
let min = 0;
let max = arrFruits.length - 1;

let random = Math.floor(Math.random() * (max + 1 - min));
console.log(arrFruits[random]);


let collection = ['test', 2, 1.5, false];

function find(arr, value) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
    return -1;
  }

}
console.log(find(collection, 'test'));
console.log(find(collection, false));
console.log(collection.indexOf('test'));


let somestring = 'Congue accusamus Nam expedita condimentum';
let newArr = somestring.split(' ');
let newValues = ['architecto', 'saepe', 'fames'];
let someValues = ['accusamus', 'Nam', 'expedita'];

newArr.splice(somestring.length, 0, ...newValues);
newArr = newArr.concat(...someValues);
console.log(newArr);


let fn = (a, b) => a - b;

let num = [1, 16, 25, 76, 3, 7];
console.log(num.sort(fn));

console.log(newArr.indexOf('Nam'));

let someObj = {};

for (let i = 0; i < newArr.length; i++) {
  someObj[newArr[i]] = true;
}
console.log(someObj);


let arrKeys = Object.keys(someObj);
console.log(arrKeys);


let obj = {
  className: 'open menu'
};

function addClass(obj, className) {

  let prop = obj.className.split(' ');
  prop.splice(prop.length, 0, className);

  let objProp = {};
  for (let i = 0; i < prop.length; i++) {
    objProp[prop[i]] = true;
  }
  let unicProp = Object.keys(objProp);
  obj.className = unicProp.join(' ');

  return obj;

}
console.log(addClass(obj, 'new'));
console.log(addClass(obj, 'open'));
console.log(addClass(obj, 'me'));
console.log(addClass(obj, 'open'));


function camelize(str) {

  let newStr = str.split('-');
  let propToCammelCase = '';

  for (let i = 0; i < newStr.length; i++) {

    propToCammelCase += newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);

  }
  return propToCammelCase;

}
console.log(camelize('background-color'));


function toCammelCase(str) {

  let newStr = str.split('');

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === '-') {
      newStr.splice(i, 2, newStr[i + 1].toUpperCase());
    }
  }
  return newStr.join('');

}
console.log(toCammelCase('-webkit-transition'));
console.log(toCammelCase('list-style-image'));
console.log(toCammelCase('background-color'));


function toCapitalize(str) {

  return str.charAt(0).toUpperCase() + str.slice(1);

}
console.log(toCapitalize('background'));


let somethingStr = 'Occaecati natoque venenatis dicta Anim aliquet'.toLowerCase();
let array = somethingStr.split(' ');
let occaecatiArr = [];

array.forEach(function (item, i, array) {
  return occaecatiArr.push(item.toUpperCase());
});
console.log(occaecatiArr);


let arr = [1, -1, 2, -2, 3];

let newNum = arr.filter(function (num) {
  return num < 0;
});
console.log(newNum);


occaecatiArr.map(function (elem, i) {
  console.log(elem, i);
});


let arrLive = ["Есть", "жизнь", "на", "Марсе"];
let arrLength = [];

arrLive.map(function(item) {
  arrLength.push(item.length);
});
console.log(arrLength);


function say() {

  let allArg = [];

  for (let key in arguments) {
    allArg.push(arguments[key]);
  }
  return allArg;

}
console.log(say('Libero', 'sociis', 'do', 'natoque'));


let vasya = {
  age: 21,
  name: 'Вася',
  surname: 'Петров'
};

let user = {
  isAdmin: false,
  isEmailConfirmed: true
};

let student = {
  university: 'My university'
};

console.log(Object.assign(vasya, user, student));
