const factorial = require('./factorial'); // Assuming you have a factorial module

describe('Factorial Calculation', () => {
  it('should calculate the factorial of a non-negative integer', () => {
    expect(factorial(5)).toBe(120);
  });

  it('should return 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });
});
