const evenNumsInRange = require('./evenNums');

test('evenNums between 1 and 10', () => {
	expect(evenNumsInRange(1, 10)).toEqual([2, 4, 6, 8, 10]);
});

test('evenNums between 5 and 15', () => {
	expect(evenNumsInRange(5, 15)).toEqual([6, 8, 10, 12, 14]);
});
