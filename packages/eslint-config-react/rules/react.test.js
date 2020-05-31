const { validate } = require('eslint/lib/shared/config-validator');

describe('react.js', () => {
    it('provides valid schema', () => {
        expect(() => { validate(require('./react'), 'react.js'); }).not.toThrow();
    });
});
