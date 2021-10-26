<template>
  <v-col>
    <h2>{{ $t('capacity-slider.title') }}</h2>
    <v-row class="mt-12 justify-center flex-nowrap">
      <v-slider
        v-model="hungriness"
        color="grey darken-2"
        thumb-color="yellow lighter-2"
        track-color="yellow lighter-2"
        :tick-labels="hungrinessLabels"
        :min="0.75"
        :max="1.25"
        :step="0.25"
        ticks="always"
        tick-size="3"
        :thumb-size="32"
        thumb-label="always"
        @change="$emit('capacity-updated', hungriness)"
      >
        <template #thumb-label="{ value }">
          {{ satisfactionEmojis[value] }}
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
      hungrinessLabels: [
        this.$t('capacity-slider.label.bird'),
        this.$t('capacity-slider.label.normal'),
        this.$t('capacity-slider.label.huge'),
      ],
      satisfactionEmojis: { 0.75: '😭', 1: '🙂', 1.25: '😍' },
    };
  },
};
</script>
