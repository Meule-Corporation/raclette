<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <cheese-title></cheese-title>
      <calculator />
    </v-col>
    <div>
      <a href="/about-us">En savoir plus sur Raclette.World</a>
    </div>
  </v-row>
</template>

<script>
import colors from 'vuetify/lib/util/colors'
import calculator from '@/components/calculator/calculator'

export default {
  components: { calculator },
  mounted() {
    console.log("%c \n" +
    "         _--\"-.\n" +
    "      .-\"      \"-.\n" +
    "     |\"\"--..      '-.\n" +
    "     |      \"\"--..   '-.\n" +
    "     |.-. .-\".    \"\"--..\".\n" +
    "     |'./  -_'  .-.      |\n" +
    "     |      .-. '.-'   .-'\n" +
    "     '--..  '.'    .-  -.\n" +
    "          \"\"--..   '_'   :\n" +
    "                \"\"--..   |\n" +
    "                      \"\"-'\n Join us by contacting us at careers@raclette.world", 'color: ' + colors.yellow.darken2)
  }
}
</script>
