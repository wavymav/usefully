"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @function - Will Remove all elements in the first argument Array that are the
 *           same value as the next one or two arguments
 *
 * @param  {Object} arr - Arguments {} with one [] followed by potential element values.
 * @return {Array}      - Filtered Array without matching argument elements
 */
var destroyArrElement = exports.destroyArrElement = function destroyArrElement(arr) {
  if (!Array.isArray(arguments['0'])) {
    throw new Error("First argument must be an Array!");
  }

  var newArr = Array.prototype.slice.call(arguments);
  newArr.splice(0, 1);
  return arr.filter(function (element) {
    return newArr.indexOf(element) === -1;
  });
};