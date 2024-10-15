const { test, expect } = require('@jest/globals');

test('prints Hello, World!', () => {
    console.log = jest.fn();
    require('../app');
    expect(console.log).toHaveBeenCalledWith("Hello, World!");
});