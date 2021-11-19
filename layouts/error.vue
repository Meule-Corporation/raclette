<template>
  <v-row justify="center" align="center">
    <v-col cols="12" align="center">
      <CheeseTitle />

      <h3 class='text-center my-12' v-if="error.statusCode === 404">
        {{ $t(pageNotFound) }}
      </h3>
      <h3 class='text-center my-12' v-else>
        {{ $t(otherError) }}
      </h3>

      <ButtonCheese to='/'>{{ $t('backToRaclette') }}</ButtonCheese>
    </v-col>
  </v-row>
</template>

<script>
import CheeseTitle from '@/components/CheeseTitle';
import ButtonCheese from '@/components/ButtonCheese';

export default {
  name: 'Error',
  components: { ButtonCheese, CheeseTitle },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'pageNotFound',
      otherError: 'otherError'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? "La page demandée n'existe pas" : 'Erreur'
    return {
      title
    }
  }
}
</script>
