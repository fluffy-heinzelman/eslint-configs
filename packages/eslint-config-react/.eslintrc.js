module.exports = {
    extends: '../eslint-config-base/index.js',
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
