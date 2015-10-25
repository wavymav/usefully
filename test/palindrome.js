var expect = require('chai').expect;
var palindromeCheck = require('../src/lib/palindrome');

describe('palindrome', function() {
  describe('#palindrome(str)', function() {

    it('should return undefined if the arguement is not a string', function() {
      expect(palindromeCheck.palindrome(434)).to.be.undefined;
    });

    it('palindrome() should return undefined', function() {
      expect(palindromeCheck.palindrome()).to.be.undefined;
    });

    it('palindrome("eye") should return true', function() {
      expect(palindromeCheck.palindrome('eye')).to.be.true;
    });

    it('palindrome("race car") should return true', function() {
      expect(palindromeCheck.palindrome('race car')).to.be.true;
    });

    it('palindrome("not a palindrome") should return true', function() {
      expect(palindromeCheck.palindrome('not a palindrome')).to.be.false;
    });

    it('palindrome("A man, a plan, a canal. Panama") should  to return true', function() {
      expect(palindromeCheck.palindrome('A man, a plan, a canal. Panama')).to.be.true;
    });

    it('palindrome("never odd or even") should return true', function() {
      expect(palindromeCheck.palindrome('never odd or even')).to.be.true;
    });

    it('palindrome("nope") should return false', function() {
      expect(palindromeCheck.palindrome('nope')).to.be.false;
    });

    it('palindrome("almostomla") should return false', function() {
      expect(palindromeCheck.palindrome('almostomla')).to.be.false;
    });

    it('palindrome("My age is 0, 0 si ega ym.") should return true', function() {
      expect(palindromeCheck.palindrome('My age is 0, 0 si ega ym.')).to.be.true;
    });

    it('palindrome("1 eye for of 1 eye.") should return false', function() {
      expect(palindromeCheck.palindrome('1 eye for of 1 eye.')).to.be.false;
    });

    it('palindrome("0_0 (: /-\ :) 0-0") should return true', function() {
      expect(palindromeCheck.palindrome('0_0 (: /-\ :) 0-0')).to.be.true;
    });
  });
});
