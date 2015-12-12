import {expect} from 'chai';
import {slashArr} from '../src/index';

describe('slashArr()', function() {

  it('should throw Error if first param is not an array', () => {
    const num = 3245;
    const str = 'car';
    const bool = true;
    const bool2 = 'true';
    const emp = null;
    const arr = [];
    const obj = {};

    expect(() => slashArr(num, num)).to.throw(Error);
    expect(() => slashArr(bool, num)).to.throw(Error);
    expect(() => slashArr(emp, num)).to.throw(Error);
    expect(() => slashArr(str, num)).to.throw(Error);
    expect(() => slashArr(obj, num)).to.throw(Error);
  });

  it('should throw Error if second param is not a number', () => {
    const num = 3245;
    const str = 'car';
    const bool = true;
    const bool2 = 'true';
    const emp = null;
    const arr = [];
    const obj = {};

    expect(() => slashArr(arr, emp)).to.throw(Error);
    expect(() => slashArr(arr, bool)).to.throw(Error);
    expect(() => slashArr(arr, arr)).to.throw(Error);
    expect(() => slashArr(arr, obj)).to.throw(Error);
    expect(() => slashArr(arr, bool)).to.throw(Error);
  });

  it('should return [3]', () => {
    const arr = [ 1, 2, 3 ];
    const size = 2;

    expect(slashArr(arr, size)).to.deep.equal([3]);
  });

  it('should return [1, 2, 3]', () => {
    const arr = [ 1, 2, 3 ];
    const size = 0;

    expect(slashArr(arr, size)).to.deep.equal([1, 2, 3]);
  });

  it('should return []', () => {
    const arr = [ 1, 2, 3 ];
    const size = 8;

    expect(slashArr(arr, size)).to.deep.equal([]);
  });

  it('should return []', () => {
    const arr = [ 1, 2, 3 ];
    const size = 4;

    expect(slashArr(arr, size)).to.deep.equal([]);
  });

});
