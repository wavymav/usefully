var expect = require('chai').expect;
var reverseString = require('../src/lib/reverseString');

describe('reverseString', function() {
  describe('#reverse(str)', function() {

    it('should return undefined if the arguement is not a string', function() {
      expect(reverseString.reverse(52)).to.be.undefined;
      expect(reverseString.reverse(true)).to.be.undefined;
      expect(reverseString.reverse()).to.be.undefined;
    });

    it('reverse("hello") should return "olleh"', function() {
      expect(reverseString.reverse('hello')).to.equal('olleh');
    });

    it('reverse("Another String") should return "gnirtS rehtonA"', function() {
      expect(reverseString.reverse('Another String')).to.equal('gnirtS rehtonA');
    });
  });
});
