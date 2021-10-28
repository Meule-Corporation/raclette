<template>
  <div class="ma-5">
    <v-row justify="center" align="center">
      <v-col cols="6" align-self="center" >
        <h1 class="cheese-title text-lg-h2 text-md-h3 text-h4 text-center">{{ $t('raclette.tonight') }}</h1>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "CheeseTitle"
}
</script>

<style>
@font-face {
  font-family: 'Bouncy';
  src: url('/fonts/Bouncy.otf') format('truetype');
}

.v-application .cheese-title {
  font-family: Bouncy,serif !important;
}
</style>
