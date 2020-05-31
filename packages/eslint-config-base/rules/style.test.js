const { validate } = require('eslint/lib/shared/config-validator');

describe('style.js', () => {
    it('provides valid schema', () => {
        expect(() => { validate(require('./style'), 'style.js'); }).not.toThrow();
    });
});
