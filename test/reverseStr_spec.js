import {expect} from 'chai';
import {reverseStr} from '../src/index';

describe('reverseStr()', () => {

  it('should return undefined', () => {
    const num = 43;
    const bool = true;
    const emp = null;
    const arr = [];
    const obj = {};

    expect(reverseStr(num)).to.be.undefined;
    expect(reverseStr(bool)).to.be.undefined;
    expect(reverseStr(emp)).to.be.undefined;
    expect(reverseStr(arr)).to.be.undefined;
    expect(reverseStr(obj)).to.be.undefined;
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
