# @heinzelman-labs/eslint-config-typescript

A personal ESLint shareable config for TypeScript projects based on the [recommended rules](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json) defined by [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin).

TypeScript rules only apply to `.ts` and `.tsx` files so that this config also works for mixed JS/TS code bases.

*Please note that this config is not compatible with ESLint versions older than `6.x`!*

## References

At a minimum (using the `fast` config), this config extends the [recommended](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json) and [eslint-recommended](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts) config provided by `@typescript-eslint/eslint-plugin` `2.29.0`.

The default config additionally extends [recommended-requiring-type-checking](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.json).

This config is compatible with ESLint `6.x` and `7.x`, older versions are not supported.

## Installation

### yarn 

```bash 
yarn add -D @heinzelman-labs/eslint-config-typescript
```

### npm 

```bash 
npm i -D @heinzelman-labs/eslint-config-typescript
```

## Usage

### Basic `.eslintrc.js` With Type-Checking

The default config provided by `@heinzelman-labs/eslint-config-typescript` does not only extend from `@typescript-eslint/recommended` but also from `@typescript-eslint/recommended-requiring-type-checking`. These highly valuable rules require type information, thus you will need to add a `tsconfig.json` to your project directory.

```javascript 
module.exports = {
    extends: [
        // Typically either using base or react.
        '@heinzelman-labs/eslint-config-react',
        '@heinzelman-labs/eslint-config-typescript'
    ],
    rules: {
        // Adjust base/react rules ...
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                // Adjust typescript rules ...
            }
        }
    ],
    env: {
        // Environments as needed ...
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    }
};
```

### Basic `.eslintrc.js` Without Type-Checking

In order to only use fast feedback rules which operate purely based on syntax, extend from `@heinzelman-labs/eslint-config-typescript/fast`. This may come in handy when dealing with really large codebases or you feel that ESLint is slow when configured with your IDE.

```diff 
  module.exports = {
      extends: [
-         '@heinzelman-labs/eslint-config-typescript'
+         '@heinzelman-labs/eslint-config-typescript/fast'
      ]
  };
```

### CLI

I would recommend to not use glob patterns or filenames, but to use directories to specify target files where possible. Then use the `--ext` option to define relevant file extensions. You may also use `.eslintignore` to exclude files from the result set as needed. This way ESLint will not complain if you end up not having a certain file type among your sources anymore, e.g. `.js`.

```bash
eslint ./src --ext .js,.ts,.tsx
```

## React Rule Optimizations

Although this config does not actively extend [`@heinzelman-labs/eslint-config-react`](https://gitlab.com/fluffy-heinzelman/eslint-configs/-/tree/master/packages/eslint-config-react), it adjusts some of its rules because I personally often use it in tandem and some React rules just don't make sense in a TypeScript context. 

```javascript
// Can be turned off for TypeScript projects because TypeScript
// does its own lookups.
'import/no-unresolved': 'off',

// Typically not using PropTypes in TypeScript projects, so only error
// on components that have a propTypes block declared.
'react/prop-types': ['error', {
    ignore: [],
    customValidators: [],
    skipUndeclared: true
}]
```

## Diff `@typescript-eslint`

### `@typescript-eslint/eslint-recommended`

No changes.

### `@typescript-eslint/recommended`

```diff
- '@typescript-eslint/explicit-function-return-type': 'warn',
+ '@typescript-eslint/explicit-function-return-type': ['error', {
+      allowExpressions: true
+ }],
  
- '@typescript-eslint/no-unused-vars': 'warn',
+ '@typescript-eslint/no-unused-vars': ['error', {
+     varsIgnorePattern: '^React$',
+     args: 'none'
+ }],
  
- '@typescript-eslint/no-use-before-define': 'error',
+ '@typescript-eslint/no-use-before-define': ['error', {
+     functions: false,
+     classes: true,
+     variables: false,
+     enums: true,
+     typedefs: false
+ }]
```

### `@typescript-eslint/recommended-requiring-type-checking`

No changes.
