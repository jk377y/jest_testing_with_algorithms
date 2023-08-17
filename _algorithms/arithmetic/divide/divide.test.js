const divide = require('./divide');

test('divide of 15 divided by 3 is 5', () => {
	expect(divide(15, 3)).toBe(5);
});

test('division by zero throws an error', () => {
	expect(divide(10, 0)).toEqual(Infinity);
});

test('division by NaN is NaN', () => {
	expect(divide(10, NaN)).toEqual(NaN);
});
