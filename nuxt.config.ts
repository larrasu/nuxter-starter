// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      'vaul-drawer-wrapper': '',
      'class': 'bg-[var(--ui-bg)]',
    },
  },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: [
    '@nuxt/eslint',
    '@nuxthub/core',
    'nuxt-auth-utils',
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],
  eslint: {
    config: {
      stylistic: {
        braceStyle: '1tbs',
      },
    },
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
    },
  },
  hub: {
    database: true,
  },
})
