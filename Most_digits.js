'use strict';

function findLongest(array){
  let newArr = array.map(function(item) {
    return String(item);
  });

  return Math.max(...newArr);
}

findLongest([1, 10, 100]);
findLongest([9000, 8, 800]);
findLongest([8, 900, 500]);
