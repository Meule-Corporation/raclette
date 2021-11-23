<template>
  <v-col>
    <h2>{{ $t('capacity-slider.title') }}</h2>
    <v-row class="my-4 justify-center flex-nowrap">
      <v-slider
        v-model="hungriness"
        color="grey darken-2"
        track-color="yellow lighter-2"
        height='32'
        :min="1"
        :max="1.2"
        :step="0.01"
        hide-details
        @input="$emit('capacity-updated', hungriness)"
      >
        <template #prepend>
          <v-img
            max-width="50"
            src='img/moineau.png'
          />
        </template>
        <template #append>
          <v-img
              max-width="50"
            src='img/loup.png'
          />
        </template>
      </v-slider>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'CapacitySlider',
  data() {
    return {
      hungriness: 1.1,
    };
  },
};
</script>

<style scoped>
>>>.v-slider__thumb {
  height: 20px;
  width: 20px;
}

>>> .v-slider--horizontal .v-slider__track-container {
  height: 10px;
}

>>> .v-slider__thumb::before {
  left: -9px;
  top: -9px;
}

.v-input {
  align-items: center;
}
</style>
