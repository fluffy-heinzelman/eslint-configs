module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        './rules/best-practices',
        './rules/errors',
        './rules/es6',
        './rules/imports',
        './rules/node',
        './rules/strict',
        './rules/style',
        './rules/variables'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    settings: {
        'import/resolver': {
            node: {
                // Make ESLint resolve all files correctly. Keep in sync
                // with `import/extensions` rule.
                extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
                // Define ./jest as additional module directory.
                moduleDirectory: [
                    'node_modules',
                    'jest'
                ]
            }
        }
    },
    rules: {}

};
