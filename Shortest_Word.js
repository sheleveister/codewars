'use strict';

function findShort(s) {

  let sArr = s.split(' ');
  let newArr = [];
  sArr.forEach(function(item) {
    newArr.push(item.length);
  });
  return Math.min(...newArr);

}

findShort('bitcoin take over the world maybe who knows perhaps');
findShort('turns out random test cases are easier than writing out basic ones');

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}