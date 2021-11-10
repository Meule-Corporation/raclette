<template>
  <v-app>
    <NuxtLink to="/">
      <v-app-bar flat color="white" prominent src="/raclette-party.jpg" @click="goToHome">
      </v-app-bar>
    </NuxtLink>
    <v-main>
      <v-container class="fill-height">
        <Nuxt />
      </v-container>
      <cookie-consent></cookie-consent>
    </v-main>

    <foot />
  </v-app>
</template>

<script>
import foot from '@/layouts/footer.vue';

export default {
  components: {
    foot,
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
  methods: {
    goToHome() {

    }
  }
};
</script>

<style scoped>
.v-app-bar {
  max-height: 128px !important;
}
</style>
