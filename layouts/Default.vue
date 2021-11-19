<template>
  <v-app>
    <NuxtLink to="/">
      <v-app-bar
        app
        absolute
        flat
        color="white"
        prominent
        src="/raclette-party.jpg"
      >
      </v-app-bar>
    </NuxtLink>
    <v-main>
      <v-container class="fill-height">
        <Nuxt />
      </v-container>
      <cookie-consent />
    </v-main>

    <Foot />
  </v-app>
</template>

<script>
import Foot from '@/layouts/Foot';

export default {
  name: 'Default',
  components: {
    Foot,
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      link: [
        {
          rel: 'canonical',
          href: 'https://raclette.world' + this.$route.path,
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-app-bar {
  max-height: 128px !important;
}
</style>
