import {expect} from 'chai';
import {bounceFalse} from '../src/index';

describe('bounceFalse()', function() {

  it('should throw Error if argument is not an Array', () => {
    const num = 3245;
    const str = 'car';
    const bool = true;
    const emp = null;
    const obj = {};

    expect(() => bounceFalse(num)).to.throw(Error);
    expect(() => bounceFalse(bool)).to.throw(Error);
    expect(() => bounceFalse(emp)).to.throw(Error);
    expect(() => bounceFalse(str)).to.throw(Error);
    expect(() => bounceFalse(obj)).to.throw(Error);
  });

  it('should return [7, "ate", 9]', () => {
    const arr = [ 7, 'ate', '', false, 9 ];

    expect(bounceFalse(arr)).to.deep.equal([ 7, 'ate', 9 ]);
  });

  it('should return ["a", "b", "c"]', () => {
    const arr = [ 'a', 'b', 'c' ];

    expect(bounceFalse(arr)).to.deep.equal([ 'a', 'b', 'c' ]);
  });

  it('should return []', () => {
    const arr = [ false, null, 0, NaN, undefined, '' ];

    expect(bounceFalse(arr)).to.deep.equal([]);
  });

});
