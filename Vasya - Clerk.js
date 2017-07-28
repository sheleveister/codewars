"use strict";

const tickets = (peopleInLine) => {
  const cache = {
    "25": 0,
    "50": 0
  };
  
  peopleInLine.map((item) => {
    switch (item) {
      case 25:
        cache["25"] += 1;
        break;
      case 50:
        cache["50"] += 1;
        cache["25"] -= 1;
        break;
      case 100:
        if (cache["25"] >= 3 && cache['50'] === 0) {
          cache["25"] -= 3;
        } else {
          cache["25"] -= 1;
          cache["50"] -= 1;
        }
        break;
    }
  });
  
  if (cache["25"] < 0 || cache["50"] < 0) {
    return "NO";
  }
  
  return "YES";
  
};

tickets([25, 25, 50, 50]); // "YES"
tickets([25, 100]);// "NO"
