'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @function - Checks wheather the passed in arguement is a palindrome
 *           or not. Will return true if argument is a palindrome.
 *           Otherwise will return false.
 *
 * @param  {String} str - word or phrase
 * @return {Boolean}    - true or false
 */
var checkPalin = exports.checkPalin = function checkPalin(str) {
  if (typeof str !== 'string') {
    throw new Error("Arguement must be of type string!");
  } else {
    var word = str.replace(/[\W_]/g, '').toLowerCase();
    var wordReversed = str.replace(/[\W_]/g, '').split('').reverse().join('').toLowerCase();
    if (word === wordReversed) return true;else return false;
  }
};