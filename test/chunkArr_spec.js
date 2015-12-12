import {expect} from 'chai';
import {chunkArr} from '../src/index';

describe('chunkArr()', function() {

  it('should throw Error if first param is not an array', () => {
    const num = 3245;
    const str = 'car';
    const bool = true;
    const bool2 = 'true';
    const emp = null;
    const arr = [];
    const obj = {};

    expect(() => chunkArr(num, num)).to.throw(Error);
    expect(() => chunkArr(bool, num)).to.throw(Error);
    expect(() => chunkArr(emp, num)).to.throw(Error);
    expect(() => chunkArr(str, num)).to.throw(Error);
    expect(() => chunkArr(obj, num)).to.throw(Error);
  });

  it('should throw Error if second param is not a number', () => {
    const num = 3245;
    const str = 'car';
    const bool = true;
    const bool2 = 'true';
    const emp = null;
    const arr = [];
    const obj = {};

    expect(() => chunkArr(arr, emp)).to.throw(Error);
    expect(() => chunkArr(arr, bool)).to.throw(Error);
    expect(() => chunkArr(arr, arr)).to.throw(Error);
    expect(() => chunkArr(arr, obj)).to.throw(Error);
    expect(() => chunkArr(arr, bool)).to.throw(Error);
  });

  it('should return [["a", "b"], ["c", "d"]]', () => {
    const arr = [ 'a', 'b', 'c', 'd' ];
    const size = 2;

    expect(chunkArr(arr, size)).to.deep.equal([["a", "b"], ["c", "d"]]);
  });

  it('should return [[0, 1, 2], [3, 4, 5]]', () => {
    const arr = [ 0, 1, 2, 3, 4, 5 ];
    const size = 3;

    expect(chunkArr(arr, size)).to.deep.equal([[0, 1, 2], [3, 4, 5]]);
  });

  it('should return [[0, 1], [2, 3], [4, 5]]', () => {
    const arr = [ 0, 1, 2, 3, 4, 5 ];
    const size = 2;

    expect(chunkArr(arr, size)).to.deep.equal([[0, 1], [2, 3], [4, 5]]);
  });

  it('should return [[0, 1, 2, 3], [4, 5]]', () => {
    const arr = [ 0, 1, 2, 3, 4, 5 ];
    const size = 4;

    expect(chunkArr(arr, size)).to.deep.equal([[0, 1, 2, 3], [4, 5]]);
  });

});
