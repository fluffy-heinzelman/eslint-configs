module.exports = {
    rules: {
        // enforce linebreaks after opening and before closing array brackets
        // @fixable
        // 'array-bracket-newline': ['off', 'consistent'],

        // enforce consistent spacing inside array brackets
        // @fixable
        // 'array-bracket-spacing': ['error', 'never'],

        // enforce line breaks after each array element
        // @fixable
        // 'array-element-newline': ['off', { multiline: true, minItems: 3 }],

        // disallow or enforce spaces inside of blocks after opening block and before closing block
        // @fixable
        // 'block-spacing': ['error', 'always'],

        // enforce consistent brace style for blocks
        // @fixable
        // @airbnb-delta
        'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],

        // enforce camelcase naming convention
        // camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

        // enforce or disallow capitalization of the first letter of a comment
        // @fixable
        // 'capitalized-comments': ['off', 'never', {
        //     line: {
        //         ignorePattern: '.*',
        //         ignoreInlineComments: true,
        //         ignoreConsecutiveComments: true,
        //     },
        //     block: {
        //         ignorePattern: '.*',
        //         ignoreInlineComments: true,
        //         ignoreConsecutiveComments: true,
        //     },
        // }],

        // require or disallow trailing commas
        // @fixable
        // @airbnb-delta
        'comma-dangle': ['error', 'never'],

        // enforce consistent spacing before and after commas
        // @fixable
        // 'comma-spacing': ['error', { before: false, after: true }],

        // enforce consistent comma style
        // @fixable
        // 'comma-style': ['error', 'last', {
        //     exceptions: {
        //         ArrayExpression: false,
        //         ArrayPattern: false,
        //         ArrowFunctionExpression: false,
        //         CallExpression: false,
        //         FunctionDeclaration: false,
        //         FunctionExpression: false,
        //         ImportDeclaration: false,
        //         ObjectExpression: false,
        //         ObjectPattern: false,
        //         VariableDeclaration: false,
        //         NewExpression: false,
        //     }
        // }],

        // enforce consistent spacing inside computed property brackets
        // @fixable
        // 'computed-property-spacing': ['error', 'never'],

        // enforce consistent naming when capturing the current execution context
        // 'consistent-this': 'off',

        // require or disallow newline at the end of files
        // @fixable
        // 'eol-last': ['error', 'always'],

        // require or disallow spacing between function identifiers and their invocations
        // @fixable
        // 'func-call-spacing': ['error', 'never'],

        // require function names to match the name of the variable or property to which they are assigned
        // 'func-name-matching': ['off', 'always', {
        //     includeCommonJSModuleExports: false,
        //     considerPropertyDescriptor: true,
        // }],

        // require or disallow named `function` expressions
        // 'func-names': 'warn',

        // enforce the consistent use of either `function` declarations or expressions
        // 'func-style': ['off', 'expression'],

        // enforce line breaks between arguments of a function call
        // @fixable
        // 'function-call-argument-newline': ['off', 'consistent'],

        // enforce consistent line breaks inside function parentheses
        // @fixable
        // 'function-paren-newline': ['error', 'consistent'],

        // disallow specified identifiers
        // 'id-blacklist': 'off',

        // enforce minimum and maximum identifier lengths
        // 'id-length': 'off',

        // require identifiers to match a specified regular expression
        // 'id-match': 'off',

        // enforce the location of arrow function bodies
        // @fixable
        // 'implicit-arrow-linebreak': ['error', 'beside'],

        // enforce consistent indentation
        // @fixable
        // @airbnb-delta
        indent: ['error', 4, {
            SwitchCase: 1,
            flatTernaryExpressions: true
        }],

        // enforce the consistent use of either double or single quotes in JSX attributes
        // @fixable
        // 'jsx-quotes': ['off', 'prefer-double'],

        // enforce consistent spacing between keys and values in object literal properties
        // @fixable
        // 'key-spacing': ['error', { beforeColon: false, afterColon: true }],

        // enforce consistent spacing before and after keywords
        // @fixable
        // 'keyword-spacing': ['error', {
        //     before: true,
        //     after: true,
        //     overrides: {
        //         return: { after: true },
        //         throw: { after: true },
        //         case: { after: true }
        //     }
        // }],

        // enforce position of line comments
        // 'line-comment-position': ['off', {
        //     position: 'above',
        //     ignorePattern: '',
        //     applyDefaultPatterns: true,
        // }],

        // enforce consistent linebreak style
        // @fixable
        // 'linebreak-style': ['error', 'unix'],

        // require empty lines around comments
        // @fixable
        // 'lines-around-comment': 'off',

        // require or disallow an empty line between class members
        // @fixable
        // @airbnb-delta
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        // enforce a maximum depth that blocks can be nested
        // 'max-depth': ['off', 4],

        // enforce a maximum line length
        // @airbnb-delta
        'max-len': ['error', {
            code: 120,
            ignoreUrls: true,
            ignoreRegExpLiterals: true
        }],

        // enforce a maximum number of lines per file
        // 'max-lines': ['off', {
        //     max: 300,
        //     skipBlankLines: true,
        //     skipComments: true
        // }],

        // enforce a maximum number of line of code in a function
        // 'max-lines-per-function': ['off', {
        //     max: 50,
        //     skipBlankLines: true,
        //     skipComments: true,
        //     IIFEs: true,
        // }],

        // enforce a maximum depth that callbacks can be nested
        // 'max-nested-callbacks': 'off',

        // enforce a maximum number of parameters in function definitions
        // 'max-params': ['off', 3],

        // enforce a maximum number of statements allowed in function blocks
        // 'max-statements': ['off', 10],

        // enforce a maximum number of statements allowed per line
        // 'max-statements-per-line': ['off', { max: 1 }],

        // enforce a particular style for multiline comments
        // @fixable
        // 'multiline-comment-style': ['off', 'starred-block'],

        // enforce newlines between operands of ternary expressions
        // 'multiline-ternary': ['off', 'never'],

        // require constructor names to begin with a capital letter
        // 'new-cap': ['error', {
        //     newIsCap: true,
        //     newIsCapExceptions: [],
        //     capIsNew: false,
        //     capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
        // }],

        // enforce or disallow parentheses when invoking a constructor with no arguments
        // @fixable
        // 'new-parens': 'error',

        // require a newline after each call in a method chain
        // @fixable
        // 'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

        // disallow `Array` constructors
        // 'no-array-constructor': 'error',

        // disallow bitwise operators
        // 'no-bitwise': 'error',

        // disallow `continue` statements
        // 'no-continue': 'error',

        // disallow inline comments after code
        // 'no-inline-comments': 'off',

        // disallow `if` statements as the only statement in `else` blocks
        // @fixable
        // 'no-lonely-if': 'error',

        // disallow mixed binary operators
        // 'no-mixed-operators': ['error', {
        //     groups: [
        //         ['%', '**'],
        //         ['%', '+'],
        //         ['%', '-'],
        //         ['%', '*'],
        //         ['%', '/'],
        //         ['/', '*'],
        //         ['&', '|', '<<', '>>', '>>>'],
        //         ['==', '!=', '===', '!=='],
        //         ['&&', '||'],
        //     ],
        //     allowSamePrecedence: false
        // }],

        // disallow mixed spaces and tabs for indentation
        // @recommended
        // 'no-mixed-spaces-and-tabs': 'error',

        // disallow use of chained assignment expressions
        // 'no-multi-assign': ['error'],

        // disallow multiple empty lines
        // @fixable
        // 'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 0 }],

        // disallow negated conditions
        // 'no-negated-condition': 'off',

        // disallow nested ternary expressions
        // @airbnb-delta
        'no-nested-ternary': 'off',

        // disallow `Object` constructors
        // 'no-new-object': 'error',

        // disallow the unary operators `++` and `--`
        // @airbnb-delta
        'no-plusplus': 'off',

        // disallow specified syntax
        // 'no-restricted-syntax': [
        //     'error',
        //     {
        //         selector: 'ForInStatement',
        //         message: [
        //             'for..in loops iterate over the entire prototype chain, which is virtually',
        //             'never what you want. Use Object.{keys,values,entries}, and iterate over',
        //             'the resulting array.'
        //         ].join(' '),
        //     },
        //     {
        //         selector: 'ForOfStatement',
        //         message: [
        //             'iterators/generators require regenerator-runtime, which is too heavyweight',
        //             'for this guide to allow them. Separately, loops should be avoided in favor'
        //             'of array iterations.'
        //         ].join(' '),
        //     },
        //     {
        //         selector: 'LabeledStatement',
        //         message: [
        //             'Labels are a form of GOTO; using them makes code confusing and hard to',
        //             'maintain and understand.'
        //         ]
        //     },
        //     {
        //         selector: 'WithStatement',
        //         message: [
        //             '`with` is disallowed in strict mode because it makes code impossible to',
        //             'predict and optimize.'
        //         ]
        //     },
        // ],

        // disallow all tabs
        // 'no-tabs': 'error',

        // disallow ternary operators
        // 'no-ternary': 'off',

        // disallow trailing whitespace at the end of lines
        // note: just too annoying. in most cases whitespace is removed due to .editorconfig
        // trim_trailing_whitespace = true anyways.
        // @fixable
        // @airbnb-delta
        'no-trailing-spaces': 'off',

        // disallow dangling underscores in identifiers
        // 'no-underscore-dangle': ['error', {
        //     allow: [],
        //     allowAfterThis: false,
        //     allowAfterSuper: false,
        //     enforceInMethodNames: true,
        // }],

        // disallow ternary operators when simpler alternatives exist
        // @fixable
        // 'no-unneeded-ternary': ['error', { defaultAssignment: false }],

        // disallow whitespace before properties
        // @fixable
        // 'no-whitespace-before-property': 'error',

        // enforce the location of single-line statements
        // @fixable
        // 'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

        // enforce consistent line breaks inside braces
        // @fixable
        // @airbnb-delta
        'object-curly-newline': ['error', {
            ObjectExpression: { multiline: true, consistent: true },
            ObjectPattern: { multiline: true, consistent: true },
            ImportDeclaration: { multiline: true, consistent: true },
            ExportDeclaration: { multiline: true, consistent: true }
        }],

        // enforce consistent spacing inside braces
        // @fixable
        // 'object-curly-spacing': ['error', 'always'],

        // enforce placing object properties on separate lines
        // @fixable
        // 'object-property-newline': ['error', {
        //     allowAllPropertiesOnSameLine: true,
        // }],

        // enforce variables to be declared either together or separately in functions
        // @fixable
        // 'one-var': ['error', 'never'],

        // require or disallow newlines around variable declarations
        // @fixable
        // 'one-var-declaration-per-line': ['error', 'always'],

        // require or disallow assignment operator shorthand where possible
        // @fixable
        // 'operator-assignment': ['error', 'always'],

        // enforce consistent linebreak style for operators
        // @fixable
        // @airbnb-delta
        'operator-linebreak': ['error', 'after', { overrides: { '=': 'none' } }]

        // require or disallow padding within blocks
        // @fixable
        // 'padded-blocks': ['error', {
        //     blocks: 'never',
        //     classes: 'never',
        //     switches: 'never',
        // }, {
        //     allowSingleLineBlocks: true,
        // }],

        // require or disallow padding lines between statements
        // @fixable
        // 'padding-line-between-statements': 'off',

        // disallow the use of `Math.pow` in favor of the `**` operator
        // @fixable
        // 'prefer-exponentiation-operator': 'off',

        // disallow using Object.assign with an object literal as the first argument and prefer the use of
        // object spread instead
        // @fixable
        // 'prefer-object-spread': 'error',

        // require quotes around object literal property names
        // @fixable
        // 'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

        // enforce the consistent use of either backticks, double, or single quotes
        // @fixable
        // quotes: ['error', 'single', { avoidEscape: true }],

        // require or disallow semicolons instead of ASI
        // @fixable
        // semi: ['error', 'always'],

        // enforce consistent spacing before and after semicolons
        // @fixable
        // 'semi-spacing': ['error', { before: false, after: true }],

        // enforce location of semicolons
        // @fixable
        // 'semi-style': ['error', 'last'],

        // require object keys to be sorted
        // 'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

        // require variables within the same declaration block to be sorted
        // @fixable
        // 'sort-vars': 'off',

        // enforce consistent spacing before blocks
        // @fixable
        // 'space-before-blocks': 'error',

        // enforce consistent spacing before `function` definition opening parenthesis
        // @fixable
        // 'space-before-function-paren': ['error', {
        //     anonymous: 'always',
        //     named: 'never',
        //     asyncArrow: 'always'
        // }],

        // enforce consistent spacing inside parentheses
        // @fixable
        // 'space-in-parens': ['error', 'never'],

        // require spacing around infix operators
        // @fixable
        // 'space-infix-ops': 'error',

        // enforce consistent spacing before or after unary operators
        // @fixable
        // 'space-unary-ops': ['error', {
        //     words: true,
        //     nonwords: false,
        //     overrides: {
        //     },
        // }],

        // enforce consistent spacing after the `//` or `/*` in a comment
        // @fixable
        // 'spaced-comment': ['error', 'always', {
        //     line: {
        //         exceptions: ['-', '+'],
        //         markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
        //     },
        //     block: {
        //         exceptions: ['-', '+'],
        //         markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
        //         balanced: true,
        //     }
        // }],

        // enforce spacing around colons of switch statements
        // @fixable
        // 'switch-colon-spacing': ['error', { after: true, before: false }],

        // require or disallow spacing between template tags and their literals
        // @fixable
        // 'template-tag-spacing': ['error', 'never'],

        // require or disallow Unicode byte order mark (BOM)
        // @fixable
        // 'unicode-bom': ['error', 'never'],

        // require parenthesis around regex literals
        // @fixable
        // 'wrap-regex': 'off'
    }
};
