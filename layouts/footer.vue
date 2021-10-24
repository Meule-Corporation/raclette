<template>
  <v-footer dark padless>
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
        <NuxtLink to="mailto:contact@raclette.world">{{ $t('footer.contact-us.link') }}</NuxtLink> - <NuxtLink to="/about-us">{{ $t('footer.about-us.link') }}</NuxtLink> - {{ new Date().getFullYear() }} — <strong>raclette.world</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: 'mdi-facebook',
        link: '',
      },
      {
        text: 'mdi-twitter',
        link: '',
      },
      {
        text: 'mdi-linkedin',
        link: '',
      },
      {
        text: 'mdi-instagram',
        link: '',
      },
    ].filter((icon) => icon.link),
  }),
}
</script>

<style scoped>
.v-card {
  width: 100%;
}
</style>
