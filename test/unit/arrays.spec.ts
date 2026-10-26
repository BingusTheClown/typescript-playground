import { expect } from 'chai';
import { arraySimpleCompare } from '../../src/arrayHandling.js';

describe('Arrays', () => {
	it('Should compare two arrays correctly', () => {
		const arrayOne = [1,5,1,0,8,9];
		const arrayTwo = [5,1,1,9,8,0];
		const isEqual = arraySimpleCompare(arrayOne, arrayTwo);

		expect(isEqual).to.equal(true);
	});

	it('Should handle two empty arrays correctly', () => {
		const arrayOne:  number[] = [];
		const arrayTwo: number[] = [];
		const isEqual = arraySimpleCompare(arrayOne, arrayTwo);

		expect(isEqual).to.equal(true);
	});

	it('Should handle the second empty array being empty correctly', () => {
		const arrayOne = [5, 6, 3, 1, 2];
		const arrayTwo: number[] = [];
		const isEqual = arraySimpleCompare(arrayOne, arrayTwo);

	expect(isEqual).to.equal(false);
	});

	it ('Should handle the first array being empty correctly', () => {
		const arrayOne:  number[] = [];
		const arrayTwo = [5,1,1,9,8,0];
		const isEqual = arraySimpleCompare(arrayOne, arrayTwo);

		expect(isEqual).to.equal(false);
	});

	it ('Should handle two arrays of different correctly', () => {
		const arrayOne = [5,1,1,9,8,0,6,1,9];
		const arrayTwo = [5,1,1,9,8,0];
		const isEqual = arraySimpleCompare(arrayOne, arrayTwo);

		expect(isEqual).to.equal(false);
	});
});