import { expect } from 'chai';
import { arraySimpleCompare } from '../../src/arrayHandling.js';

describe('Arrays', () => {
  it('Should compare two arrays correctly', () => {
	const arrayOne = [1,5,8,1,0,9]
    const arrayTwo = [5,1,1,9,8,0]
    const isEqual = arraySimpleCompare(arrayOne, arrayTwo);
    
    expect(isEqual).to.equal(true);
  });
});
