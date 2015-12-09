"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @function factorial  - Calculates the factorial of the number arguement passed in.
 *
 * @param  {Number} num - A simple integer
 * @return {Number}     - The factorial value of the passed in integer
 */
var factorial = exports.factorial = function factorial(num) {
  if (typeof num !== 'number') {
    throw new Error("Arguement must be of type number!");
  } else {
    if (num === 0 || num === 1) return 1;else return num * factorial(num - 1);
  }
};

/*******************************************************************************

*******************************************************************************/

// export function factorial(num) {
//   if (typeof(num) !== 'number') return undefined;
//   else {
//     let total = 1;
//     for (let i = 2; i <= num; i++) {
//       total = total * i;
//     }
//     return total;
//   }
// }