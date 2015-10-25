'use strict';

var palindrome = function(str) {
  if (typeof(str) === 'string') {
    var word = str.replace(/\s|\W/g, '').toLowerCase(),
        wordReversed = str.replace(/\s|\W/g, '').split('').reverse().join('').toLowerCase();
    if ( word === wordReversed ) {
      return true;
    } else {
      return false;
    }
  } else {
    return undefined;
  }
};

module.exports = {
  check: palindrome
};
