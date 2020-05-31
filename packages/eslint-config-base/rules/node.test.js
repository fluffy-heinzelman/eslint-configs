const { validate } = require('eslint/lib/shared/config-validator');

describe('node.js', () => {
    it('provides valid schema', () => {
        expect(() => { validate(require('./node'), 'node.js'); }).not.toThrow();
    });
});
