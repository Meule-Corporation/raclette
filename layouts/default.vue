<template>
  <v-app>
    <v-app-bar prominent floating src="raclette-party.jpg">
    </v-app-bar>
    <v-main>
      <v-container class="fill-height">
        <Nuxt />
      </v-container>
    </v-main>
    <foot />
  </v-app>
</template>

<script>
import foot from './footer.vue'

export default {
  components: {
    foot,
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      link: [
        {
          rel: 'canonical',
          href: 'https://raclette.world' + this.$route.path
        }
      ]
    }
  }

}
</script>
