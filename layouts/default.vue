<template>
  <v-app>
    <NuxtLink :to="localePath('/')">
      <v-app-bar
        flat
        color="white"
        height="128"
        image="/raclette-party.jpg"
      >
      </v-app-bar>
    </NuxtLink>

    <v-main>
      <v-container class="fill-height">
        <slot />
      </v-container>
    </v-main>

    <Foot />
    <CookieConsent />
  </v-app>
</template>

<script setup>
const { locale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
  link: [
    {
      rel: 'canonical',
      href: computed(() => 'https://raclette.world' + route.path),
    },
  ],
})
</script>

<style scoped>
.v-app-bar {
  max-height: 128px !important;
}
</style>
