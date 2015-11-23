import {expect} from 'chai';
import {largestSubVal} from '../src/index';

describe('largestSubVal()', () => {

  it('should return undefined', () => {
    const num = 43;
    const str = 'blah';
    const bool = true;
    const emp = null;
    const obj = {};

    expect(largestSubVal(num)).to.be.undefined;
    expect(largestSubVal(bool)).to.be.undefined;
    expect(largestSubVal(emp)).to.be.undefined;
    expect(largestSubVal(str)).to.be.undefined;
    expect(largestSubVal(obj)).to.be.undefined;
  });

  it('should return []', () => {
    const arrStr = ['1', '2', '4', '5'];
    const arrNum = [1, 2, 4, 5];
    const arrBool = [true, false, false];
    const arrStr2D = [
      ['1', '2', '4', '5'],
      ['1', '2', '4', '5'],
      ['1', '2', '4', '5']
    ];
    const arrNum2D = [
      [1, 2, 4, 5],
      [1, 2, 4, 5],
      [1, '2', 4, 5],
      [1, 2, 4, 5]
    ];
    const arrNum2D2 = [
      [1, 2, 4, 5],
      [1, 2, 4, 5],
      [1, true, 4, 5],
      [1, 2, 4, 5]
    ];
    const arrStr2DObj = [
      { a:'1', b:'2', c:'4', d:'5'},
      { a:'1', b:'2', c:'4', d:'5'},
      { a:'1', b:'2', c:'4', d:'5'},
    ];

    expect(largestSubVal(arrStr)).to.deep.equal([]);
    expect(largestSubVal(arrNum)).to.deep.equal([]);
    expect(largestSubVal(arrBool)).to.deep.equal([]);
    expect(largestSubVal(arrStr2D)).to.deep.equal([]);
    expect(largestSubVal(arrNum2D)).to.deep.equal([]);
    expect(largestSubVal(arrNum2D2)).to.deep.equal([]);
    expect(largestSubVal(arrStr2DObj)).to.deep.equal([]);
  });

  it('should return [27, 5, 39, 1001, 56]', () => {
    const arr = [
      [13, 27, 18, 26],
      [4, 5, 1],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1],
      [32, 4, 5, 56]
    ];

    expect(largestSubVal(arr)).to.deep.equal([27, 5, 39, 1001, 56]);
  });

  it('should return [4, 55, 39]', () => {
    const arr = [
      [4, 3],
      [13, 27, 18, 26, 55],
      [32, 35, 37, 39]
    ];

    expect(largestSubVal(arr)).to.deep.equal([4, 55, 39]);
  });

  it('should return [9, 35, 97, 1000000]', () => {
    const arr = [
      [4, 9, 1, 3],
      [13, 35, 26],
      [32, 35, 97, 39],
      [1000000, 1001, 857, 1]
    ];

    expect(largestSubVal(arr)).to.deep.equal([9, 35, 97, 1000000]);
  });

});
