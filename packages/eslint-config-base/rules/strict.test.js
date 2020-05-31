const { validate } = require('eslint/lib/shared/config-validator');

describe('strict.js', () => {
    it('provides valid schema', () => {
        expect(() => { validate(require('./strict'), 'strict.js'); }).not.toThrow();
    });
});
