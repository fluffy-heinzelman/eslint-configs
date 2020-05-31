module.exports = {
    rules: {
        // enforce "for" loop update clause moving the counter in the right direction.
        // @recommended
        // 'for-direction': 'error',

        // enforce `return` statements in getters
        // @recommended
        // 'getter-return': ['error', { allowImplicit: true }],

        // disallow using an async function as a Promise executor
        // @recommended
        // 'no-async-promise-executor': 'error',

        // disallow `await` inside of loops
        // 'no-await-in-loop': 'error',

        // disallow comparing against -0
        // @recommended
        // 'no-compare-neg-zero': 'error',

        // disallow assignment operators in conditional expressions
        // @recommended
        // 'no-cond-assign': ['error', 'always'],

        // disallow the use of `console`
        // 'no-console': 'warn',

        // disallow constant expressions in conditions
        // @recommended
        // 'no-constant-condition': 'warn',

        // disallow control characters in regular expressions
        // @recommended
        // 'no-control-regex': 'error',

        // disallow the use of `debugger`
        // @recommended
        // 'no-debugger': 'error',

        // disallow duplicate arguments in `function` definitions
        // @recommended
        // 'no-dupe-args': 'error',

        // disallow duplicate conditions in if-else-if chains
        // @recommended
        // 'no-dupe-else-if': 'off',

        // disallow duplicate keys in object literals
        // @recommended
        // 'no-dupe-keys': 'error',

        // disallow duplicate case labels
        // @recommended
        // 'no-duplicate-case': 'error',

        // disallow empty block statements
        // @recommended
        // 'no-empty': 'error',

        // disallow empty character classes in regular expressions
        // @recommended
        // 'no-empty-character-class': 'error',

        // disallow reassigning exceptions in `catch` clauses
        // @recommended
        // 'no-ex-assign': 'error',

        // disallow unnecessary boolean casts
        // @fixable
        // @recommended
        // 'no-extra-boolean-cast': 'error',

        // disallow unnecessary parentheses
        // @fixable
        // 'no-extra-parens': ['off', 'all', {
        //     conditionalAssign: true,
        //     nestedBinaryExpressions: false,
        //     returnAssign: false,
        //     ignoreJSX: 'all', // delegate to eslint-plugin-react
        //     enforceForArrowConditionals: false,
        // }],

        // disallow unnecessary semicolons
        // @fixable
        // @recommended
        // 'no-extra-semi': 'error',

        // disallow reassigning `function` declarations
        // @recommended
        // 'no-func-assign': 'error',

        // disallow assigning to imported bindings
        // @recommended
        // 'no-import-assign': 'off',

        // disallow variable or `function` declarations in nested blocks
        // @recommended
        // 'no-inner-declarations': 'error',

        // disallow invalid regular expression strings in `RegExp` constructors
        // @recommended
        // 'no-invalid-regexp': 'error',

        // disallow irregular whitespace
        // @recommended
        // 'no-irregular-whitespace': 'error',

        // disallow characters which are made with multiple code points in character class syntax
        // @recommended
        // 'no-misleading-character-class': 'error',

        // disallow calling global object properties as functions
        // @recommended
        // 'no-obj-calls': 'error',

        // disallow calling some `Object.prototype` methods directly on objects
        // @recommended
        // 'no-prototype-builtins': 'error',

        // disallow multiple spaces in regular expressions
        // @fixable
        // @recommended
        // 'no-regex-spaces': 'error',

        // disallow returning values from setters
        // @recommended
        // 'no-setter-return': 'off',

        // disallow sparse arrays
        // @recommended
        // 'no-sparse-arrays': 'error',

        // disallow template literal placeholder syntax in regular strings
        // 'no-template-curly-in-string': 'error',

        // disallow confusing multiline expressions
        // @recommended
        // 'no-unexpected-multiline': 'error',

        // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
        // @recommended
        // 'no-unreachable': 'error',

        // disallow control flow statements in `finally` blocks
        // @recommended
        // 'no-unsafe-finally': 'error',

        // disallow negating the left operand of relational operators
        // @recommended
        // 'no-unsafe-negation': 'error',

        // disallow assignments that can lead to race conditions due to usage of `await` or `yield`
        // 'require-atomic-updates': 'off',

        // require calls to `isNaN()` when checking for `NaN`
        // @recommended
        // 'use-isnan': 'error',

        // enforce comparing `typeof` expressions against valid strings
        // @recommended
        // 'valid-typeof': ['error', { requireStringLiterals: true }]
    }
};
