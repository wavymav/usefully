/**
 * @function findLong   - Will find the longest word within a given string arguement
 *
 * @param  {String} str - A simple string
 * @return {Number}     - The longestWord length value
 */
export const findLong = (str) => {
  if (typeof(str) !== 'string') {
    throw new Error("Arguement must be of type string!");
  }
  else {
    let wordArr = str.split(' ');
    let previousWordLength = 0;
    let longestWord;
    let currentWordLength;

    wordArr.forEach(word => {
      currentWordLength = word.length;
      if (currentWordLength > previousWordLength) {
        previousWordLength = currentWordLength;
        longestWord = word;
      }
    });
    return longestWord.length;
  }
};

/*******************************************************************************

*******************************************************************************/

// export function findLong(str) {
//   if (typeof(str) !== 'string') return undefined;
//   else {
//     let wordArray = str.split(' ');
//     let previousWordLength = 0;
//     let longestWord;
//     let currentWordLength;
//
//     for (let i = 0; i < wordArray.length; i++) {
//       currentWordLength = wordArray[i].length;
//       if (currentWordLength > previousWordLength) {
//         previousWordLength = currentWordLength;
//         longestWord = wordArray[i];
//       }
//     }
//     return longestWord.length;
//   }
// }
