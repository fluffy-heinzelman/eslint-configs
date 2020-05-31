const { validate } = require('eslint/lib/shared/config-validator');

describe('react-a11y.js', () => {
    it('provides valid schema', () => {
        expect(() => { validate(require('./react-a11y'), 'react-a11y.js'); }).not.toThrow();
    });
});
