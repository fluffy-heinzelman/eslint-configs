module.exports = {
    rules: {
        // require braces around arrow function bodies
        // @fixable
        // @airbnb-delta
        'arrow-body-style': 'off',

        // require parentheses around arrow function arguments
        // @fixable
        // @airbnb-delta
        'arrow-parens': 'off'

        // enforce consistent spacing before and after the arrow in arrow functions
        // @fixable
        // 'arrow-spacing': ['error', { before: true, after: true }],

        // require `super()` calls in constructors
        // @recommended
        // 'constructor-super': 'error',

        // enforce consistent spacing around `*` operators in generator functions
        // @fixable
        // 'generator-star-spacing': ['error', { before: false, after: true }],

        // disallow reassigning class members
        // @recommended
        // 'no-class-assign': 'error',

        // disallow arrow functions where they could be confused with comparisons
        // @fixable
        // 'no-confusing-arrow': ['error', {
        //     allowParens: true
        // }],

        // disallow reassigning `const` variables
        // @recommended
        // 'no-const-assign': 'error',

        // disallow duplicate class members
        // @recommended
        // 'no-dupe-class-members': 'error',

        // disallow duplicate module imports
        // 'no-duplicate-imports': 'off',

        // disallow `new` operators with the `Symbol` object
        // @recommended
        // 'no-new-symbol': 'error',

        // disallow specified modules when loaded by `import`
        // 'no-restricted-imports': ['off', {
        //     paths: [],
        //     patterns: []
        // }],

        // disallow `this`/`super` before calling `super()` in constructors
        // @recommended
        // 'no-this-before-super': 'error',

        // disallow unnecessary computed property keys in objects and classes
        // @fixable
        // 'no-useless-computed-key': 'error',

        // disallow unnecessary constructors
        // 'no-useless-constructor': 'error',

        // disallow renaming import, export, and destructured assignments to the same name
        // @fixable
        // 'no-useless-rename': ['error', {
        //     ignoreDestructuring: false,
        //     ignoreImport: false,
        //     ignoreExport: false
        // }],

        // require `let` or `const` instead of `var`
        // @fixable
        // 'no-var': 'error',

        // require or disallow method and property shorthand syntax for object literals
        // @fixable
        // 'object-shorthand': ['error', 'always', {
        //     ignoreConstructors: false,
        //     avoidQuotes: true
        // }],

        // require using arrow functions for callbacks
        // @fixable
        // 'prefer-arrow-callback': ['error', {
        //     allowNamedFunctions: false,
        //     allowUnboundThis: true
        // }],

        // require `const` declarations for variables that are never reassigned after declared
        // @fixable
        // 'prefer-const': ['error', {
        //     destructuring: 'any',
        //     ignoreReadBeforeAssign: true
        // }],

        // require destructuring from arrays and/or objects
        // @fixable
        // 'prefer-destructuring': ['error', {
        //     VariableDeclarator: {
        //         array: false,
        //         object: true
        //     },
        //     AssignmentExpression: {
        //         array: true,
        //         object: false
        //     },
        // }, {
        //     enforceForRenamedProperties: false
        // }],

        // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
        // @fixable
        // 'prefer-numeric-literals': 'error',

        // require rest parameters instead of `arguments`
        // 'prefer-rest-params': 'error',

        // require spread operators instead of `.apply()`
        // 'prefer-spread': 'error',

        // require template literals instead of string concatenation
        // @fixable
        // 'prefer-template': 'error',

        // require generator functions to contain `yield`
        // @recommended
        // 'require-yield': 'error',

        // enforce spacing between rest and spread operators and their expressions
        // @fixable
        // 'rest-spread-spacing': ['error', 'never'],

        // enforce sorted import declarations within modules
        // @fixable
        // 'sort-imports': ['off', {
        //     ignoreCase: false,
        //     ignoreDeclarationSort: false,
        //     ignoreMemberSort: false,
        //     memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        // }],

        // require symbol descriptions
        // 'symbol-description': 'error',

        // require or disallow spacing around embedded expressions of template strings
        // @fixable
        // 'template-curly-spacing': 'error',

        // require or disallow spacing around the `*` in `yield*` expressions
        // @fixable
        // 'yield-star-spacing': ['error', 'after']
    }
};
