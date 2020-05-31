const { validate } = require('eslint/lib/shared/config-validator');

describe('errors.js', () => {
    it('provides valid schema', () => {
        expect(() => { validate(require('./errors'), 'errors.js'); }).not.toThrow();
    });
});
