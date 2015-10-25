var expect = require('chai').expect;
var factorialize = require('../src/lib/factorialize');

describe('factorialize', function() {
  describe('#factorial(num)', function() {

    it('should ruturn undefined if the arguement is NaN', function() {
      expect(factorialize.factorial('5')).to.be.undefined;
    });

    it('factorial() should return a undefined', function() {
      expect(factorialize.factorial()).to.be.undefined;
    });

    it('factorial(5) should return 120', function() {
      expect(factorialize.factorial(5)).to.equal(120);
    });

    it('factorial(10) should return 3628800', function() {
      expect(factorialize.factorial(10)).to.equal(3628800);
    });

    it('factorial(20) should return 2432902008176640000', function() {
      expect(factorialize.factorial(20)).to.equal(2432902008176640000);
    });

    it('factorial(0) should return 1', function() {
      expect(factorialize.factorial(0)).to.equal(1);
    });

    it('factorial(1) should return 1', function() {
      expect(factorialize.factorial(1)).to.equal(1);
    });
  });
});
