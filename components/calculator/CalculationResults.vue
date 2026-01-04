<template>
  <CardCheese>
    <v-card-title>
      {{ $t('calculator.card.result.title') }}
    </v-card-title>

    <v-card-text>
      <v-list bg-color="transparent">
        <v-list-item v-for="result in results" :key="result.id">
          <template #prepend>
            <v-avatar rounded>
              <v-img :src="`/food/${result.id}.svg`" />
            </v-avatar>
          </template>
          <v-list-item-title class="font-weight-bold text-left">
            {{ $t(result.id) }} :
            {{ Math.round(result.quantity + Number.EPSILON) }}
            {{ $t(result.unit, Math.round(result.quantity + Number.EPSILON)) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <span>
          {{ $t('moreInfos.text') }}&nbsp;<NuxtLink :to="localePath('/about-us')">{{ $t('moreInfos.link') }}</NuxtLink>
        </span>
      </v-card-actions>
    </v-card-text>
  </CardCheese>
</template>

<script setup>
const localePath = useLocalePath()

defineProps({
  results: {
    type: Array,
    required: true,
  }
})
</script>
