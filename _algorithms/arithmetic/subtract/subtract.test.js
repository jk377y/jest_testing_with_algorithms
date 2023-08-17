const difference = require('./subtract');

test('difference between 10 and 4 is 6', () => {
	expect(difference(10, 4)).toBe(6);
});
