'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @function - Returns a string value in the revesed order.
 *
 * @param  {String} str - A simple string
 * @return {String}     - Reversed string
 */
var reverseStr = exports.reverseStr = function reverseStr(str) {
  if (typeof str !== 'string') {
    throw new Error("Arguement must be of type string!");
  } else return str.split('').reverse('').join('');
};