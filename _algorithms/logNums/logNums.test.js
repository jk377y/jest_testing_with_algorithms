const logNums = require('./logNums');

test('generate array of numbers from 1 to 4', () => {
    expect(logNums(4)).toEqual([1, 2, 3, 4]);
});

test('generate array of numbers from 1 to 10', () => {
    expect(logNums(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});