/* global module */
module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		semi: ['error', 'always'],
		indent: ['error', 'tab', { 'SwitchCase': 1 }],
		'eol-last': ['error', 'always'],

		'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 1 }],
		'array-bracket-spacing': ['error', 'never'],
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		camelcase: ['error', { properties: 'never' }],
		'comma-spacing': ['error', { before: false, after: true }],
		'no-lonely-if': 'error',
		'no-else-return': 'error',
		'no-tabs': 0,
		'no-trailing-spaces': ['error', {
			skipBlankLines: false,
			ignoreComments: false,
		}],
		quotes: ['error', 'single', { avoidEscape: true }],
		'unicode-bom': ['error', 'never'],
		'object-curly-spacing': ['error', 'always'],
		'keyword-spacing': ['error'],
		'require-atomic-updates': 0,
		'no-unexpected-multiline': 0,
	},
	root: true,
};
