<template>
  <v-row justify="center" align="center">
    <h2 class="text-sm-h2 my-6 text-center">Ils parlent de nous</h2>
    <v-timeline>
      <v-timeline-item
        v-for="article in timelineItems"
        :key="article.website"
        color="yellow lighten-2"
      >
        <template v-slot:opposite>
          <span>{{article.date}}</span>
        </template>
        <a target="_blank" :href="article.link">
          <v-card class="elevation-2">
            <v-card-title class="">
              <v-avatar size="56" tile>
                <v-img
                  contain
                  alt="user"
                  :src="'/img/articles/' + article.img"
                > </v-img>
              </v-avatar>
              <p class="ml-3">
                {{ article.website }}
              </p>
            </v-card-title>
            <v-card-text class="font-italic">
              « {{ article.quote }} »
            </v-card-text>
          </v-card>
        </a>

      </v-timeline-item>
    </v-timeline>
  </v-row>
</template>

<script>

export default {
  name: 'AboutUs',
  data() {
    return {
      timelineItems: [
        {
          website: 'Konbini',
          img: 'konbini.png',
          quote: 'Ils sont trois Français à avoir inventé l’outil le plus précieux de nos hivers',
          date: '07 Décembre 2021',
          link: 'https://food.konbini.com/news/cette-ia-te-dit-precisement-combien-de-fromage-il-te-faut-pour-ta-raclette/'
        },
        {
          website: 'Ouest France',
          img: 'ouest-france.png',
          quote: 'Maintenant, vous disposez de tous les éléments pour déguster votre raclette dans des conditions optimales !',
          date: '07 Décembre 2021',
          link: 'https://www.ouest-france.fr/societe/alimentatio/grace-a-ce-site-la-preparation-de-la-raclette-n-aura-plus-de-secrets-pour-vous-3832213e-56b0-11ec-a00b-81ea3a07ac0a'
        },
        {
          website: 'HuffPost',
          img: 'huffpost.png',
          quote: 'Cette “intelligence artificielle post-quantique”, s’amusent les fondateurs du site, peut vous aider à calculer la quantité d’ingrédients à acheter en fonction du nombre de personnes.',
          date: '07 Décembre 2021',
          link: 'https://www.huffingtonpost.fr/entry/raclette-la-quantite-ideale-des-ingredients-calculee-par-ce-site_fr_61adcc03e4b044a1cc255784'
        }
      ]
    }
  }
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none; /* no underline */
}
</style>
