const { basename } = require('path');
const { projects, ...baseConfig } = require('../../jest.config');
const pkg = require('./package.json');

const pkgDirName = basename(__dirname);

module.exports = {
    ...baseConfig,
    displayName: pkg.name,
    roots: [
        `<rootDir>/packages/${pkgDirName}`
    ]
};
