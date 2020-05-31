module.exports = {
    rules: {
        // enforce getter and setter pairs in objects and classes
        // 'accessor-pairs': 'off',

        // enforce `return` statements in callbacks of array methods
        // 'array-callback-return': ['error', { allowImplicit: true }],

        // enforce the use of variables within the scope they are defined
        // 'block-scoped-var': 'error',

        // enforce that class methods utilize `this`
        // 'class-methods-use-this': ['error', {
        //     exceptMethods: [],
        // }],

        // enforce a maximum cyclomatic complexity allowed in a program
        // complexity: ['off', 11],

        // require `return` statements to either always or never specify values
        // 'consistent-return': 'error',

        // enforce consistent brace style for all control statements
        // @fixable
        // curly: ['error', 'multi-line'], // multiline

        // require `default` cases in `switch` statements
        // 'default-case': ['error', { commentPattern: '^no default$' }],

        // enforce default clauses in switch statements to be last
        // 'default-case-last': 'off',

        // enforce default parameters to be last
        // 'default-param-last': 'off',

        // enforce consistent newlines before and after dots
        // @fixable
        // 'dot-location': ['error', 'property'],

        // enforce dot notation whenever possible
        // @fixable
        // 'dot-notation': ['error', { allowKeywords: true }],

        // require the use of `===` and `!==`
        // @fixable
        // eqeqeq: ['error', 'always', { null: 'ignore' }],

        // require grouped accessor pairs in object literals and classes
        // 'grouped-accessor-pairs': 'off',

        // require `for-in` loops to include an `if` statement
        // 'guard-for-in': 'error',

        // enforce a maximum number of classes per file
        // 'max-classes-per-file': ['error', 1],

        // disallow the use of `alert`, `confirm`, and `prompt`
        // 'no-alert': 'warn',

        // disallow the use of `arguments.caller` or `arguments.callee`
        // 'no-caller': 'error',

        // disallow lexical declarations in case clauses
        // @recommended
        // 'no-case-declarations': 'error',

        // disallow returning value from constructor
        // 'no-constructor-return': 'off',

        // disallow division operators explicitly at the beginning of regular expressions
        // @fixable
        // 'no-div-regex': 'off',

        // disallow `else` blocks after `return` statements in `if` statements
        // @fixable
        // 'no-else-return': ['error', { allowElseIf: false }],

        // disallow empty functions
        // 'no-empty-function': ['error', {
        //     allow: [
        //         'arrowFunctions',
        //         'functions',
        //         'methods',
        //     ]
        // }],

        // disallow empty destructuring patterns
        // @recommended
        // 'no-empty-pattern': 'error',

        // disallow `null` comparisons without type-checking operators
        // 'no-eq-null': 'off',

        // disallow the use of `eval()`
        // 'no-eval': 'error',

        // disallow extending native types
        // 'no-extend-native': 'error',

        // disallow unnecessary calls to `.bind()`
        // @fixable
        // 'no-extra-bind': 'error',

        // disallow unnecessary labels
        // @fixable
        // 'no-extra-label': 'error',

        // disallow fallthrough of `case` statements
        // @recommended
        // 'no-fallthrough': 'error',

        // disallow leading or trailing decimal points in numeric literals
        // @fixable
        // 'no-floating-decimal': 'error',

        // disallow assignments to native objects or read-only global variables
        // @recommended
        // 'no-global-assign': ['error', { exceptions: [] }],

        // disallow shorthand type conversions
        // @fixable
        // 'no-implicit-coercion': ['off', {
        //     boolean: false,
        //     number: true,
        //     string: true,
        //     allow: [],
        // }],

        // disallow declarations in the global scope
        // 'no-implicit-globals': 'off',

        // disallow the use of `eval()`-like methods
        // 'no-implied-eval': 'error',

        // disallow `this` keywords outside of classes or class-like objects
        // 'no-invalid-this': 'off',

        // disallow the use of the `__iterator__` property
        // 'no-iterator': 'error',

        // disallow labeled statements
        // 'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

        // disallow unnecessary nested blocks
        // 'no-lone-blocks': 'error',

        // disallow function declarations that contain unsafe references inside loop statements
        // 'no-loop-func': 'error',

        // disallow magic numbers
        // 'no-magic-numbers': ['off', {
        //     ignore: [],
        //     ignoreArrayIndexes: true,
        //     enforceConst: true,
        //     detectObjects: false,
        // }],

        // disallow use of multiple spaces
        // @fixable
        // 'no-multi-spaces': ['error', {
        //     ignoreEOLComments: false,
        // }],

        // disallow use of multiline strings
        // 'no-multi-str': 'error',

        // disallow `new` operators outside of assignments or comparisons
        // 'no-new': 'error',

        // disallow `new` operators with the `Function` object
        // 'no-new-func': 'error',

        // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
        // 'no-new-wrappers': 'error',

        // disallow octal literals
        // @recommended
        // 'no-octal': 'error',

        // disallow octal escape sequences in string literals
        // 'no-octal-escape': 'error',

        // disallow reassigning `function` parameters
        // 'no-param-reassign': ['error', {
        //     props: true,
        //     ignorePropertyModificationsFor: [
        //         'acc', // for reduce accumulators
        //         'accumulator', // for reduce accumulators
        //         'e', // for e.returnValue
        //         'ctx', // for Koa routing
        //         'req', // for Express requests
        //         'request', // for Express requests
        //         'res', // for Express responses
        //         'response', // for Express responses
        //         '$scope', // for Angular 1 scopes
        //         'staticContext', // for ReactRouter context
        //     ]
        // }],

        // disallow the use of the `__proto__` property
        // 'no-proto': 'error',

        // disallow variable redeclaration
        // @recommended
        // 'no-redeclare': 'error',

        // disallow certain properties on certain objects
        // 'no-restricted-properties': ['error', {
        //     object: 'arguments',
        //     property: 'callee',
        //     message: 'arguments.callee is deprecated',
        // }, {
        //     object: 'global',
        //     property: 'isFinite',
        //     message: 'Please use Number.isFinite instead',
        // }, {
        //     object: 'self',
        //     property: 'isFinite',
        //     message: 'Please use Number.isFinite instead',
        // }, {
        //     object: 'window',
        //     property: 'isFinite',
        //     message: 'Please use Number.isFinite instead',
        // }, {
        //     object: 'global',
        //     property: 'isNaN',
        //     message: 'Please use Number.isNaN instead',
        // }, {
        //     object: 'self',
        //     property: 'isNaN',
        //     message: 'Please use Number.isNaN instead',
        // }, {
        //     object: 'window',
        //     property: 'isNaN',
        //     message: 'Please use Number.isNaN instead',
        // }, {
        //     property: '__defineGetter__',
        //     message: 'Please use Object.defineProperty instead.',
        // }, {
        //     property: '__defineSetter__',
        //     message: 'Please use Object.defineProperty instead.',
        // }, {
        //     object: 'Math',
        //     property: 'pow',
        //     message: 'Use the exponentiation operator (**) instead.',
        // }],

        // disallow assignment operators in `return` statements
        // 'no-return-assign': ['error', 'always'],

        // disallow unnecessary `return await`
        // 'no-return-await': 'error',

        // disallow `javascript:` urls
        // 'no-script-url': 'error',

        // disallow assignments where both sides are exactly the same
        // 'no-self-assign': ['error', {
        //     props: true,
        // }],

        // disallow comparisons where both sides are exactly the same
        // 'no-self-compare': 'error',

        // disallow comma operators
        // 'no-sequences': 'error',

        // disallow throwing literals as exceptions
        // 'no-throw-literal': 'error',

        // disallow unmodified loop conditions
        // 'no-unmodified-loop-condition': 'off',

        // disallow unused expressions
        // @airbnb-delta
        'no-unused-expressions': ['error', {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: false
        }],

        // disallow unused labels
        // @fixable
        // @recommended
        // 'no-unused-labels': 'error',

        // disallow unnecessary calls to `.call()` and `.apply()`
        // 'no-useless-call': 'off',

        // disallow unnecessary `catch` clauses
        // @recommended
        // 'no-useless-catch': 'error',

        // disallow unnecessary concatenation of literals or template literals
        // 'no-useless-concat': 'error',

        // disallow unnecessary escape characters
        // @recommended
        // 'no-useless-escape': 'error',

        // disallow redundant return statements
        // @fixable
        // 'no-useless-return': 'error',

        // disallow `void` operators
        // @airbnb-delta
        'no-void': 'off'

        // disallow specified warning terms in comments
        // 'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

        // disallow `with` statements
        // @recommended
        // 'no-with': 'error',

        // enforce using named capture group in regular expression
        // 'prefer-named-capture-group': 'off',

        // require using Error objects as Promise rejection reasons
        // 'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

        // disallow use of the `RegExp` constructor in favor of regular expression literals
        // 'prefer-regex-literals': 'off',

        // enforce the consistent use of the radix argument when using `parseInt()`
        // radix: 'error',

        // disallow async functions which have no `await` expression
        // 'require-await': 'off',

        // enforce the use of `u` flag on RegExp
        // 'require-unicode-regexp': 'off',

        // require `var` declarations be placed at the top of their containing scope
        // 'vars-on-top': 'error',

        // require parentheses around immediate `function` invocations
        // @fixable
        // 'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

        // require or disallow "Yoda" conditions
        // @fixable
        // yoda: 'error'
    }
};
