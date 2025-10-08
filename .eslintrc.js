module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['n8n-nodes-base'],
	extends: ['plugin:n8n-nodes-base/recommended'],
	rules: {
		'n8n-nodes-base/node-param-description-missing-for-return-all': 'off',
		'n8n-nodes-base/node-class-description-inputs-wrong-regular-node': 'off',
	},
	ignorePatterns: ['node_modules/**', 'dist/**'],
}; 