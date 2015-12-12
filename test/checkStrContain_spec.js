import {expect} from 'chai';
import {checkStrContain} from '../src/index';

describe('checkStrContain()', function() {

  it('should throw Error if argument is not an Array', () => {
    const num = 3245;
    const str = 'car';
    const bool = true;
    const emp = null;
    const obj = {};

    expect(() => checkStrContain(num)).to.throw(Error);
    expect(() => checkStrContain(bool)).to.throw(Error);
    expect(() => checkStrContain(emp)).to.throw(Error);
    expect(() => checkStrContain(str)).to.throw(Error);
    expect(() => checkStrContain(obj)).to.throw(Error);
  });

  it('should throw Error if both Array elements are not strings', () => {
    const arr1 = ["true", true];
    const arr2 = [122, "122"];
    const arr3 = ["five", 5];
    const arr4 = ["true", ["true"]];
    const arr5 = [null, false];

    expect(() => checkStrContain(arr1)).to.throw(Error);
    expect(() => checkStrContain(arr2)).to.throw(Error);
    expect(() => checkStrContain(arr3)).to.throw(Error);
    expect(() => checkStrContain(arr4)).to.throw(Error);
    expect(() => checkStrContain(arr5)).to.throw(Error);
  });

  it('should throw Error if both Array elements are not strings', () => {
    const arr1 = ["true", true];
    const arr2 = [122, "122"];
    const arr3 = ["five", 5];
    const arr4 = ["true", ["true"]];
    const arr5 = [null, false];

    expect(() => checkStrContain(arr1)).to.throw(Error);
    expect(() => checkStrContain(arr2)).to.throw(Error);
    expect(() => checkStrContain(arr3)).to.throw(Error);
    expect(() => checkStrContain(arr4)).to.throw(Error);
    expect(() => checkStrContain(arr5)).to.throw(Error);
  });

  it('should throw Error if Array length is greater than 2', () => {
    const arr1 = ["True", "true", "true"];
    const arr2 = [122, "122", 12];
    const arr3 = ["five", "Five", 'f'];

    expect(() => checkStrContain(arr1)).to.throw(Error);
    expect(() => checkStrContain(arr2)).to.throw(Error);
    expect(() => checkStrContain(arr3)).to.throw(Error);
  });

  it('should return false', () => {
    const arr = [ 'hello', 'hey' ];

    expect(checkStrContain(arr)).to.be.false;
  });

  it('should return true', () => {
    const arr = [ 'hello', 'Hello' ];

    expect(checkStrContain(arr)).to.be.true;
  });

  it('should return true', () => {
    const arr = [ 'zyxwvutsrqponmlkjihgfedcba', 'qrstu' ];

    expect(checkStrContain(arr)).to.be.true;
  });

  it('should return true', () => {
    const arr = [ 'Mary', 'Army' ];

    expect(checkStrContain(arr)).to.be.true;
  });

  it('should return true', () => {
    const arr = [ 'Mary', 'Aarmy' ];

    expect(checkStrContain(arr)).to.be.true;
  });

  it('should return true', () => {
    const arr = [ 'Alien', 'line' ];

    expect(checkStrContain(arr)).to.be.true;
  });

  it('should return true', () => {
    const arr = [ 'floor', 'for' ];

    expect(checkStrContain(arr)).to.be.true;
  });

  it('should return false', () => {
    const arr = [ 'hello', 'neo' ];

    expect(checkStrContain(arr)).to.be.false;
  });

});
