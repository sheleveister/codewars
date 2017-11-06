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

console.log (isEmpty(shedule));

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
console.log (getSalaries(salaries));


let maxCount = (salaries) => {
  let b = 0;
  for (let salary in salaries) {
    b < salaries[salary] ? b = salaries[salary] : b;
  }
  return b;
};
console.log (maxCount(salaries));

let cars = {};

function isCars(cars) {
  for (let car in cars) {
    return 'properties here';
  }
  return 'no properties';
}

console.log (isCars(cars));

cars['bmw'] = 'X2';

console.log (isCars(cars));

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

multipleNumeric(menu);
console.log(menu);


let browsers = {
  Chrome: 65,
  Safari: 11,
  Firefox: 59
};

let lastVersions = browsers;
browsers.Firefox = 58;

console.log(lastVersions);


let user = {

  name: 'Luke',
  say: function() {
    return this.name + ', I am your father'
  }

};

let say = user.say();


let objSubordinates = {
  title: 'Rachel',
  type: 'Closed',
  img: 'c9a66e5e26c4.png',
  subordinates: [
    {
      title: 'Vincent',
      img: 'c9a66e5e26c4.png',
      office: 'West',
      subordinates: [],
    },
    {
      title: 'Robert',
      position: {
        name: 'business management',
      },
      office: 'East',
      subordinates: [
        {
          title: 'Ann',
          position: {
            name: 'Director',
          },
          office: 'East',
          type: 'Closed',
          img: 'a66e5e26c4.png',
        },
      ]
    },
  ]
};

function setObjWithChildProp(obj) {

  for (let key in obj) {

    if (key === 'subordinates') {
      obj.children = obj[key];
      delete obj.subordinates;

      let objSub = obj.children;

      getObjSub(objSub);
      return obj;
    }

  }

}

function getObjSub(objSub) {

  for (let i = 0; i < objSub.length; i++) {

    if ((objSub[i]).subordinates.length) {
      objSub[i].children = (objSub[i]).subordinates;
      delete (objSub[i]).subordinates;
      return objSub;
    }
    delete (objSub[i]).subordinates;

  }

}

let objWithChild = setObjWithChildProp(objSubordinates);


function User(firstName, lastName) {

  this.firstName = firstName;
  this.lastName = lastName;

  let phrase = 'Hi';

  function getFullName() {
    return `${firstName} ${lastName}`;
  }

  this.sayHi = function() {
    return phrase + ', ' + getFullName();
  }

}

let robert = new User('Robert', 'Rabkin');
console.log(robert.sayHi());


let user = {
  name: "Nick",
  age: 30
};

let keys = Object.keys(user);
console.log(keys);


function Visitor() {
}

let guest = new Visitor();


let visitor = {
  name: 'Ragnar',
  lastName: 'Danneshild',

  get fullName() {
    return `${this.name} ${this.lastName}`;
  },

  set fullName(value) {
    let fullName = value.split(' ');
    this.name = fullName[0];
    this.lastName = fullName[1];
    return `${this.name} ${this.lastName}`;
  }

};

console.log(visitor.fullName);
console.log(visitor.fullName = 'Van Gog');