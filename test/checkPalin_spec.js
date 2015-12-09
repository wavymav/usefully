import {expect} from 'chai';
import {checkPalin} from '../src/index'

describe('checkPalin()', function() {

  it('should return undefined', () => {
    const num = 3245;
    const bool = true;
    const emp = null;
    const arr = [];
    const obj = {};

    expect(() => checkPalin(num)).to.throw(Error);
    expect(() => checkPalin(bool)).to.throw(Error);
    expect(() => checkPalin(emp)).to.throw(Error);
    expect(() => checkPalin(arr)).to.throw(Error);
    expect(() => checkPalin(obj)).to.throw(Error);
  });

  it('should return true', () => {
    const str = 'eye';
    const str1 = 'race car';
    const str2 = 'A man, a plan, a canal. Panama';
    const str3 = 'never odd or even';
    const str4 = 'My age is 0, 0 si ega ym.';
    const str5 = '0_0 (: /-\ :) 0-0';

    expect(checkPalin(str)).to.be.true;
    expect(checkPalin(str1)).to.be.true;
    expect(checkPalin(str2)).to.be.true;
    expect(checkPalin(str3)).to.be.true;
    expect(checkPalin(str4)).to.be.true;
    expect(checkPalin(str5)).to.be.true;
  });

  it('should return false', () => {
    const str = 'not a palindrome';
    const str1 = 'nope';
    const str2 = 'nope';
    const str3 = 'almostomla';
    const str4 = '1 eye for of 1 eye.';

    expect(checkPalin(str)).to.be.false;
    expect(checkPalin(str1)).to.be.false;
    expect(checkPalin(str2)).to.be.false;
    expect(checkPalin(str3)).to.be.false;
    expect(checkPalin(str4)).to.be.false;
  });

});
