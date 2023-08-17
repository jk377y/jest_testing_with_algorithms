const everyNumGreaterThan = require('./every');

test('Check if all numbers in an array are greater than a threshold', () => {
	const numbers1 = [10, 20, 30, 40, 50];
	const numbers2 = [5, 15, 25, 35, 45];

	expect(everyNumGreaterThan(numbers1, 9)).toBe(true);
	expect(everyNumGreaterThan(numbers2, 10)).toBe(false);
});
