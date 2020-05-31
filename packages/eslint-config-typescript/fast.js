module.exports = {
    rules: {},
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                sourceType: 'module'
            },
            plugins: ['@typescript-eslint'],
            extends: [
                // Disables ESLint rules not compatible with TypeScript.
                'plugin:@typescript-eslint/eslint-recommended',
                // TypeScript recommended rules config.
                'plugin:@typescript-eslint/recommended'
            ],
            rules: {
                // React rules
                // -------------------------------------------------------------

                // Although this config does not actively extend
                // @heinzelman-labs/eslint-config-react, it adjusts some of its
                // rules because I often use it in tandem and some React rules
                // just don't make sense in a TypeScript context.

                // Can be turned off for TypeScript projects because TypeScript
                // does its own lookups.
                'import/no-unresolved': 'off',

                // Typically not using PropTypes in TypeScript projects, so only
                // error on components that have a propTypes block declared.
                'react/prop-types': ['error', {
                    ignore: [],
                    customValidators: [],
                    skipUndeclared: true
                }],

                // @typescript-eslint/recommended
                // -------------------------------------------------------------

                // Allow to provide inline callbacks to any function without
                // declaring explicit return types.
                '@typescript-eslint/explicit-function-return-type': ['error', {
                    allowExpressions: true
                }],

                // Allow React default import.
                '@typescript-eslint/no-unused-vars': ['error', {
                    varsIgnorePattern: '^React$',
                    args: 'none'
                }],

                // TODO: Watch issue https://github.com/typescript-eslint/typescript-eslint/issues/1856
                '@typescript-eslint/no-use-before-define': ['error', {
                    functions: false,
                    classes: true,
                    variables: false,
                    enums: true,
                    typedefs: false
                }]
            }
        }
    ]
};
