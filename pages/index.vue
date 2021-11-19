<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <CheeseTitle />
      <Calculator />
    </v-col>
  </v-row>
</template>

<script>
import colors from 'vuetify/lib/util/colors'
import Calculator from '@/components/calculator/Calculator'
import CheeseTitle from '@/components/CheeseTitle'

export default {
  name: 'Index',
  components: { Calculator, CheeseTitle },
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
