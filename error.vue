<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" align="center">
            <CheeseTitle />

            <h3 class="text-center my-12" v-if="error?.statusCode === 404">
              {{ $t('pageNotFound') }}
            </h3>
            <h3 class="text-center my-12" v-else>
              {{ $t('otherError') }}
            </h3>

            <ButtonCheese :to="localePath('/')">{{ $t('backToRaclette') }}</ButtonCheese>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const error = useError()
const localePath = useLocalePath()

useHead({
  title: error.value?.statusCode === 404 ? "La page demandée n'existe pas" : 'Erreur'
})
</script>
