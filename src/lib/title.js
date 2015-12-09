/**
 * @function - Will capitalize the first letter of each word in a given string
 *           arguemnt.
 *           
 * @param  {String} str - A simple string
 * @return {String}     - A Title Cased string
 */
export const title = (str) => {
  if (typeof(str) !== 'string') {
    throw new Error("Arguement must be of type string!");
  }
  let wordArr = [];
  let firstLetter;
  let restOfWord;

  str.split(' ').forEach(word => {
      firstLetter = word.charAt(0).toUpperCase();
      restOfWord = word.substr(1).toLowerCase();
      wordArr.push(firstLetter + restOfWord)
  });
  return wordArr.join(' ');
};


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
