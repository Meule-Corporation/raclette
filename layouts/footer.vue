<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        La raclette (Bratchäs, « fromage rôti », en suisse allemand) est une
        recette de cuisine traditionnelle et emblématique de la cuisine suisse,
        connue dans le monde entier. Variante des fondues au fromage, elle
        consiste à faire fondre du raclette et à le racler au fur et à mesure
        qu’il fond. Elle est traditionnellement servie avec des pommes de terre
        en robe des champs et accompagnée de légumes au vinaigre (cornichons,
        oignons).
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>raclette.fun</strong>
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