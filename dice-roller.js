'use strict';
let rollerNumber = parseInt(process.argv[2]);

const diceRoller = function() {
  let result1 = '';
  for (let i = 0; i < rollerNumber; i++) {
    let result = Math.floor(Math.random() * rollerNumber);
    result1 += (result);
    if (i !== (rollerNumber - 1)) {
      result1 += ', ';
    }
  }
  return result1;
};

diceRoller();