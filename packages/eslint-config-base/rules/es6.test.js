const { validate } = require('eslint/lib/shared/config-validator');

describe('es6.js', () => {
    it('provides valid schema', () => {
        expect(() => { validate(require('./es6'), 'es6.js'); }).not.toThrow();
    });
});
