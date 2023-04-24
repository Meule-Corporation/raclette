<template>
  <v-footer dark padless app absolute>
    <v-card flat tile class="yellow lighten-2 black--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px" color="black">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0 black--text">
        {{ $t('footer.description') }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="black--text">
        <a href="mailto:contact@raclette.world">{{
            $t('footer.contact-us.link')
          }}</a>
        -
        <NuxtLink :to="localePath('/about-us')">{{ $t('footer.about-us.link') }}</NuxtLink>
        -
        <NuxtLink :to="localePath('/they-talk-about-us')">{{ $t('footer.they-talk-about-us.link') }}</NuxtLink>
        -
        <NuxtLink
          v-for='locale in availableLocales'
          :key='locale.code'
          :to='switchLocalePath(locale.code)'>{{ locale.name }}</NuxtLink>
        - <span>{{ new Date().getFullYear() }}</span> - <strong>raclette.world</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Foot',
  data: () => ({
    icons: [
      {
        text: 'mdi-facebook',
        link: 'https://www.facebook.com/raclette.world',
      },
      {
        text: 'mdi-twitter',
        link: 'https://twitter.com/RacletteW',
      },
      {
        text: 'mdi-linkedin',
        link: 'https://www.linkedin.com/company/raclette-world',
      },
      {
        text: 'mdi-github',
        link: 'https://github.com/Meule-Corporation/raclette',
      },
      {
        text: 'mdi-instagram',
        link: '',
      },
    ].filter((icon) => icon.link),
  }),
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    },
  },
};
</script>

<style scoped>
.v-card {
  width: 100%;
}
</style>
