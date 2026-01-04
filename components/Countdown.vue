<template>
  <v-row v-if="diff > 0">
    <v-col align="center">
      <v-chip
        color="yellow-lighten-2"
        class="ma-2 font-weight-bold custom-chip"
        size="x-large"
      >
        {{ twoDigits(days) }} {{ $t('day', days) }}
      </v-chip>
      <v-chip
        color="yellow-lighten-2"
        class="ma-2 font-weight-bold custom-chip"
        size="x-large"
      >
        {{ twoDigits(hours) }} {{ $t('hour', hours) }}
      </v-chip>
      <v-chip
        color="yellow-lighten-2"
        class="ma-2 font-weight-bold custom-chip"
        size="x-large"
      >
        {{ twoDigits(minutes) }} {{ $t('minute') }}
      </v-chip>
      <v-chip
        color="yellow-lighten-2"
        class="ma-2 font-weight-bold custom-chip"
        size="x-large"
      >
        {{ twoDigits(seconds) }} {{ $t('second') }}
      </v-chip>
      <LoadingCheese />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const DEADLINE = 'October 25, 2021'

const now = ref(Math.trunc(new Date().getTime() / 1000))
const date = ref(Math.trunc(Date.parse(DEADLINE.replace(/-/g, '/')) / 1000))
const diff = ref(date.value - now.value)

let interval = null

const seconds = computed(() => Math.trunc(diff.value) % 60)
const minutes = computed(() => Math.trunc(diff.value / 60) % 60)
const hours = computed(() => Math.trunc(diff.value / 60 / 60) % 24)
const days = computed(() => Math.trunc(diff.value / 60 / 60 / 24))

watch(now, () => {
  diff.value = date.value - now.value
  if (diff.value <= 0) {
    diff.value = 0
    clearInterval(interval)
  }
})

onMounted(() => {
  interval = setInterval(() => {
    now.value = Math.trunc(new Date().getTime() / 1000)
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})

function twoDigits(value) {
  if (value.toString().length <= 1) {
    return '0' + value.toString()
  }
  return value.toString()
}
</script>

<style scoped>
.custom-chip.v-chip {
  border: solid 4px;
  border-color: black !important;
}
</style>
