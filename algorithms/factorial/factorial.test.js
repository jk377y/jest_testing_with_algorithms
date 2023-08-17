const factorial = require('./factorial');

test('should calculate the factorial of a non-negative integer', () => {
    expect(factorial(5)).toBe(120);
  });

test('should return 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });
