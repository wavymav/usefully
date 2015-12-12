"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @function - Will chop off n (second arguemuents value) elements from the head
 *           of frist array arguements elements. Starting from the [0] on up.
 *
 * @param  {Array} arr      - Initial array
 * @param  {Number} howMany - Number of array elements from head
 * @return {Array}          - Slashed array
 */
var slashArr = exports.slashArr = function slashArr(arr, howMany) {
  if (!Array.isArray(arr)) {
    throw new Error("Arguement must be an Array!");
  }
  if (typeof howMany !== 'number') {
    throw new Error("Arguement must be of type number!");
  }

  return arr.slice(howMany);
};