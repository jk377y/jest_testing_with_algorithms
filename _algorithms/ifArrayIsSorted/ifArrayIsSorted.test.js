const ifArrayIsSorted = require('./ifArrayIsSorted');

test('Check if array is sorted', () => {
	expect(ifArrayIsSorted([1, 2, 3, 4, 5])).toBe(true);
	expect(ifArrayIsSorted([5, 4, 3, 2, 1])).toBe(false);
});
