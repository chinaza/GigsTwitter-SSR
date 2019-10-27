module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/require-prop-types': 'off',
    quotes: ['warn', 'single'],
    'no-undef': 'error',
    'prefer-arrow-callback': 'warn',
    'no-var': 'warn',
    'no-const-assign': 'error',
    'block-scoped-var': 'error',
    'no-unreachable': 'error',
    'no-unused-expressions': 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: 'next|Sequelize' }],
    'no-redeclare': 'error',
    'vars-on-top': 'error',
    strict: 'error',
    'prefer-const': 'error',
    'no-useless-concat': 'warn',
    'no-use-before-define': 'error',
    'no-console': 'off',
    'no-debugger': 'off'
  }
}
