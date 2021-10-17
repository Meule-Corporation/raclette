<template>
  <card-cheese>
    <v-card-title>
      {{ $t('calculator.card.result.title') }}
    </v-card-title>

    <v-card-text>
      <v-list color='transparent'>
        <v-list-item
            v-for='result of results' :key="`${result.id}-${result.unit}`"
        >
          <v-list-item-avatar rounded left>
            <v-img :src="`food/${result.id}.svg`"/>
          </v-list-item-avatar>

          <v-list-item-content>
            <p class="font-weight-bold text-left align-center mb-0">
              {{ $t(result.id) }}:
              {{ Math.round(result.quantity + Number.EPSILON) }}
              {{ $tc(result.unit, result.quantity) }}
            </p>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </card-cheese>
</template>
<script>
export default {
  name: 'CalculationResults',
  props: {
    results: {}
  }
}
</script>