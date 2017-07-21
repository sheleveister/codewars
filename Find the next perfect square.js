"use strict";

function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  // return -1;
  
  var sqrt = Math.sqrt(sq);
  return sqrt % 1 == 0 ? Math.pow(sqrt + 1, 2) : -1;
  
}

findNextSquare(319225); // 320356, "Wrong output for 121"


function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}


