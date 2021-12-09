<template>
  <v-row justify="center" align="center">
    <v-col  class="mr-5">
      <h2 class="text-sm-h2 my-6 text-center">{{ $t('they-talk-about-us.title')}}</h2>
      <v-timeline
        :dense="$vuetify.breakpoint.smAndDown"
      >
        <v-timeline-item
          v-for="item in timelineItems"
          :key="item.website"
          color="yellow lighten-2"
          small
        >
          <template v-slot:opposite>
            <span class="font-italic">{{ item.date }}</span>
          </template>
          <a v-if="shouldDisplayCard(item)" target="_blank" :href="item.link">
            <v-card class="elevation-2">
              <v-card-title class="">
                <v-avatar size="56" tile>
                  <v-img
                    contain
                    :alt="item.website"
                    :src="`/img/articles/${item.img}`"
                  ></v-img>
                </v-avatar>
                <p class="ml-3">
                  {{ item.website }}
                </p>
              </v-card-title>
              <v-card-text>
                <blockquote v-if="item.quote">
                  « {{ item.quote }} »
                </blockquote>
                <audio class="audio" v-if="item.sound" controls>
                  <source :src="`/${item.sound}`" type="audio/mp3">
                </audio>
                <video  v-if="item.video" class="video" controls>
                  <source :src="`/${item.video}`"
                          type="video/webm">
                </video>

              </v-card-text>
            </v-card>
          </a>
          <div v-if="item.mode === 'html'" v-html="item.html"></div>
        </v-timeline-item>
      </v-timeline>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"/>
    </v-col>
  </v-row>
</template>

<script>

export default {
  name: 'TheyTalkAboutUs',
  data() {
    return {
      timelineItems: [
        {
          mode: 'card',
          website: 'BFM TV',
          img: 'bfm.png',
          video: 'bfm.mp4',
          date: '09 Décembre 2021',
          link: 'https://www.bfmtv.com/'
        },
        {
          mode: 'card',
          website: 'HuffPost',
          img: 'huffpost.png',
          quote: 'Cette “intelligence artificielle post-quantique”, s’amusent les fondateurs du site, peut vous aider à calculer la quantité d’ingrédients à acheter en fonction du nombre de personnes.',
          date: '06 Décembre 2021',
          link: 'https://www.huffingtonpost.fr/entry/raclette-la-quantite-ideale-des-ingredients-calculee-par-ce-site_fr_61adcc03e4b044a1cc255784'
        },
        {
          mode: 'card',
          website: 'Konbini',
          img: 'konbini.png',
          quote: 'Ils sont trois Français à avoir inventé l’outil le plus précieux de nos hivers',
          date: '06 Décembre 2021',
          link: 'https://food.konbini.com/news/cette-ia-te-dit-precisement-combien-de-fromage-il-te-faut-pour-ta-raclette/'
        },
        {
          mode: 'card',
          website: 'Ouest France',
          img: 'ouest-france.png',
          quote: 'Maintenant, vous disposez de tous les éléments pour déguster votre raclette dans des conditions optimales !',
          date: '06 Décembre 2021',
          link: 'https://www.ouest-france.fr/societe/alimentatio/grace-a-ce-site-la-preparation-de-la-raclette-n-aura-plus-de-secrets-pour-vous-3832213e-56b0-11ec-a00b-81ea3a07ac0a'
        },
        {
          mode: 'card',
          website: 'Nice Matin',
          img: 'nice-matin.png',
          quote: 'C\'est le plat qui réchauffe les soirées et, pour ne pas vous égarer sur les quantités, laissez-vous guider par le calculateur de raclette.world.',
          date: '06 Décembre 2021',
          link: 'https://www.nicematin.com/insolite/on-mange-de-la-raclette-ce-soir-ce-calculateur-vous-indique-les-bonnes-quantites-a-acheter-731823'
        },
        {
          mode: 'card',
          website: 'C NEWS',
          img: 'cnews.png',
          quote: '[...] le site a utilisé l’intelligence artificielle afin de se mettre au service du consommateur',
          date: '07 Décembre 2021',
          link: 'https://www.cnews.fr/conso/2021-12-06/raclette-ce-site-calcule-automatiquement-les-bonnes-quantites-acheter-1157611'
        },
        {
          mode: 'card',
          website: 'Vanity Fair',
          img: 'vanity-fair.png',
          quote: ' le site Raclette.World permet donc de savoir combien d\'ingrédients il vous faut pour réaliser la meilleure des raclettes',
          date: '07 Décembre 2021',
          link: 'https://www.vanityfair.fr/actualites/article/un-simulateur-permet-de-calculer-la-quantite-exacte-dingredients-pour-votre-raclette'
        },
        {
          mode: 'card',
          website: 'actu.fr',
          img: 'actu-fr.png',
          quote: '[T]rois ingénieurs lyonnais se sont amusés à créer « le premier calculateur de raclette basé sur une intelligence artificielle post-quantique » permettant de déterminer avec précision les ingrédients qui seront nécessaires pour que la raclette se déroule sous les meilleurs auspices.',
          date: '07 Décembre 2021',
          link: 'https://actu.fr/insolite/fromage-patates-charcuterie-ce-simulateur-de-raclette-donne-la-quantite-d-ingredients-necessaires_46997189.html'
        },
        {
          mode: 'html',
          date: '07 Décembre 2021',
          html: "<blockquote data-dnt=\"true\" class=\"twitter-tweet\"><p lang=\"fr\" dir=\"ltr\">Le configurateur PC <a href=\"https://t.co/Ax8accRlub\">https://t.co/Ax8accRlub</a> &lt; Le configurateur raclette <a href=\"https://t.co/vPErsGcd3d\">https://t.co/vPErsGcd3d</a></p>&mdash; LDLC (@LDLC) <a href=\"https://twitter.com/LDLC/status/1468139034555912196?ref_src=twsrc%5Etfw\">December 7, 2021</a></blockquote>"
        },
        {
          mode: 'html',
          date: '07 Décembre 2021',
          html: "<blockquote data-dnt=\"true\" class=\"twitter-tweet\"><p lang=\"fr\" dir=\"ltr\">Fini le problème de la bonne quantité quand on fait une soirée <a href=\"https://twitter.com/hashtag/raclette?src=hash&amp;ref_src=twsrc%5Etfw\">#raclette</a> ! <a href=\"https://t.co/BOeINC1SFh\">https://t.co/BOeINC1SFh</a> vient de lancer une calculatrice à raclette ! Vous entrez le nombre de personnes à table, leur niveau d’appétit et les ingrédients que vous voulez ajouter…. et ça calcule tout ! <a href=\"https://t.co/xr3U3gpkVu\">pic.twitter.com/xr3U3gpkVu</a></p>&mdash; Chérie FM (@radiocheriefm) <a href=\"https://twitter.com/radiocheriefm/status/1468168080094281728?ref_src=twsrc%5Etfw\">December 7, 2021</a></blockquote>"
        },
        {
          mode: 'card',
          website: 'M6 - 1945',
          img: 'm6-1945.png',
          video: 'm6.webm',
          date: '07 Décembre 2021',
          link: 'https://www.6play.fr/'
        },
        {
          mode: 'card',
          website: 'France Inter',
          img: 'france-inter.png',
          sound: 'france-inter.mp3',
          date: '08 Décembre 2021',
          link: 'https://www.franceinter.fr/'
        }
      ].reverse()
    }
  },
  methods: {
    shouldDisplayCard(item) {
      return item.mode === 'card';
    }
  }
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none; /* no underline */
}

.audio {
  width: 100%;
}

.video {
  width: 100%;
}
</style>
