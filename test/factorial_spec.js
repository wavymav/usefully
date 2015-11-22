import {expect} from 'chai';
import {factorial} from '../src/index';

describe('factorial()', () => {

  it('should return undefined', () => {
    const str = '5';
    const bool = true;
    const emp = null;
    const arr = [];
    const obj = {};

    expect(factorial(str)).to.be.undefined;
    expect(factorial(bool)).to.be.undefined;
    expect(factorial(emp)).to.be.undefined;
    expect(factorial(arr)).to.be.undefined;
    expect(factorial(obj)).to.be.undefined;
  });

  it('should return 120', () => {
    const num = 5;
    expect(factorial(num)).to.equal(120);
  });

  it('should return 3628800', () => {
    const num = 10
    expect(factorial(num)).to.equal(3628800);
  });

  it('should return 2432902008176640000', () => {
    const num = 20;
    expect(factorial(num)).to.equal(2432902008176640000);
  });

  it('should return 1', () => {
    const num = 0;
    expect(factorial(num)).to.equal(1);
  });

  it('should return 1', () => {
    const num = 1;
    expect(factorial(num)).to.equal(1);
  });

});
