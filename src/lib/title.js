/**
 * This function first checks if argument is not a data type of string if false
 * program proceeds on. Declares an array & Initializes 2 variables. Next, the
 * string argument is spilt into an Array of words upon which the forEach method
 * is called to iterate through the array. With each word I grab the 0 index of
 * word and capitalize it. Following that I store the every after the 0 index
 * with the substr method and convert it to lowercase. Afterwards I concat and
 * push the two new strings to wordArr. Finally I join the wordArr back into a
 * string.
 * @param  {String} str - A simple string
 * @return {String}     - A Title Cased string
 */
export function title(str) {
  if (typeof(str) !== 'string') return undefined;
  let wordArr = [];
  let firstLetter;
  let restOfWord;

  str.split(' ').forEach(word => {
      firstLetter = word.charAt(0).toUpperCase();
      restOfWord = word.substr(1).toLowerCase();
      wordArr.push(firstLetter + restOfWord)
  });
  return wordArr.join(' ');
}


/*******************************************************************************

*******************************************************************************/

// export function title(str) {
//   var wordArray = str.split(' ');
//   var newWordArray = [];
//   var firstLetter;
//   var restOfWord;
//   var newWord;
//
//   for (var i = 0; i < wordArray.length; i++) {
//     firstLetter = wordArray[i].charAt(0).toUpperCase();
//     restOfWord = wordArray[i].substr(1).toLowerCase();
//     newWord = firstLetter + restOfWord;
//
//     newWordArray.push(newWord);
//   }
//
//   return newWordArray.join(' ');
// }
