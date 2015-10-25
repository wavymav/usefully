'use strict';

var factorialize = function(num) {
  if (typeof(num) === 'number') {
    if (num === 1 || num === 0) {
      return 1;
    } else {
      return num * factorialize(num - 1);
    }
  } else {
    return undefined;
  }
};

module.exports = {
  factorial: factorialize
};
