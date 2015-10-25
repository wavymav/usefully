'use strict';

var palindrome = function(str) {
  if (typeof(str) === 'string') {
    var word = str.replace(/[\W_]/g, '').toLowerCase(),
        wordReversed = str.replace(/[\W_]/g, '').split('').reverse().join('').toLowerCase();
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
