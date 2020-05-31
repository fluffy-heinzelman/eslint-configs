module.exports = {
    extends: './index.js',
    overrides: [
        {
            files: '*.test.js',
            rules: {
                'global-require': 'off'
            }
        }
    ],
    env: {
        jest: true
    }
};
