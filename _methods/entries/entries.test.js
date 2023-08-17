const keyValuePairs = require('./entries');

test('Create an array of key-value pairs using entries()', () => {
	const sampleObject = { name: 'John', age: 30, city: 'New York' };
    const result = keyValuePairs(sampleObject);
	const expected = [
		['name', 'John'],
		['age', 30],
		['city', 'New York'],
	];

	expect(result).toEqual(expected);
});
