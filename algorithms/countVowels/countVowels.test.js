const countVowels = require('./countVowels');

test('Count vowels in a string', () => {
	expect(countVowels('hello')).toBe(2);
	expect(countVowels('algorithm')).toBe(3);
	expect(countVowels('javascript')).toBe(3);
});
