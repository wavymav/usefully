'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @function - Checks if the first string argument ends with the second string
 *           arguments target value.
 *
 * @param  {String} str    - Word or phase
 * @param  {String} target - characters or words
 * @return {Boolean}       - true if match, otherwise false
 */
var confirmEnd = exports.confirmEnd = function confirmEnd(str, target) {
  if (typeof str !== 'string') {
    throw new Error('First argument must be of type string');
  }
  if (typeof target !== 'string') {
    throw new Error('Second argument must be of type string');
  }
  var targetWord = -target.length;
  if (str.substr(targetWord) === target) return true;else return false;
};