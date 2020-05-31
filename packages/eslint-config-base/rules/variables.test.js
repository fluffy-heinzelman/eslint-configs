const { validate } = require('eslint/lib/shared/config-validator');

describe('variables.js', () => {
    it('provides valid schema', () => {
        expect(() => { validate(require('./variables'), 'variables.js'); }).not.toThrow();
    });
});
