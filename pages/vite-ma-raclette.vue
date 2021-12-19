<template>
  <v-row justify="center" align="center">
    <v-col class="mr-5">
      <CardCheese color='yellow'>
        <v-card-title class='justify-center'>
          <h2>
            Votre raclette pour l'hiver <span style="color: rgb(237, 80, 91)">facilement</span> et <span
            style="color: rgb(85, 97, 217)">rapidement</span>
          </h2>
        </v-card-title>
        <v-card-text class='text--primary' min-height='100%'>
          <div>
            <v-autocomplete
              :items="cities"
              :item-value="it => it"
              :item-text="it => it.Nom_commune + ' (' + it.Code_postal + ')'"
              :placeholder="'Localisation'"
              @change="selectCity"
            >
            </v-autocomplete>
          </div>
        </v-card-text>
      </CardCheese>

      <CheeseMap v-if="selectedCity" :center="selectedCity.coordonnees_gps.split(',')"></CheeseMap>
    </v-col>
  </v-row>
</template>

<script>

import CardCheese from "../components/CardCheese";
import CheeseMap from "../components/map/CheeseMap";

export default {
  name: 'ViteMaRaclette',
  components: {CardCheese, CheeseMap},
  data() {
    return {
      cities: [],
      selectedCity: null
    }
  },

  async mounted() {
    this.cities = await (await fetch(('/communes-france.json'))).json()
  },
  methods: {

    selectCity(selected) {
      this.selectedCity = selected;
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
