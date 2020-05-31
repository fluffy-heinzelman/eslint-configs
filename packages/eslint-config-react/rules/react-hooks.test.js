const { validate } = require('eslint/lib/shared/config-validator');

describe('react-hooks.js', () => {
    it('provides valid schema', () => {
        expect(() => { validate(require('./react-hooks'), 'react-hooks.js'); }).not.toThrow();
    });
});
