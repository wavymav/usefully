/**
 * Takes in a 2D array of numbers and returns an array of the largest value of
 * each sub array. This is accomplished by first checking to see if the argument
 * is in fact an Array by using Array.isArray() method since typeof would only
 * return ‘object’. Next I set up the vars for the newArray, largestNumber, &
 * currentNumber. Following that I used a nested forEach method on the array
 * argument along with its sub array in order to iterate through each value.
 * While this is being done, if statements are checking if each sub array is an
 * array and each value in that sub array is a data type of number. Inside the
 * sub array are if statement that check to see if the current value is > the
 * comparison(previous value). Afterwards the largest number in that sub array
 * will be pushed to the new array. When the outer forEach method on the array
 * argument finally finish, a final if statement checks to see if the new array
 * is not the same length as the array argument, if true the new array will be
 * set to undefined, otherwise the new array is returned.
 * @param  {Array} arr - A 2D array of numbers
 * @return {Array}     - An array of the largest value of each sub array
 */
export function largestSubVal(arr) {
  if (!Array.isArray(arr)) return undefined;
  let newArray = [];
  let largestNumber, currentNumber;

  arr.forEach(subArr => {
    if (!Array.isArray(subArr)) return undefined;
    let comparison = 0;
    subArr.forEach(value => {
      if (typeof(value) !== 'number') return newArray = [];
      currentNumber = value;
      if (currentNumber > comparison) {
        comparison = currentNumber;
      }
    });
    largestNumber = comparison;
    newArray.push(largestNumber);
  });
  if (newArray.length !== arr.length) return newArray = undefined;
  return newArray
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
