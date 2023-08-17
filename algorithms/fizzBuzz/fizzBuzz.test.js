const fizzBuzz = require('./fizzBuzz');

describe('FizzBuzz Algorithm', () => {
  it('should replace multiples of 3 with "Fizz"', () => {
    expect(fizzBuzz(6)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz"]);
  });

  it('should replace multiples of 5 with "Buzz"', () => {
    expect(fizzBuzz(10)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]);
  });

  it('should replace multiples of both 3 and 5 with "FizzBuzz"', () => {
    expect(fizzBuzz(15)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
  });
});
