module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	rules: {
		'react/jsx-filename-extension': [
			1,
			{ extensions: ['.js', '.jsx', '.tsx'] },
		],
		'comma-dangle': [
			2,
			{
				arrays: 'only-multiline',
				objects: 'only-multiline',
				imports: 'only-multiline',
				exports: 'only-multiline',
				functions: 'ignore',
			},
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-props-no-spreading': 0,
		'react/state-in-constructor': 0,
		'react/destructuring-assignment': 0,
		'react/no-access-state-in-setstate': 0,
	},
}
