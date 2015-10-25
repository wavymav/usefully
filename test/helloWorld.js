var expect = require('chai').expect;
var helloWorld = require('../src/lib/helloWorld');

describe('helloWorld', function() {
  describe('#greet()', function() {

    var greeting = helloWorld.greet();

    it('should return "Hello World"', function() {
      expect(greeting).to.equal('Hello World');
    });

    it('should return not return "hello world"', function() {
      expect(greeting).to.not.equal('hello world');
    });
    
    it('should be a string', function() {
      expect(greeting).to.be.a('string');
    });
  });
});
