<template>
  <v-col>
    <h2>{{ $t('capacity-slider.title') }}</h2>
    <v-row class="mt-12 justify-center flex-nowrap">
      <v-slider
        v-model="hungriness"
        color="grey darken-2"
        track-color="yellow lighter-2"
        height='32'
        :min="0.75"
        :max="1.25"
        :step="0.05"
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
      hungriness: 1,
    };
  },
};
</script>
