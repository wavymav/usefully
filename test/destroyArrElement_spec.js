import {expect} from 'chai';
import {destroyArrElement} from '../src/index';

describe('destroyArrElement()', function() {

  it('should throw Error if argument[0] is not an array', () => {
    expect(() => destroyArrElement({'0': 1, '1': 2}, 2, 4)).to.throw(Error);
    expect(() => destroyArrElement('string', 2, 4)).to.throw(Error);
    expect(() => destroyArrElement(false, 2, 4)).to.throw(Error);
    expect(() => destroyArrElement(null, 2, 4)).to.throw(Error);
    expect(() => destroyArrElement(12, 2, 4)).to.throw(Error);
    expect(() => destroyArrElement(undefined, 2, 4)).to.throw(Error);
  });

  it('should return [1, 1]', () => {
    expect(destroyArrElement([1, 2, 3, 1, 2, 3], 2, 3)).to.deep.equal([ 1, 1 ]);
  });

  it('should return [1, 5, 1]', () => {
    expect(destroyArrElement([1, 2, 3, 5, 1, 2, 3], 2, 3)).to.deep.equal([ 1, 5, 1 ]);
  });

  it('should return [1]', () => {
    expect(destroyArrElement([3, 5, 1, 2, 2], 2, 3, 5)).to.deep.equal([ 1 ]);
  });

  it('should return []', () => {
    expect(destroyArrElement([2, 3, 2, 3], 2, 3)).to.deep.equal([]);
  });

  it('should return ["hamburger"]', () => {
    expect(destroyArrElement(["tree", "hamburger", 53], "tree", 53)).to.deep.equal([ 'hamburger' ]);
  });

});
