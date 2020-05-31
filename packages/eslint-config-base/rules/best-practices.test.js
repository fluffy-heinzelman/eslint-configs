const { validate } = require('eslint/lib/shared/config-validator');

describe('best-practices.js', () => {
    it('provides valid schema', () => {
        expect(() => { validate(require('./best-practices', 'best-practices.js')); }).not.toThrow();
    });
});
