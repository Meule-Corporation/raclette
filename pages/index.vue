<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <CheeseTitle />
      <Calculator />
    </v-col>
  </v-row>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

onMounted(() => {
  const yellowColor = theme.current.value.colors?.['yellow-darken-2'] || '#FBC02D'
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
  "                      \"\"-'\n Join us by contacting us at careers@raclette.world", 'color: ' + yellowColor)
})
</script>
