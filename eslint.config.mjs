// @ts-check
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path'
import withNuxt from './.nuxt/eslint.config.mjs'
import eslint from '@eslint/js';
import masterCss from '@master/eslint-config-css'
import stylistic from '@stylistic/eslint-plugin';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import tsEslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';

// ESM 下自行构造 __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const typescriptEslintConfig = tsEslint.config(
    tsEslint.configs.eslintRecommended,
);

export default withNuxt(
    // Your custom configs here
    {
        name: 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**'],
    },
    masterCss,
    eslint.configs.recommended,
    stylistic.configs.recommended,
    {
        name: 'app/all-javascript-files-to-lint',
        files: ["**/*.{js,mjs,cjs}"],
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            // eslint:recommended
            // "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
            // Suggestions
            // 'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['info', 'warn', 'error'] }] : 'off',
            'prefer-arrow-callback': ['error'],
            '@master/css/class-order': ['warn'],
            '@master/css/class-validation': ['error'],
            '@master/css/class-collision': ['warn'],
            '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
            '@stylistic/indent': [
                'error',
                4,
                {
                    SwitchCase: 1,
                    FunctionDeclaration: { parameters: 'first' },
                    CallExpression: { arguments: 'first' },
                    ArrayExpression: 'first',
                    ObjectExpression: 'first',
                    ImportDeclaration: 'first',
                },
            ],
            '@stylistic/indent-binary-ops': ['error', 4],
            '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true, align: 'colon' }],
            '@stylistic/member-delimiter-style': ['error', {
                multiline: { delimiter: 'semi', requireLast: true },
                singleline: { delimiter: 'semi', requireLast: false },
                multilineDetection: 'brackets',
                overrides: {
                    interface: {
                        multiline: { delimiter: 'semi', requireLast: true },
                        singleline: { delimiter: 'comma', requireLast: false },
                    },
                },
            }],
            '@stylistic/no-multi-spaces': ['error', { ignoreEOLComments: true, exceptions: { ImportDeclaration: true, Property: true, VariableDeclarator: true } }],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/template-curly-spacing': ['error', 'always'],
        },
        languageOptions: {
            globals: {
            },
            parserOptions: {
                ecmaFeatures: {
                },
            },
        }
    },
    {
        ...json.configs.recommended,
        name: 'app/json-files-to-lint',
        files: ['*.json', '**/*.json'],
        plugins: {
            '@stylistic': stylistic,
        },
        language: 'json/json',
        rules: {
            'no-irregular-whitespace': ['off'],
            '@stylistic/indent': ['off'],
        },
    },
    {
        ...json.configs.recommended,
        name: 'app/jsonc-files-to-lint',
        files: ['*.jsonc', '**/*.jsonc'],
        plugins: {
            '@stylistic': stylistic,
        },
        language: 'json/jsonc',

        rules: {
            '@stylistic/indent': ['off'],
        },
    },
    {
        ...json.configs.recommended,
        name: 'app/json5-files-to-lint',
        files: ['*.json5', '**/*.json5'],
        plugins: {
            '@stylistic': stylistic,
        },
        language: 'json/json5',

        rules: {
            '@stylistic/indent': ['off'],
        },
    },
    {
        name: 'app/markdown-files-to-lint',
        files: ['*.md', '**/*.md'],
        plugins: {
            '@stylistic': stylistic,
            markdown,
        },
        language: 'markdown/commonmark',
        rules: {
            '@stylistic/indent': ['off'],
            'markdown/no-html': ['error'],
            'no-irregular-whitespace': ['off'],
            'vue/multi-word-component-names': ['off'],
        },
    },
    {
        name: 'app/js-files-to-lint',
        files: ['*.js', '**/*.js'],
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/arrow-spacing': ['error'],
            '@stylistic/comma-spacing': ['error', { before: false, after: true }],
            '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
            '@stylistic/multiline-ternary': ['error', 'always-multiline'],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/semi-spacing': ['error', { before: false, after: true }],
            '@stylistic/semi-style': ['error', 'last'],
            '@stylistic/space-before-blocks': ['error'],
            '@stylistic/space-in-parens': ['error', 'never'],
            '@stylistic/space-infix-ops': ['error', { int32Hint: false }],
            '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
            '@stylistic/template-tag-spacing': ['error', 'always'],
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    },
).prepend(...typescriptEslintConfig)
