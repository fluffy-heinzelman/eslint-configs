module.exports = {
    extends: [
        '@heinzelman-labs/eslint-config-base',
        'eslint-config-airbnb/rules/react',
        'eslint-config-airbnb/rules/react-a11y',
        'eslint-config-airbnb/rules/react-hooks',
        './rules/react',
        './rules/react-a11y',
        './rules/react-hooks'
    ].map(require.resolve),
    rules: {
        'no-unused-vars': ['error', {
            varsIgnorePattern: '^React$',
            vars: 'all',
            args: 'none',
            ignoreRestSiblings: true
        }]
    }
};
