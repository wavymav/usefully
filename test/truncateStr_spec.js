import {expect} from 'chai';
import {truncateStr} from '../src/index';

describe('truncateStr()', function() {

  it('should throw Error if first param is not a string', () => {
    const num = 11;
    const bool = true;
    const bool2 = 'true';
    const emp = null;
    const arr = [];
    const obj = {};

    expect(() => truncateStr(num, num)).to.throw(Error);
    expect(() => truncateStr(bool, num)).to.throw(Error);
    expect(() => truncateStr(emp, num)).to.throw(Error);
    expect(() => truncateStr(arr, num)).to.throw(Error);
    expect(() => truncateStr(obj, num)).to.throw(Error);
  });

  it('should throw Error if second param is not a number', () => {
    const str = 'A-tisket a-tasket A green and yellow basket';
    const num = '3245';
    const bool = true;
    const bool2 = 'true';
    const emp = null;
    const arr = [];
    const obj = {};

    expect(() => truncateStr(str, emp)).to.throw(Error);
    expect(() => truncateStr(bool2, bool2)).to.throw(Error);
    expect(() => truncateStr(str, arr)).to.throw(Error);
    expect(() => truncateStr(bool2, bool)).to.throw(Error);
    expect(() => truncateStr(str, num)).to.throw(Error);
  });

  it('should return "A-tisket a-task..."', () => {
    const str = 'A-tisket a-tasket A green and yellow basket';
    const num = 15;

    expect(truncateStr(str, num)).to.equal('A-tisket a-task...');
  });

  it('should return "Peter Piper..."', () => {
    const str = 'Peter Piper picked a peck of pickled peppers';
    const num = 11;

    expect(truncateStr(str, num)).to.equal('Peter Piper...');
  });

  it('should return "A-tisket a-tasket A green and yellow basket"', () => {
    const str = 'A-tisket a-tasket A green and yellow basket';
    const num = str.length;

    expect(truncateStr(str, num)).to.equal('A-tisket a-tasket A green and yellow basket');
  });

  it('should return "A-tisket a-tasket A green and yellow basket"', () => {
    const str = 'A-tisket a-tasket A green and yellow basket';
    const num = str.length + 2;

    expect(truncateStr(str, num)).to.equal('A-tisket a-tasket A green and yellow basket');
  });

  it('should return "Absolutely Longer"', () => {
    const str = 'Absolutely Longer';
    const num = 0;

    expect(truncateStr(str, num)).to.equal('Absolutely Longer');
  });

  it('should return "Absolutely Longer"', () => {
    const str = 'Absolutely Longer';
    const num = - 1;

    expect(truncateStr(str, num)).to.equal('Absolutely Longer');
  });

  it('should return "Abs..."', () => {
    const str = 'Absolutely Longer';
    const num = 3;

    expect(truncateStr(str, num)).to.equal('Abs...');
  });

  it('should return "Absolutely Longer"', () => {
    const str = 'Absolutely Longer';
    const num = 40;

    expect(truncateStr(str, num)).to.equal('Absolutely Longer');
  });

});
