/**
 * @function - Will repeat the first string argument n times based on the value
 *           of the second number argument.
 *
 * @param  {String} str - String value to be repeated
 * @param  {Number} num - Number of time to repeeat string
 * @return {String}     - Reated string value
 */
export const strRepeat = (str, num) => {
  if (typeof(str) !== 'string') {
    throw new Error("First argument must be of type string!");
  }
  if (typeof(num) !== 'number') {
    throw new Error("Second argument must be of type number!");
  }

  let repeatedString = '';
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      repeatedString += str;
    }
    return repeatedString;
  } else return repeatedString;
};

/*******************************************************************************

*******************************************************************************/

// function repeat(str, num) {
//   var repeatedString = '';
//   if (num > 0) {
//     for (var i = 0; i < num; i++) {
//       repeatedString += str + '... ';
//     }
//     return repeatedString;
//   } else {
//     return repeatedString;
//   }
// }
