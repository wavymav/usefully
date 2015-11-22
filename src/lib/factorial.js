/**
 * First checks to see if the passed in param is not a data type of Number. If
 * false return undefined, if true proceeds onward. Used recursion to get the
 * final value. Will end when the return value is either 1 or 0.
 * @param  {Number} num - A simple integer
 * @return {Number}     - The factorial value of the passed in integer
 */
export function factorial(num) {
  if (typeof(num) !== 'number') return undefined;
  else {
    if (num === 0 || num === 1) return 1;
    else return num * factorial(num - 1);
  }
}

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
