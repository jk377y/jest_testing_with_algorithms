const logEvenOrOdd = require('./logEvenOrOdd');

test('logEvenOrOdd of 2 is even', () => {
    expect(logEvenOrOdd(2)).toBe('even');
});

test('logEvenOrOdd of 3 is odd', () => {
    expect(logEvenOrOdd(3)).toBe('odd');
});