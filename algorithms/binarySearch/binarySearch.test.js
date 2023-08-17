const binarySearch = require('./binarySearch'); // Assuming you have a binarySearch module

describe('Binary Search', () => {
  it('should return the index of the target element in a sorted array', () => {
    const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
    expect(binarySearch(sortedArray, 23)).toBe(5);
  });

  it('should return -1 if the target element is not in the array', () => {
    const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
    expect(binarySearch(sortedArray, 7)).toBe(-1);
  });
});