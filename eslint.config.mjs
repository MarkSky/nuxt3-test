// @ts-check
import eslint from '@eslint/js';
import masterCss from '@master/eslint-config-css';
import stylistic from '@stylistic/eslint-plugin';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
// import tsEslint from 'typescript-eslint';
// import tsParser from '@typescript-eslint/parser';
// import pluginVue from 'eslint-plugin-vue';
// import vueParser from 'vue-eslint-parser';
// import vueI18n from '@intlify/eslint-plugin-vue-i18n'; // 目前在@nuxt/eslint會出錯
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
    // Your custom configs here
    {
        name   : 'app/files-to-ignore',
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**'],
    },
    masterCss,
    stylistic.configs.recommended,
    {
        name   : 'app/all-files-to-lint',
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@master/css/class-order'     : ['warn'],
            '@master/css/class-validation': ['error'],
            '@master/css/class-collision' : ['warn'],
            '@stylistic/brace-style'      : ['error', '1tbs', { allowSingleLine: true }],
            '@stylistic/indent'           : [
                'error',
                4,
                {
                    SwitchCase         : 1,
                    FunctionDeclaration: { parameters: 'first' },
                    CallExpression     : { arguments: 'first' },
                    ArrayExpression    : 'first',
                    ObjectExpression   : 'first',
                    ImportDeclaration  : 'first',
                },
            ],
            '@stylistic/indent-binary-ops'     : ['error', 4],
            '@stylistic/key-spacing'           : ['error', { beforeColon: false, afterColon: true, align: 'colon' }],
            '@stylistic/member-delimiter-style': ['error', {
                multiline         : { delimiter: 'semi', requireLast: true },
                singleline        : { delimiter: 'semi', requireLast: false },
                multilineDetection: 'brackets',
                overrides         : {
                    interface: {
                        multiline : { delimiter: 'semi', requireLast: true },
                        singleline: { delimiter: 'comma', requireLast: false },
                    },
                },
            }],
            '@stylistic/no-multi-spaces'       : ['error', { ignoreEOLComments: true, exceptions: { ImportDeclaration: true, Property: true, VariableDeclarator: true } }],
            '@stylistic/semi'                  : ['error', 'always'],
            '@stylistic/template-curly-spacing': ['error', 'always'],
        },
        languageOptions: {
            globals: {
            },
            parserOptions: {
                ecmaFeatures: {
                    // jsx: true,
                },
            },
        },
    },
    {
        ...css.configs.recommended,
        files   : ['**/*.css'],
        plugins : { css },
        language: 'css/css',
    },
    {
        ...json.configs.recommended,
        name   : 'app/json-files-to-lint',
        files  : ['*.json', '**/*.json'],
        ignores: ['*.md', '**/*.md', 'package-lock.json'],
        plugins: {
            '@stylistic': stylistic,
            json,
        },
        language: 'json/json',
        rules   : {
            'no-irregular-whitespace': 'off',
            '@stylistic/indent'      : 'off',
        },
    },
    {
        ...json.configs.recommended,
        name   : 'app/jsonc-files-to-lint',
        files  : ['*.jsonc', '**/*.jsonc'],
        plugins: {
            '@stylistic': stylistic,
            json,
        },
        language: 'json/jsonc',

        rules: {
            '@stylistic/indent': 'off',
        },
    },
    {
        ...json.configs.recommended,
        name   : 'app/json5-files-to-lint',
        files  : ['*.json5', '**/*.json5'],
        plugins: {
            '@stylistic': stylistic,
            json,
        },
        language: 'json/json5',

        rules: {
            '@stylistic/indent': 'off',
        },
    },
    {
        name   : 'app/markdown-files-to-lint',
        files  : ['*.md', '**/*.md'],
        plugins: {
            '@stylistic': stylistic,
            markdown,
        },
        language: 'markdown/commonmark',
        rules   : {
            '@stylistic/indent'      : ['off'],
            'markdown/no-html'       : ['error'],
            'no-irregular-whitespace': ['off'],
        },
    },
    {
        ...eslint.configs.recommended,
        name   : 'app/javascript-files-to-lint',
        files  : ['**/*.{js,jsx,mjs,mjsx,cjs,cjsx}'],
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            ...eslint.configs.recommended.rules,
            // eslint:recommended
            // "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off',
            // Suggestions
            // 'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['info', 'warn', 'error'] }] : 'off',
            '@stylistic/arrow-spacing'       : ['error'],
            '@stylistic/comma-spacing'       : ['error', { before: false, after: true }],
            '@stylistic/keyword-spacing'     : ['error', { before: true, after: true }],
            '@stylistic/multiline-ternary'   : ['error', 'always-multiline'],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/quotes'              : ['error', 'single'],
            '@stylistic/semi-spacing'        : ['error', { before: false, after: true }],
            '@stylistic/semi-style'          : ['error', 'last'],
            '@stylistic/space-before-blocks' : ['error'],
            '@stylistic/space-in-parens'     : ['error', 'never'],
            '@stylistic/space-infix-ops'     : ['error', { int32Hint: false }],
            '@stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
            '@stylistic/template-tag-spacing': ['error', 'always'],
            'prefer-arrow-callback'          : ['error'],
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType : 'module',
            },
        },
    },
    {
        name   : 'app/typescript-files-without-declare-to-lint',
        files  : ['*.{ts,tsx,mts,mtsx,cts,ctsx}', '**/*.{ts,tsx,mts,mtsx,cts,ctsx}'],
        ignores: ['*.d.ts', '**/*.d.ts'],
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/arrow-spacing'                : 'error',
            '@stylistic/comma-spacing'                : ['error', { before: false, after: true }],
            '@stylistic/keyword-spacing'              : ['error', { before: true, after: true }],
            '@stylistic/multiline-ternary'            : ['error', 'always-multiline'],
            '@stylistic/object-curly-spacing'         : ['error', 'always'],
            '@stylistic/quotes'                       : ['error', 'single'],
            '@stylistic/space-before-blocks'          : 'error',
            '@stylistic/space-in-parens'              : ['error', 'never'],
            '@stylistic/space-infix-ops'              : ['error', { int32Hint: false }],
            '@stylistic/space-unary-ops'              : 'error',
            '@stylistic/switch-colon-spacing'         : ['error', { after: true, before: false }],
            // "@stylistic/type-annotation-spacing": ["error", { "before": false, "after": true }],
            '@stylistic/type-generic-spacing'         : 'error',
            // turns a rule on with no configuration (i.e. uses the default configuration)
            '@typescript-eslint/array-type'           : ['error', { default: 'generic' }],
            // turns on a rule with configuration
            '@typescript-eslint/no-explicit-any'      : ['warn', { ignoreRestArgs: true }],
            '@typescript-eslint/no-empty-function'    : ['error', { allow: [] }],
            '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
        },
    },
    {
        name   : 'app/declare-files-to-lint',
        files  : ['*.d.ts', '**/*.d.ts', 'router.d.ts'],
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/arrow-spacing'         : 'error',
            '@stylistic/comma-spacing'         : ['error', { before: false, after: true }],
            '@stylistic/keyword-spacing'       : ['error', { before: true, after: true }],
            '@stylistic/member-delimiter-style': ['error', {
                multiline         : { delimiter: 'semi', requireLast: true },
                singleline        : { delimiter: 'semi', requireLast: false },
                multilineDetection: 'brackets',
                overrides         : {
                    interface: {
                        multiline : { delimiter: 'semi', requireLast: true },
                        singleline: { delimiter: 'comma', requireLast: false },
                    },
                },
            }],
            '@stylistic/multiline-ternary'      : ['error', 'always-multiline'],
            '@stylistic/no-multi-spaces'        : 'off',
            '@stylistic/object-curly-spacing'   : ['error', 'always'],
            '@stylistic/quotes'                 : ['error', 'single'],
            '@stylistic/semi'                   : ['error', 'always'],
            '@stylistic/space-before-blocks'    : 'error',
            '@stylistic/space-infix-ops'        : ['error', { int32Hint: false }],
            '@stylistic/space-unary-ops'        : 'error',
            '@stylistic/switch-colon-spacing'   : ['error', { after: true, before: false }],
            '@stylistic/type-annotation-spacing': 'off',
            '@stylistic/type-generic-spacing'   : 'error',
            '@typescript-eslint/unbound-method' : 'off',
        },
    },
    // ...vueI18n.configs['flat/recommended'],
    {
        name   : 'app/component-files-to-lint',
        files  : ['*.vue', '**/*.vue'],
        ignores: ['*.json', '**/*.json'],
        plugins: {
            '@stylistic': stylistic,
        },
        settings: {
            // 'vue-i18n': {
            //     localeDir           : 'i18n/locales/*.{json,json5,yaml,yml}',
            //     messageSyntaxVersion: '^11.1.3',
            // },
        },
        rules: {
            // '@intlify/vue-i18n/no-raw-text'              : ['error', { ignorePattern: '^[-~#:()&/]+$' }],
            '@stylistic/arrow-spacing'                   : 'error',
            '@stylistic/comma-spacing'                   : ['error', { before: false, after: true }],
            '@stylistic/indent'                          : 'off',
            '@stylistic/keyword-spacing'                 : ['error', { before: true, after: true }],
            '@stylistic/multiline-ternary'               : ['error', 'always-multiline'],
            '@stylistic/no-multi-spaces'                 : 'off',
            '@stylistic/object-curly-spacing'            : ['error', 'always'],
            '@stylistic/quotes'                          : ['error', 'single'],
            '@stylistic/space-before-blocks'             : 'error',
            '@stylistic/space-in-parens'                 : ['error', 'never'],
            '@stylistic/space-infix-ops'                 : ['error', { int32Hint: false }],
            '@stylistic/space-unary-ops'                 : 'error',
            '@stylistic/switch-colon-spacing'            : ['error', { after: true, before: false }],
            '@stylistic/type-annotation-spacing'         : 'off',
            '@typescript-eslint/unbound-method'          : 'off',
            'vue/block-tag-newline'                      : 'error',
            'vue/comma-spacing'                          : ['error', { before: false, after: true }],
            'vue/multiline-html-element-content-newline' : 'error',
            'vue/first-attribute-linebreak'              : ['error', { singleline: 'beside', multiline: 'beside' }],
            'vue/html-button-has-type'                   : 'error',
            'vue/html-closing-bracket-newline'           : ['error', { multiline: 'never' }],
            'vue/html-closing-bracket-spacing'           : 'error',
            'vue/html-comment-content-spacing'           : 'error',
            'vue/html-indent'                            : ['error', 4],
            'vue/html-self-closing'                      : ['error', { html: { void: 'always', normal: 'never' } }],
            'vue/multi-word-component-names'             : 'off',
            'vue/max-attributes-per-line'                : ['error', { multiline: { max: 1 } }],
            'vue/mustache-interpolation-spacing'         : ['error', 'always'],
            'vue/no-multi-spaces'                        : ['error', { ignoreProperties: false }],
            'vue/padding-line-between-blocks'            : ['error', 'always'],
            'vue/script-indent'                          : ['error', 4, { baseIndent: 1, switchCase: 1 }],
            'vue/singleline-html-element-content-newline': [
                'error',
                {
                    ignoreWhenNoAttributes: false,
                    ignores               : ['router-link'],
                },
            ],
            'vue/space-infix-ops'       : ['error', { int32Hint: false }],
            'vue/space-unary-ops'       : 'error',
            'vue/template-curly-spacing': ['error', 'always'],
        },
        // languageOptions: {
        //     parser: vueParser,
        //     parserOptions: {
        //         parser: {
        //             'js': tsParser,
        //             'ts': tsParser,
        //             '<template>': 'espree',
        //         },
        //         project: './tsconfig.eslint.json',
        //         ecmaVersion: 2020,
        //         sourceType: 'module',
        //         extraFileExtensions: ['.vue'],
        //     },
        // },
    },
);
