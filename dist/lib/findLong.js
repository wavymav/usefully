'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

/**
 * @function - Will find the longest word within a given string arguement
 *
 * @param  {String} str - A simple string
 * @return {Number}     - The longestWord length value
 */
var findLong = exports.findLong = function findLong(str) {
  if (typeof str !== 'string') {
    throw new Error("Arguement must be of type string!");
  } else {
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