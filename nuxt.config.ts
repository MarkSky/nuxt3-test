// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxt/test-utils',
        '@nuxtjs/i18n',
    ],

    devtools: {
        enabled: true,

        vscode: {
            reuseExistingServer: true,
            port               : 3090,
        },
    },

    compatibilityDate: '2024-11-01',

    eslint: {
        config: {
            stylistic: true,
        },
    },

    i18n: {
        defaultLocale: 'zh-TW',
        locales      : [
            { code: 'zh-TW', name: 'Chinese', file: 'zh-TW.json' },
            { code: 'en-US', name: 'English', file: 'en-US.json' },
        ],
        bundle: {
            optimizeTranslationDirective: false,
        },
    },
});
