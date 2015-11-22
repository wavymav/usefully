/**
 * Takes the param and checks if the data type is not a string . If true return
 * undefined, if false program continues onward. Used split method on the on
 * string to convert into an a array of letters, then called reverse along with
 * join to convert array back to string. Then return it.
 * @param  {String} str - A simple string
 * @return {String}     - Reversed string
 */
export function reverseStr(str) {
  if (typeof(str) !== 'string') return undefined;
  else return str.split('').reverse('').join('');
}
