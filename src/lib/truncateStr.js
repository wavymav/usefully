/**
 * @function - Will truncate the first string argument based on the second number
 *            argument value which is reponsible targeting the strings the index
 *            value.
 *
 * @param  {String} str - String to truncate
 * @param  {Number} num - Target index value
 * @return {String}     - Truncated string
 */
export const truncateStr = (str, num) => {
  if (typeof(str) !== 'string') {
    throw new Error("First argument must be of type string!");
  }
  if (typeof(num) !== 'number') {
    throw new Error("Second argument must be of type number!");
  }

  if (str.length > num) {
    if (num <= 0) return str;
    else return str.slice(0, num).concat('...');
  }
  else if (str.length === num || str.length < num) {
    return str;
  }
};
