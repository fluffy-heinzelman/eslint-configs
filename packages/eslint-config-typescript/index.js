module.exports = {
    rules: {},
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: './tsconfig.json'
            },
            extends: [
                './fast',
                'plugin:@typescript-eslint/recommended-requiring-type-checking'
            ]
        }
    ]
};
