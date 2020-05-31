const { validate } = require('eslint/lib/shared/config-validator');

describe('index.js', () => {
    it('provides valid schema', () => {
        expect(() => { validate(require('./index'), 'index.js'); }).not.toThrow();
    });
});
