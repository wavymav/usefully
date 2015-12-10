import {expect} from 'chai';
import {confirmEnd} from '../src/index';

describe('confirmEnd()', function() {

  it('should throw Error if first param is not a string', () => {
    const num = 3245;
    const str = 'car';
    const bool = true;
    const bool2 = 'true';
    const emp = null;
    const arr = [];
    const obj = {};

    expect(() => confirmEnd(num, str)).to.throw(Error);
    expect(() => confirmEnd(bool, bool2)).to.throw(Error);
    expect(() => confirmEnd(emp, arr)).to.throw(Error);
    expect(() => confirmEnd(arr, bool2)).to.throw(Error);
    expect(() => confirmEnd(obj, bool2)).to.throw(Error);
  });

  it('should throw Error if second param is not a string', () => {
    const num = 3245;
    const str = 'car';
    const bool = true;
    const bool2 = 'true';
    const emp = null;
    const arr = [];
    const obj = {};

    expect(() => confirmEnd(str, emp)).to.throw(Error);
    expect(() => confirmEnd(bool, bool)).to.throw(Error);
    expect(() => confirmEnd(bool2, arr)).to.throw(Error);
    expect(() => confirmEnd(str, obj)).to.throw(Error);
    expect(() => confirmEnd(str, bool)).to.throw(Error);
  });

  it('should return true', () => {
    const str1 = 'Bastian';
    const target1 = 'n';
    const str2 = 'He has to give me a new name';
    const target2 = 'name';
    const str3 = 'He has to give me a new name';
    const target3 = 'me';

    expect(confirmEnd(str1, target1)).to.be.true;
    expect(confirmEnd(str2, target2)).to.be.true;
    expect(confirmEnd(str3, target3)).to.be.true;
  });

  it('should return false', () => {
    const str1 = 'Connor';
    const target1 = 'n';
    const str2 = 'Walking on water and developing software from a specification are easy if both are frozen';
    const target2 = 'specification';
    const str3 = 'He has to give me a new name';
    const target3 = 'na';
    const str4 = 'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing';
    const target4 = 'mountain';

    expect(confirmEnd(str1, target1)).to.be.false;
    expect(confirmEnd(str2, target2)).to.be.false;
    expect(confirmEnd(str3, target3)).to.be.false;
    expect(confirmEnd(str4, target4)).to.be.false;
  })

});
