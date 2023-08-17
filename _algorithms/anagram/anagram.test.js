const areAnagrams = require('./anagram');

test('Check if two strings are anagrams', () => {
	expect(areAnagrams('listen', 'silent')).toBe(true);
	expect(areAnagrams('hello', 'world')).toBe(false);
});
