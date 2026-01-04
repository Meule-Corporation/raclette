export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  ssr: false,

  app: {
    head: {
      titleTemplate: '%s',
      title: "Raclette.World: Les quantités de raclette, par l'IA",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'twitter:site', content: '@RacletteW' },
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'description',
          content:
            "Raclette.World est le premier calculateur de raclette basé sur une intelligence artificielle post-qantique. Le temps où vous vous demandiez quelle quantité de fromage à raclette par personne est révolu.",
        },
        {
          property: 'og:description',
          content:
            "Raclette.World est le premier calculateur de raclette basé sur une intelligence artificielle post-qantique. Le temps où vous vous demandiez quelle quantité de fromage à raclette par personne est révolu.",
        },
        {
          property: 'og:title',
          content: "Raclette.World: Quelle quantité de raclette par personne ?",
        },
        {
          property: 'og:site_name',
          content: "Raclette.World: Quelle quantité de raclette par personne ?",
        },
        {
          property: 'og:image',
          content: 'https://raclette.world/icon.png',
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'google-site-verification',
          content: '4HAdqAwqavgSyg5VihoVVCtvL4_YBAvCFlrLuRs9U_I',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg', href: '/logo.svg' }],
      script: [
        {
          src: '/anal/ytics.js',
          defer: true,
          'data-domain': 'raclette.world',
          'data-api': '/anal/ytics/api/event',
        },
      ],
    },
  },

  modules: [
    '@nuxtjs/i18n',
    '@vite-pwa/nuxt',
    'vuetify-nuxt-module',
    '@nuxt/eslint',
  ],

  css: [
    '@mdi/font/css/materialdesignicons.css',
    '@/assets/main.css',
  ],

  vuetify: {
    moduleOptions: {
      styles: { configFile: 'assets/variables.scss' },
    },
    vuetifyOptions: {
      display: {
        mobileBreakpoint: 'sm',
      },
    },
  },

  i18n: {
    defaultLocale: 'fr',
    lazy: true,
    langDir: 'lang/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: false,
    },
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'fr',
        file: 'fr-FR.js',
        name: 'Français',
        language: 'fr-FR',
      },
    ],
  },

  pwa: {
    manifest: {
      name: 'Raclette.World',
      short_name: 'Raclette',
      lang: 'fr',
    },
    workbox: {
      navigateFallback: '/',
    },
  },

  nitro: {
    prerender: {
      failOnError: false,
    },
  },
})
