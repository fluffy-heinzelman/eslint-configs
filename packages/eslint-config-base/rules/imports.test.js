const { validate } = require('eslint/lib/shared/config-validator');

describe('imports.js', () => {
    it('provides valid schema', () => {
        expect(() => { validate(require('./imports'), 'imports.js'); }).not.toThrow();
    });
});
