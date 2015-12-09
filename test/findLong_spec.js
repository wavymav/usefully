import {expect} from 'chai';
import {findLong} from '../src/index';

describe('findLong()', () => {

  it('should throw Error', () => {
    const num = 3245;
    const bool = true;
    const emp = null;
    const arr = [];
    const obj = {};

    expect(() => findLong(num)).to.throw(Error);
    expect(() => findLong(bool)).to.throw(Error);
    expect(() => findLong(emp)).to.throw(Error);
    expect(() => findLong(arr)).to.throw(Error);
    expect(() => findLong(obj)).to.throw(Error);
  });

  it('should return a number', () => {
    const str = "The quick brown fox jumped over the lazy dog";
    expect(findLong(str)).to.be.a('number');
  });

  it('should return 6', () => {
    const str = "The quick brown fox jumped over the lazy dog";
    expect(findLong(str)).to.equal(6);
  });

  it('should return 5', () => {
    const str = "May the force be with you";
    expect(findLong(str)).to.equal(5);
  });

  it('hould return 6', () => {
    const str = "Google do a barrel roll";
    expect(findLong(str)).to.equal(6);
  });

  it('should return 8', () => {
    const str = "What is the average airspeed velocity of an unladen swallow";
    expect(findLong(str)).to.equal(8);
  });

  it('should return 19', () => {
    const str = "What if we try a super-long word such as otorhinolaryngology";
    expect(findLong(str)).to.equal(19);
  });
});
