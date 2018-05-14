// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    'za/es'
  ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow underscoreDangle after this
    'no-underscore-dangle': ['error', { "allowAfterThis": true }],
    'no-nested-ternary': 'off',
    'consistent-return': 'off',
    'arrow-parens': 'off',
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
    'func-names': ["error", "never"],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
