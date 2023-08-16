const isPalidrome = require('./isPalidrome');

test('racecar returns true', () => {
    expect(isPalidrome('racecar')).toBe(true);
});

test('racecar going down highway returns false', () => {
    expect(isPalidrome('racecar going down highway')).toBe(false);
});