// const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
    rules: {
        // require or disallow initialization in variable declarations
        // 'init-declarations': 'off',

        // disallow deleting variables
        // @recommended
        // 'no-delete-var': 'error',

        // disallow labels that share a name with a variable
        // 'no-label-var': 'error',

        // disallow specified global variables
        // 'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),

        // disallow variable declarations from shadowing variables declared in the outer scope
        // @airbnb-delta
        'no-shadow': 'off',

        // disallow identifiers from shadowing restricted names
        // @recommended
        // 'no-shadow-restricted-names': 'error',

        // disallow the use of undeclared variables unless mentioned in `/*global */` comments
        // @recommended
        // 'no-undef': 'error',

        // disallow initializing variables to `undefined`
        // @fixable
        // 'no-undef-init': 'error',

        // disallow the use of `undefined` as an identifier
        // 'no-undefined': 'off',

        // disallow unused variables
        // @recommended
        'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],

        // disallow the use of variables before they are defined
        // @airbnb-delta
        'no-use-before-define': ['error', { functions: false, classes: true, variables: false }]
    }
};
