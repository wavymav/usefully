import {expect} from 'chai';
import {title} from '../src/index';

describe('title()', () => {

  it('should return undefined', () => {
    const num = 45;
    const bool = true;
    const emp = null;
    const arr = [];
    const obj = {};

    expect(title(num)).to.be.undefined;
    expect(title(bool)).to.be.undefined;
    expect(title(emp)).to.be.undefined;
    expect(title(arr)).to.be.undefined;
    expect(title(obj)).to.be.undefined;
  });

  it(`should return a string`, () => {
    const str = `I'm a little tea pot`;
    expect(title(str)).to.be.a('string');
  });

  it(`should return 'I'm A Little Tea Pot'`, () => {
    const str = `I'm a little tea pot`;
    expect(title(str)).to.equal(`I'm A Little Tea Pot`);
  });

  it(`should return 'Short And Stout'`, () => {
    const str = 'sHoRt AnD sToUt';
    expect(title(str)).to.equal('Short And Stout');
  });

  it(`should return 'Here Is My Handle Here Is My Spout'`, () => {
    const str = 'HERE IS MY HANDLE HERE IS MY SPOUT';
    expect(title(str)).to.equal('Here Is My Handle Here Is My Spout');
  });

});
