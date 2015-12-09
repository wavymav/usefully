/**
 * @function - Returns a string value in the revesed order.
 *
 * @param  {String} str - A simple string
 * @return {String}     - Reversed string
 */
export const reverseStr = (str) => {
  if (typeof(str) !== 'string') {
    throw new Error("Arguement must be of type string!");
  }
  else return str.split('').reverse('').join('');
};
