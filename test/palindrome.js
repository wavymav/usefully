var expect = require('chai').expect;
var palindrome = require('../src/lib/palindrome');

describe('palindrome', function() {
  describe('#check(str)', function() {

    it('should return undefined if the arguement is not a string', function() {
      expect(palindrome.check(434)).to.be.undefined;
    });

    it('check() should return undefined', function() {
      expect(palindrome.check()).to.be.undefined;
    });

    it('check("eye") should return true', function() {
      expect(palindrome.check('eye')).to.be.true;
    });

    it('check("race car") should return true', function() {
      expect(palindrome.check('race car')).to.be.true;
    });

    it('check("not a palindrome") should return true', function() {
      expect(palindrome.check('not a palindrome')).to.be.false;
    });

    it('check("A man, a plan, a canal. Panama") should  to return true', function() {
      expect(palindrome.check('A man, a plan, a canal. Panama')).to.be.true;
    });

    it('check("never odd or even") should return true', function() {
      expect(palindrome.check('never odd or even')).to.be.true;
    });

    it('check("nope") should return false', function() {
      expect(palindrome.check('nope')).to.be.false;
    });

    it('check("almostomla") should return false', function() {
      expect(palindrome.check('almostomla')).to.be.false;
    });

    it('check("My age is 0, 0 si ega ym.") should return true', function() {
      expect(palindrome.check('My age is 0, 0 si ega ym.')).to.be.true;
    });

    it('check("1 eye for of 1 eye.") should return false', function() {
      expect(palindrome.check('1 eye for of 1 eye.')).to.be.false;
    });

    it('check("0_0 (: /-\ :) 0-0") should return true', function() {
      expect(palindrome.check('0_0 (: /-\ :) 0-0')).to.be.true;
    });
  });
});
