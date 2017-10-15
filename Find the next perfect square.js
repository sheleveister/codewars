"use strict";

function findNextSquare(sq) {

  var sqrt = Math.sqrt(sq);
  return sqrt % 1 == 0 ? Math.pow(sqrt + 1, 2) : -1;
  
}
findNextSquare(319225);

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
