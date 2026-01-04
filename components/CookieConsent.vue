<template>
  <v-snackbar
    v-model="show"
    vertical
    :timeout="-1"
    :location="isMobile ? 'bottom' : 'bottom end'"
  >
    <span class="cookie-consent-message">
      {{ $t('cookie.message') }}
    </span>

    <template #actions>
      <v-row no-gutters>
        <v-col>
          <ButtonCheese size="x-small" class="ma-2" @click="leave">
            {{ $t('cookie.refuse') }}
          </ButtonCheese>
        </v-col>
        <v-col>
          <ButtonCheese size="x-small" class="ma-2" @click="dismiss">
            {{ $t('cookie.accept') }}
          </ButtonCheese>
        </v-col>
      </v-row>
    </template>
  </v-snackbar>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const show = ref(undefined)

const isMobile = computed(() => mobile.value)

function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  return parts.length !== 2 ? undefined : parts.pop().split(';').shift()
}

const cookie = computed(() => !getCookie('cookie_a_la_raclette'))

onBeforeMount(() => {
  setTimeout(() => {
    show.value = cookie.value
  }, 1000)
})

function dismiss() {
  show.value = false
  const exdate = new Date()
  exdate.setDate(exdate.getDate() + 365)
  const cookieValue = [
    `cookie_a_la_raclette=1`,
    `expires=${exdate.toUTCString()}`,
    `path=/`,
  ]
  document.cookie = cookieValue.join(';')
}

function leave() {
  window.open('https://www.marmiton.org/recettes/recette_cookies-maison_86989.aspx', '_blank')
}
</script>
