"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @function - Finds the largest number value within each sub-array of a 2D
 *           array and returns a new array consisting of the largest Sub Values.
 *
 * @param  {Array} arr      - A 2D array of numbers
 * @return {Array}          - An array of the largest value of each sub array
 */
var largestSubVal = exports.largestSubVal = function largestSubVal(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Argument must be an Array!");
  }
  var newArray = [];
  var largestNumber = undefined,
      currentNumber = undefined;

  arr.forEach(function (subArr) {
    if (!Array.isArray(subArr)) {
      throw new Error("Argument must be an 2D Array!");
    }
    var comparison = 0;
    subArr.forEach(function (value) {
      if (typeof value !== 'number') {
        throw new Error("Interior Array index values must consist of numbers!");
      }
      currentNumber = value;
      if (currentNumber > comparison) {
        comparison = currentNumber;
      }
    });
    largestNumber = comparison;
    newArray.push(largestNumber);
  });
  return newArray;
};

/*******************************************************************************

*******************************************************************************/

// function largestSubVal(arr) {
//   var newArray = [];
//   var largestNumber;
//   var currentNumber;
//
//   for (var i = 0; i < arr.length; i++) {
//     var comparison = 0;
//     for (var j = 0; j < arr[i].length; j++) {
//       currentNumber = arr[i][j];
//       if (currentNumber > comparison) {
//         comparison = currentNumber;
//       }
//     }
//     largestNumber = comparison;
//     newArray.push(largestNumber);
//   }
//   return newArray;
// }