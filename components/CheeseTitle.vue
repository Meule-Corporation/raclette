<template>
  <v-row justify="center" align="center">
    <v-col>
      <h1 class="cheese-title mt-2 text-lg-h2 text-md-h3 text-h4 text-center">{{ $t('raclette.tonight') }}</h1>
    </v-col>
  </v-row>
</template>

<script setup>
</script>

<style>
@font-face {
  font-family: 'Bouncy';
  src: url('/fonts/Bouncy.otf') format('truetype');
}

.v-application .cheese-title.text-lg-h2,
.v-application .cheese-title.text-md-h3,
.v-application .cheese-title.text-h4 {
  font-family: Bouncy, serif !important;
}
</style>
