/**
 * Checks if passed in argument is not a data type of string. If true undefined
 * is returned, however if false program proceeds on. Used the replace method on
 * the argument in order to replace every letter to lowercase using regex and
 * stored the value in word var. Repeated the replace method along with splitting
 * string into an array of letters. At this point I use the reverse method to
 * reverse the order of the array, join back into a a string, and convert to
 * lowercase. Now checks if the word is equal to the reversedWord, if true then
 * returns true, if flase returns false.
 * @param  {String} str - A simple string
 * @return {Boolean}    - True or False
 */
export function checkPalin(str) {
  if (typeof(str) !== 'string') return undefined;
  else {
    let word = str.replace(/[\W_]/g, '').toLowerCase();
    let wordReversed = str.replace(/[\W_]/g, '').split('').reverse().join('').toLowerCase();
    if ( word === wordReversed ) return true;
    else return false;
  }
}
