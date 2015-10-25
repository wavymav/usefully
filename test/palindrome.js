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

    it('check("eye") to return true', function() {
      expect(palindrome.check('eye')).to.be.true;
    });

    it('check("race car") to return true', function() {
      expect(palindrome.check('race car')).to.be.true;
    });

    it('check("not a palindrome") to return true', function() {
      expect(palindrome.check('not a palindrome')).to.be.false;
    });
  });
});
