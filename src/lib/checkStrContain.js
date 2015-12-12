/**
 * @function - Will return true if the the first string argument contains all of
 *           the second string arguments letters.
 *
 * @param  {Array} arr  - An array containing one or two string elements
 * @return {Boolean}    - true or false
 */
export const checkStrContain = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Argument must be an Array!");
  }
  if (arr.length === 2) {
    if (typeof(arr[0]) !== 'string' && typeof(arr[1]) !== 'string') {
      throw new Error("Array must contain at most two string elements!");
    }
  }
  if (arr.length > 2) {
    throw new Error("Array cannot contain more than two strings!");
  }


  let firstArr = arr[0].toLowerCase().split('');
  let secondArr = arr[1].toLowerCase().split('');

  for (var i = 0; i < secondArr.length; i++) {
    if (firstArr.indexOf(secondArr[i]) < 0) return false;
  }
  return true;
};
