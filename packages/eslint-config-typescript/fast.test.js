const { validate } = require('eslint/lib/shared/config-validator');

describe('fast.js', () => {
    it('provides valid schema', () => {
        expect(() => { validate(require('./fast'), 'fast.js'); }).not.toThrow();
    });
});
