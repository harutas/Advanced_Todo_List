module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    "plugin:import/errors",     // 追加
    "plugin:import/warnings",   // 追加
    "plugin:import/typescript",   // 追加
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier' //追加
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "prettier",
    "import"                    // 追加
  ],
  ignorePatterns: [
    '.eslintrc.js',
  ],
  rules: {
    'no-use-before-define': "off",
   "@typescript-eslint/no-use-before-define": ["error"], // "off"から["error"]
   'import/prefer-default-export': "off",
   'import/extensions': [
       'error',
       {
         js: 'never',
         jsx: 'never',
         ts: 'never',
         tsx: 'never',
       },
     ],
     'react/jsx-filename-extension': [
       'error',
       {
         extensions: ['.jsx', '.tsx'],
       },
     ],
     'react/react-in-jsx-scope': 'off',
     'no-void': [
       'error',
       {
         allowAsStatement: true,
       },
     ],
 },
 settings: {
   'import/resolver': {
     node: {
       paths: ['src'],
       extensions: ['.js', '.jsx', '.ts', '.tsx']
     },
   },
  },
};
