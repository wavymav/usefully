/**
 * @function - Will split the first argument (Array) into a 2D array consisting
 *           of sub array groups the length of the second argument number value.
 *
 * @param  {Array} arr    - Initial Array (must be 1 Dimensional)
 * @param  {Number} size  - Size of the sub array groups
 * @return {Array}        - Chunked array
 */
export const chunkArr = (arr, size) => {
  if (!Array.isArray(arr)) {
    throw new Error("Argument must be an Array!");
  }
  if (typeof(size) !== 'number') {
    throw new Error("Argument must be of type number!");
  }

  let chunkArr = [];
  for (let i = 0; i < arr.length; i+= size) {
    chunkArr.push(arr.slice(i, i + size));
  }
  return chunkArr;
};
