<template>
  <v-app>
    <v-app-bar absolute prominent dark color="teal" src="raclette-party.jpg">
    </v-app-bar>
    <v-main>
      <v-container class="fill-height">
        <Nuxt />
      </v-container>
    </v-main>
    <foot />
  </v-app>
</template>

<script>
import foot from './footer.vue'

export default {
  components: {
    foot,
  },
}
</script>
