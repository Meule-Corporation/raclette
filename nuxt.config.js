import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
  env: {
    dev: process.env.NODE_ENV !== 'production',
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  generate: {
    fallback: true,
  },
  bridge: {
    nitro: false,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: "Raclette.World: Les quantités de raclette, par l'IA",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@RacletteW' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Raclette.World est le premier calculateur de raclette basé sur une intelligence artificielle post-qantique. Le temps où vous vous demandiez quelle quantité de fromage à raclette par personne est révolu.",
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          "Raclette.World est le premier calculateur de raclette basé sur une intelligence artificielle post-qantique. Le temps où vous vous demandiez quelle quantité de fromage à raclette par personne est révolu.",
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: "Raclette.World: Quelle quantité de raclette par personne ?",
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: "Raclette.World: Quelle quantité de raclette par personne ?",
      },
      {
        hid: 'og:image',
        name: 'og:image',
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

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://vueuse.org/guide/
    '@vueuse/core/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  css: [
    '@/assets/main.css',
    '@/assets/mdi.css',
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    breakpoint: {
      mobileBreakpoint: 'xs',
    },
    defaultAssets: false
  },

  i18n: {
    defaultLocale: 'fr',
    lazy: true,
    langDir: 'lang/',
    fallbackLocale: 'fr',
    skipSettingLocaleOnNavigate: false,
    detectBrowserLanguage: {
      useCookie: false,
    },
    vueI18n: {
      fallbackLocale: 'fr',
    },
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
        name: 'English',
        iso: 'en-US',
      },
      {
        code: 'fr',
        file: 'fr-FR.js',
        iso: 'fr-FR',
        name: 'Français',
      },
    ],
  },
});
