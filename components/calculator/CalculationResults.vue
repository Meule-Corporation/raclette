<template>
  <CardCheese>
    <v-card-title>
      {{ $t('calculator.card.result.title') }}
    </v-card-title>

    <v-card-text>
      <v-list color='transparent'>
        <v-list-item
            v-for='result in results' :key="result.id"
        >
          <v-list-item-avatar rounded left>
            <v-img :src="`food/${result.id}.svg`"/>
          </v-list-item-avatar>

          <v-list-item-content>
            <p class="font-weight-bold text-left align-center mb-0">
              {{ $t(result.id) }} :
              {{ Math.round(result.quantity + Number.EPSILON) }}
              {{ $tc(result.unit, Math.round(result.quantity + Number.EPSILON)) }}
            </p>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <span>
          {{ $t('moreInfos.text') }}&nbsp<NuxtLink :to="localePath('/about-us')">{{ $t('moreInfos.link') }}</NuxtLink>
        </span>
      </v-card-actions>
    </v-card-text>
  </CardCheese>
</template>

<script>
import CardCheese from '@/components/CardCheese';

export default {
  name: 'CalculationResults',
  components: { CardCheese },
  props: {
    results: {
      type: Array,
      required: true,
    }
  }
}
</script>
