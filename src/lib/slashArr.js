/**
 * @function - Will chop off n (second arguments value) elements from the head
 *           of frist array arguments elements. Starting from the [0] on up.
 *
 * @param  {Array} arr      - Initial array
 * @param  {Number} howMany - Number of array elements from head
 * @return {Array}          - Slashed array
 */
export const slashArr = (arr, howMany) => {
  if (!Array.isArray(arr)) {
    throw new Error("Argument must be an Array!");
  }
  if (typeof(howMany) !== 'number') {
    throw new Error("Argument must be of type number!");
  }

  return arr.slice(howMany);
};
