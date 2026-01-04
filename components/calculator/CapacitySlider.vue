<template>
  <v-col>
    <h2>{{ $t('capacity-slider.title') }}</h2>
    <v-row class="my-4 justify-center flex-nowrap">
      <v-slider
        v-model="hungriness"
        color="grey-darken-2"
        track-color="yellow-lighten-2"
        :min="0.7"
        :max="1.3"
        :step="0.01"
        hide-details
        @update:model-value="$emit('capacity-updated', hungriness)"
      >
        <template #prepend>
          <v-img
            max-width="50"
            src="/img/moineau.png"
          />
        </template>
        <template #append>
          <v-img
            max-width="50"
            src="/img/loup.png"
          />
        </template>
      </v-slider>
    </v-row>
  </v-col>
</template>

<script setup>
import { ref } from 'vue'

const hungriness = ref(1)

defineEmits(['capacity-updated'])
</script>

<style scoped>
:deep(.v-slider__thumb) {
  height: 20px;
  width: 20px;
}

:deep(.v-slider--horizontal .v-slider__track-container) {
  height: 10px;
}

:deep(.v-slider__thumb::before) {
  left: -9px;
  top: -9px;
}

.v-input {
  align-items: center;
}
</style>
