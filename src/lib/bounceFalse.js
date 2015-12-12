/**
 * @function - Will remove all false elements from Array argument.
 *
 * @param  {Array} arr - Initial Array
 * @return {Array}     - New Array with no false values
 */
export const bounceFalse = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Argument must be an Array!");
  }

  return arr.filter((item) => {
    if (item) return item;
  });
};
