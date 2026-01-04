<template>
  <div class="rotateLogo" :style="{ 'margin-bottom': height + 'px' }">
    <v-img
      :aspect-ratio="1"
      :max-height="height"
      :min-height="height"
      :max-width="height"
      :style="{ transform: 'rotateZ(' + -rotation + 'deg)' }"
      class="rotating"
      src="/cheese-slice.svg"
    ></v-img>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const height = ref(200)
const seconds = ref(0)
let interval = null

const rotation = computed(() => -seconds.value * 360 / 60)

onMounted(() => {
  interval = setInterval(() => {
    seconds.value++
  }, 1000)
  // Triggers a rotation instantly
  setTimeout(() => {
    seconds.value++
  }, 10)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.rotating {
  transition: transform 1s ease-in-out;
  transform-origin: 50% 100%;
}
</style>
