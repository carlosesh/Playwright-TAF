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
		'import/order': [
			'error',
			{
				//for more info: https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
				alphabetize: {
					order: 'asc',
				},
			},
		],
		'import/no-duplicates': ['error'],
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
			},
		],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/ban-types': 'error',
		'no-tabs': 0,
		'no-trailing-spaces': ['error', {
			skipBlankLines: false,
			ignoreComments: false,
		}],
		quotes: ['error', 'single', { avoidEscape: true }],
		indent: ['error', 'tab', { 'SwitchCase': 1}],
		'eol-last': ['error', 'always'],
		'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 1 }],
		'array-bracket-spacing': ['error', 'never'],
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		camelcase: ['error', { properties: 'never' }],
		'comma-spacing': ['error', { before: false, after: true }],
		'no-lonely-if': 'error',
		'no-else-return': 'error',
		'keyword-spacing': ['error'],
	},
	root: true,
};
