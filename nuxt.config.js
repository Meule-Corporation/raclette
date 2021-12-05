import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  env: {
    dev: process.env.NODE_ENV !== 'production',
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  },
  bridge: {
    nitro: false
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Raclette.World: Les quantités de raclette, par l\'IA',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: "Raclette.World est le premier calculateur de raclette basé sur une intelligence artificielle post-qantique. Découvrez ce projet et rejoignez l'aventure pour apporter cette révolution au plus grand nombre."},
      {hid: 'og:title', name: 'og:title', content: "Raclette.World: Les quantités de raclette, par l'IA"},
      {hid: 'og:site_name', name: 'og:site_name', content: "Raclette.World: Les quantités de raclette, par l'IA"},
      {hid: 'og:image', name: 'og:image', content: "https://raclette.world/logo.svg"},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'google-site-verification', content: '1hHF9NCm0ceJbA52urM-wKY7t1t-lbN58XUXnXjQ-7A'},
    ],
    link: [
      {rel: 'icon', type: 'image/svg', href: '/logo.svg'}
    ],
    script: [
      {
        src: "/anal/ytics.js",
        defer: true,
        "data-domain": "raclette.world",
        "data-api": "/anal/ytics/api/event"
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
    '@vueuse/core/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    breakpoint: {
      mobileBreakpoint: 'xs'
    },
  },

  i18n: {
    locales: [{
      code: 'fr',
      file: 'fr-FR.js'
    }],
    defaultLocale: 'fr',
    lazy: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'fr'
    }
  },
})
