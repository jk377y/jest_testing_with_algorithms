const maxValueInArray = require('./maxValueInArray');

test('Find maximum value in an array', () => {
	expect(maxValueInArray([1, 5, 3, 9, 2])).toBe(9);
	expect(maxValueInArray([-1, -5, -3, -9, -2])).toBe(-1);
});
