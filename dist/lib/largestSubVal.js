'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.largestSubVal = largestSubVal;
/**
 * Takes in an
 * @param  {Array} arr - A 2D array of numbers
 * @return {Array}     - An array of numbers
 */
function largestSubVal(arr) {
  if (!Array.isArray(arr)) return undefined;
  var newArray = [];
  var largestNumber = undefined,
      currentNumber = undefined;

  arr.forEach(function (subArr) {
    if (!Array.isArray(subArr)) return newArray = [];
    var comparison = 0;
    subArr.forEach(function (value) {
      if (typeof value !== 'number') return newArray = [];
      currentNumber = value;
      if (currentNumber > comparison) {
        comparison = currentNumber;
      }
    });
    largestNumber = comparison;
    newArray.push(largestNumber);
  });
  if (newArray.length !== arr.length) return newArray = [];
  return newArray;
}

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