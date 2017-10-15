'use strict';

function makeArmy() {
  let shooters = [];
  for (let i = 0; i < 10; i++) {
    shooters.push(i);
  }
  return shooters;
}

makeArmy();

{
  let [firstName, lastName] = ['This', 'Array'];
  let [some, question, ...rest] = 'Who is John Galt'.split(' ');
  let [my, task, ...hardTask] = 'This is hard task'.split(' ');
  let [firstValue, secondValue = makeArmy()] = ['item'];
}


{
  let car = {
    speed: 300,
    color: 'red',
    brand: 'Mercedes'
  };

  let {speed: value1, color: value2, brand: value3} = car;
}


{
  let options = {
    size: {
      width: 100,
      height: 100
    },
    color: ['Green', 'Blue']
  };

  let {title = 'Car', size: {width, height}, color: [color1, color2]} = options;
}


function sayHi(who = getName('Robert')) {
  console.log('Hi ' + who.toUpperCase());
}

function getName(firstName) {
  return firstName;
}


let title = function getLastName() {
  return 'Brown';
};

let functionName = title.name;

{
  let numbers = [1, 10, 122, 177, 15, 17];
  let maxNumber = Math.max(...numbers);
  let max = Math.max.apply(Math, numbers);

  let animal = animalName => 'This is ' + animalName;
  let car = carName => 'My car is ' + carName;
  let sum = (a, b) => a * b;
}


let getTime = () => {
  return new Date().getHours() + ':' + new Date().getMinutes();
};


let group = {
  title: 'in our course',
  students: ['Lena', 'Alex', 'Tom', 'Anna'],

  showList: function () {
    this.students.forEach(
      student => console.log(student + ' ' + this.title)
    )
  }
};


function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms)
  }
}

function sayHello(who) {
  console.log('Hello' + who);
}


{
  let name = 'Wilhelm';
  let hi = `Hello, ${name}`;
  let S = 'S\u0307\u0323';
  let normilizeS = '\u1e68';
}


let user = {
  name: 'Vasya'
};

let visitor = {
  isAdmin: false,
  visits: true
};

let admin = {
  isAdmin: true
};

let newProp = Object.assign(user, visitor, admin);


let name = 'Story about one man';
let story = {
  name,
  getName() {
    console.log(this.name);
  }
};
story.getName();


let cities = {
  cityFirst: 'New York',
  citySecond: 'London',
  cityThird: 'Brussels',
  getVisitedCities() {
    console.log(`Visited cities: ${this.cityFirst}, ${this.citySecond}, ${this.cityThird}`)
  }
};
cities.getVisitedCities();


let authorName = 'Pascal';
let authorSurname = 'Precht';

let author = {
  get fullName() {
    return `Full Name is: ${authorName} ${authorSurname}`;
  }
};
author.fullName;


let animal = {
  walk() {
    console.log('I am walking');
  }
};

let rabbit = {
  __proto__: animal,
  walk() {
    super.walk();
  }
};
rabbit.walk();


class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}
let newUser = new User('Robert');
newUser.sayHi();


class Car {
  constructor(speed) {
    this.speed = speed;
  }

  getSpeed() {
    console.log(`Speed: ${this.speed} km/h`);
  }
}
let car = new Car(300);
car.getSpeed();


class Admin {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newValue) {
    [this.firstName, this.lastName] = newValue.split(' ');
  }

}

let newAdmin = new Admin('Rodion', 'Ismailov');
console.log(newAdmin.fullName);

newAdmin.fullName = 'Wilhelm Precht';
console.log(newAdmin.fullName);


class Animal {
  constructor(name) {
    this.name = name;
  }

  canWalk() {
    console.log(this.name + ' can walk' );
  }
}

class Rabbit extends Animal {
  walk() {
    super.canWalk();
    return '...and run';
  }
}

let rabbit = new Rabbit('Jumper');
console.log(rabbit.walk());


let arrFruits = ['Apple', 'Orange', 'Cherry', 'Pear'];
for (let fruit of arrFruits) {
  console.log(fruit);
}

let objFruits = {
  first: 'Apple',
  second: 'Orange',
  third: 'Cherry'
};

for (let fruit in objFruits) {
  console.log(fruit, objFruits[fruit]);
}

let codes = {
  '7': 'Russia',
  '38': 'Ukrane',
  '1': 'USA'
};

for (let code in codes) {
  console.log(code, codes[code]);
}

function isEmpty(obj) {
  for (let key in obj) {
    return false; //если свойства есть будет вызван этот код
  }
  return true; //если свойств нет, этот
}

let shedule = {};

console.log(isEmpty(shedule));

shedule['8:30'] = 'up';

console.log(isEmpty(shedule));

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
console.log(getSalaries(salaries));


let maxCount = (salaries) => {
  let b = 0;
  for (let salary in salaries) {
    b < salaries[salary] ? b = salaries[salary] : b;
  }
  return b;
};
console.log(maxCount(salaries));
