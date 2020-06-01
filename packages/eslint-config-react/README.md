# @heinzelman-labs/eslint-config-react

[![npm version](https://img.shields.io/npm/v/@heinzelman-labs/eslint-config-react?style=flat-square)](https://www.npmjs.com/package/@heinzelman-labs/eslint-config-react)
[![total downloads](https://img.shields.io/npm/dt/@heinzelman-labs/eslint-config-react?style=flat-square)](https://www.npmjs.com/package/@heinzelman-labs/eslint-config-react)
[![monthly downloads](https://img.shields.io/npm/dm/@heinzelman-labs/eslint-config-react?style=flat-square)](https://www.npmjs.com/package/@heinzelman-labs/eslint-config-react)
[![license](https://img.shields.io/badge/license-MIT-brightgreen?style=flat-square)](https://www.npmjs.com/package/@heinzelman-labs/eslint-config-typescript)

A personal ESLint shareable config for React projects based on [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).

## References

This config ...

- extends [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) `18.1.0`.
- extends [`@heinzelman-labs/eslint-config-base`](https://gitlab.com/fluffy-heinzelman/eslint-configs/-/tree/master/packages/eslint-config-base).
- is compatible with ESLint `5.x`,  `6.x`,  `7.x`.

## Installation

### yarn 

```bash 
yarn add -D @heinzelman-labs/eslint-config-react
```

### npm 

```bash 
npm i -D @heinzelman-labs/eslint-config-react
```

## Usage

### Basic `.eslintrc.js`

```javascript 
module.exports = {
    extends: [
        '@heinzelman-labs/eslint-config-react'
    ],
    rules: {
        // Adjust rules ...
    },
    env: {
        // Environments as needed ...
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    }
};
```

### Mono-Repo `.eslintrc.js`

For mono-repos don't forget to add your package directories.

```javascript 
const { resolve } = require('path');

module.exports = {
    // ...
    rules: {
        'import/no-extraneous-dependencies': ['error', { 
            packageDir: [
                __dirname,
                resolve(__dirname, 'packages/foo'),
                resolve(__dirname, 'packages/bar')
            ]
        }]
    },
    // ...
};
```

### CLI

I would recommend to not use glob patterns or filenames, but to use directories to specify target files where possible. Then use the `--ext` option to define relevant file extensions. You may also use `.eslintignore` to exclude files from the result set as needed. This way ESLint will not complain if you end up not having a certain file type among your sources anymore, e.g. `.mjs`.

```bash
eslint ./src --ext .js,.mjs,.jsx
```

## Base Rule Optimizations

```diff
  'no-unused-vars': ['error', { 
+     varsIgnorePattern: '^React$',
      vars: 'all', 
      args: 'none', 
      ignoreRestSiblings: true 
  }],
```

## Diff `eslint-config-airbnb`

Note that unlike with `eslint-config-airbnb`, the rules for React hooks are integrated by default.

### React

```diff
- 'react/jsx-indent': ['error', 2],
+ 'react/jsx-indent': ['error', 4],
  
- 'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
+ 'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx']}],
  
- 'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
+ 'react/jsx-one-expression-per-line': 'off',
  
- 'react/jsx-fragments': ['error', 'syntax'],
+ 'react/jsx-fragments': 'off',
  
  'react/jsx-props-no-spreading': ['error', {
-     html: 'enforce',
+     html: 'ignore',
-     custom: 'enforce',
+     custom: 'ignore',
      exceptions: [],
  }]
```

### React a11y

No changes.

### React Hooks

No changes.

## License

[MIT License](LICENSE.md)
