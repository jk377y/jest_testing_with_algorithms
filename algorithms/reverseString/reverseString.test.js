const reverseString = require('./reverseString');

test('Reverse a string', () => {
	expect(reverseString('hello')).toBe('olleh');
	expect(reverseString('algorithm')).toBe('mhtirogla');
	expect(reverseString('racecar')).toBe('racecar');
});