// https://github.com/bizon/eslint-config-xo-bizon

const rules = {
	'capitalized-comments': 'off',

	// Not smart enough
	'jsx-a11y/alt-text': 'off',

	// This reverts the "no null" decision from xo
	'@typescript-eslint/ban-types': 'off',

	// This would be nice in an ideal world, even warnings are too much
	'@typescript-eslint/naming-convention': 'off',

	// We prefer interfaces
	'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

	// These rules are too restrictive
	'@typescript-eslint/no-unsafe-argument': 'off',

	'@typescript-eslint/no-unsafe-assignment': 'off',
	'@typescript-eslint/no-unsafe-call': 'off',
	'@typescript-eslint/no-unsafe-member-access': 'off',
	'@typescript-eslint/no-unsafe-return': 'off',

	// Modules
	'import/first': 'error',
	'import/newline-after-import': 'error',
	'import/no-duplicates': 'error',
	'new-cap': 'off',
};

module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},

	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	extends: ['xo', 'next/core-web-vitals', 'prettier'],
	overrides: [
		{
			extends: ['xo', 'xo-typescript', 'next/core-web-vitals', 'prettier'],
			files: ['*.ts', '*.tsx'],
			rules,
		},
	],
	rules,
};
