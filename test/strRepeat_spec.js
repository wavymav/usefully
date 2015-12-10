import {expect} from 'chai';
import {strRepeat} from '../src/index';

describe('strRepeat()', function() {

  it('should throw Error if first param is not a string', () => {
    const num = 3245;
    const str = 'car';
    const bool = true;
    const bool2 = 'true';
    const emp = null;
    const arr = [];
    const obj = {};

    expect(() => strRepeat(num, num)).to.throw(Error);
    expect(() => strRepeat(bool, num)).to.throw(Error);
    expect(() => strRepeat(emp, num)).to.throw(Error);
    expect(() => strRepeat(arr, num)).to.throw(Error);
    expect(() => strRepeat(obj, num)).to.throw(Error);
  });

  it('should throw Error if second param is not a number', () => {
    const num = 3245;
    const str = 'car';
    const bool = true;
    const bool2 = 'true';
    const emp = null;
    const arr = [];
    const obj = {};

    expect(() => strRepeat(str, emp)).to.throw(Error);
    expect(() => strRepeat(bool2, bool)).to.throw(Error);
    expect(() => strRepeat(str, arr)).to.throw(Error);
    expect(() => strRepeat(bool2, str)).to.throw(Error);
    expect(() => strRepeat(str, obj)).to.throw(Error);
  });

  it('should return "***"', () => {
    const str = '*';
    const num = 3;

    expect(strRepeat(str, num)).to.equal('***');
  });

  it('should return "abcabcabc"', () => {
    const str = 'abc';
    const num = 3;

    expect(strRepeat(str, num)).to.equal('abcabcabc');
  });

  it('should return "abc"', () => {
    const str = 'abc';
    const num = 1;

    expect(strRepeat(str, num)).to.equal('abc');
  });

  it('should return "********"', () => {
    const str = '*';
    const num = 8;

    expect(strRepeat(str, num)).to.equal('********');
  });

  it('should return ""', () => {
    const str = 'abc';
    const num = -3;

    expect(strRepeat(str, num)).to.equal('');
  });

});
