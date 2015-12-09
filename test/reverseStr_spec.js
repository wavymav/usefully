import {expect} from 'chai';
import {reverseStr} from '../src/index';

describe('reverseStr()', () => {

  it('should throw Error', () => {
    const num = 43;
    const bool = true;
    const emp = null;
    const arr = [];
    const obj = {};

    expect(() => reverseStr(num)).to.throw(Error);
    expect(() => reverseStr(bool)).to.throw(Error);
    expect(() => reverseStr(emp)).to.throw(Error);
    expect(() => reverseStr(arr)).to.throw(Error);
    expect(() => reverseStr(obj)).to.throw(Error);
  });

  it('should return "olleh"', () => {
    const str = 'hello';
    expect(reverseStr(str)).to.equal('olleh');
  });

  it('should return "gnirtS rehtonA"', () => {
    const str = 'Another String';
    expect(reverseStr(str)).to.equal('gnirtS rehtonA');
  });

});
