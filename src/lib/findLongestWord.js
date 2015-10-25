'use strict';

var findLongestWord = function(str) {
  if (typeof(str) === 'string') {
    var wordArray = str.split(' '),
        previousWordLength = 0,
        longestWord,
        currentWordLength;

    for (var i = 0; i < wordArray.length; i++) {
      currentWordLength = wordArray[i].length;
      if (currentWordLength > previousWordLength) {
        previousWordLength = currentWordLength;
        longestWord = wordArray[i];
      }
    }
    return longestWord.length;
  } else {
    return undefined;
  }
};

module.exports = {
  longestWord: findLongestWord
};
