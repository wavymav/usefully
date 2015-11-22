'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLong = findLong;

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

/**
 * Finds the longest word in a given string. First checks if the passed in param
 * is not a data type of string. If true returns undefined, if false proceeds on.
 * Used the split property on the passed in string to convert into an array of
 * words and assigned it to wordArr. Initialized longestWord & currentWordLength
 * & declared previousWordLength to be 0. Used the forEach property to check
 * each word in the Array making sure to get and store the largest word found.
 * @param  {String} str - A simple string
 * @return {Number}     - The longestWord length value
 */
function findLong(str) {
  if (typeof str !== 'string') return undefined;else {
    var _ret = (function () {
      var wordArr = str.split(' ');
      var previousWordLength = 0;
      var longestWord = undefined;
      var currentWordLength = undefined;

      wordArr.forEach(function (word) {
        currentWordLength = word.length;
        if (currentWordLength > previousWordLength) {
          previousWordLength = currentWordLength;
          longestWord = word;
        }
      });
      return {
        v: longestWord.length
      };
    })();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
}

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