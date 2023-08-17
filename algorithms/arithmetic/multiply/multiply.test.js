const product = require('./multiply');

test('product of 2 and 6 is 12', () => {
	expect(product(2, 6)).toBe(12);
});

test('product of 2 and 0 is 0', () => {
	expect(product(2, 0)).toBe(0);
});

test('product of 2 and -6 is -12', () => {
	expect(product(2, -6)).toBe(-12);
});

test('product of 5 and NaN is NaN', () => {
	expect(product(5, NaN)).toEqual(NaN);
});

test('product of 5 and Infinity is Infinity', () => {
	expect(product(5, Infinity)).toEqual(Infinity);
});
