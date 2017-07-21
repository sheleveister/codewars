'use strict';

function longest(s1, s2) {
  var s3 = s1 + s2;
  s3 = s3.split("");
  
  var obj = {};
  
  var strResult = '';
  
  for (var i = 0; i < s3.length; i++) {
    var str = s3[i];
    obj.hasOwnProperty(str);
    obj[str] = true;
  }
  
  for (var keys in obj) {
    strResult += keys;
  }
  
  return strResult.split('').sort().join('');
}

longest("aretheyhere", "yestheyarehere"); // aehrsty


function longestBest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}


