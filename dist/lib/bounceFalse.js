"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @function - Will remove all false elements from Array argument.
 *
 * @param  {Array} arr - Initial Array
 * @return {Array}     - New Array with no false values
 */
var bounceFalse = exports.bounceFalse = function bounceFalse(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Argument must be an Array!");
  }

  return arr.filter(function (item) {
    if (item) return item;
  });
};