# @heinzelman-labs/eslint-config-base

A personal ESLint shareable config for ESNext projects based on [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base).

## References

This config ...
- extends [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) `14.1.0`.
- is compatible with ESLint `5.x`,  `6.x`,  `7.x`.

## Installation

### yarn 

```bash 
yarn add -D @heinzelman-labs/eslint-config-base
```

### npm 

```bash 
npm i -D @heinzelman-labs/eslint-config-base
```

## Usage

### Basic `.eslintrc.js`

```javascript 
module.exports = {
    extends: [
        '@heinzelman-labs/eslint-config-base'
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
eslint ./src --ext .js,.mjs
```

## Diff `eslint-config-airbnb-base`

### ESLint Rules

#### Possible Errors

No changes.

#### Best Practices

```diff 
  'no-unused-expressions': ['error', {
-     allowShortCircuit: false,
+     allowShortCircuit: true,
-     allowTernary: false,
+     allowTernary: true,
      allowTaggedTemplates: false,
  }],
  
- 'no-void': 'error',
+ 'no-void': 'off'
```

#### Strict Mode

No changes.

#### Variables

```diff 
- 'no-shadow': 'error',
+ 'no-shadow': 'off',
  
  'no-unused-vars': ['error', { 
      vars: 'all', 
-     args: 'after-used', 
+     args: 'none', 
      ignoreRestSiblings: true 
  }],
  
  'no-use-before-define': ['error', {
-     functions: true, 
+     functions: false, 
      classes: true, 
-     variables: false,
+     variables: true 
  }]
```

#### Node.js and CommonJS

No changes.

#### Stylistic Issues

```diff
- 'brace-style': ['error', '1tbs', { allowSingleLine: true }], 
+ 'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
  
- 'comma-dangle': ['error', {
-     arrays: 'always-multiline',
-     objects: 'always-multiline',
-     imports: 'always-multiline',
-     exports: 'always-multiline',
-     functions: 'always-multiline',
- }],
+ 'comma-dangle': ['error', 'never'],
  
- indent: ['error', 2, {
+ indent: ['error', 4, {
      SwitchCase: 1,
-     VariableDeclarator: 1,
-     outerIIFEBody: 1,
-     FunctionDeclaration: {
-         parameters: 1,
-         body: 1
-     },
-     FunctionExpression: {
-         parameters: 1,
-         body: 1
-     },
-     CallExpression: {
-         arguments: 1
-     },
-     ArrayExpression: 1,
-     ObjectExpression: 1,
-     ImportDeclaration: 1,
-     flatTernaryExpressions: false,
+     flatTernaryExpressions: true,
-     ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
-     ignoreComments: false
  }],
  
 'lines-between-class-members': ['error', 'always', { 
-     exceptAfterSingleLine: false 
+     exceptAfterSingleLine: true 
 }],
  
- 'max-len': ['error', 100, 2, {
+ 'max-len': ['error', {
+     code: 120,
      ignoreUrls: true,
-     ignoreComments: false,
      ignoreRegExpLiterals: true,
-     ignoreStrings: true,
-     ignoreTemplateLiterals: true,
}],
  
- 'no-nested-ternary': 'error',
+ 'no-nested-ternary': 'off',
  
- 'no-plusplus': 'error',
+ 'no-plusplus': 'off',
  
- 'no-trailing-spaces': ['error', {
-     skipBlankLines: false,
-     ignoreComments: false,
- }],
+ 'no-trailing-spaces': 'off',
  
  'object-curly-newline': ['error', {
      ObjectExpression: {
-         minProperties: 4, 
          multiline: true, 
          consistent: true
      },
      ObjectPattern: {
-         minProperties: 4, 
          multiline: true, 
          consistent: true
      },
      ImportDeclaration: {
-         minProperties: 4, 
          multiline: true, 
          consistent: true
      },
      ExportDeclaration: {
-         minProperties: 4, 
          multiline: true, 
          consistent: true
      },
  }],
  
- 'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],
+ 'operator-linebreak': ['error', 'after', { overrides: { '=': 'none' } }],
```

#### ECMAScript 6

```diff 
- 'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: false }],
+ 'arrow-body-style': 'off',
  
- 'arrow-parens': ['error', 'always'],
+ 'arrow-parens': 'off',
```

### Import/Export Syntax Rules

```diff 
  'import/extensions': ['error', 'ignorePackages', {
      mjs: 'never',
      js: 'never',
      jsx: 'never',
+     ts: 'never',
+     tsx: 'never'
  }],
```
