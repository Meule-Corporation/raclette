<template>
  <div class="ma-2">
    <v-chip
      v-for="food in availableFoods"
      :key="food.id"
      class="ma-1"
      color="yellow-lighten-2"
      size="x-large"
      :variant="selectedFoods.includes(food) ? 'flat' : 'outlined'"
      @click="$emit('food-clicked', food)"
    >
      <template #prepend>
        <v-avatar start rounded>
          <v-img :src="`/food/${food.id}.svg`" />
        </v-avatar>
      </template>
      {{ $t(food.id) }}
    </v-chip>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  availableFoods: {
    type: Array,
    default: () => []
  },
  selectedFoods: {
    type: Array,
    default: () => []
  }
})

defineEmits(['food-clicked'])
</script>

<style>
/* Allow for bigger img */
.v-chip .v-avatar {
  height: 40px !important;
  min-width: 40px !important;
  width: 40px !important;
}

.v-chip {
  border-width: 4px !important;
  border-style: solid;
}

.v-chip__content {
  color: black !important;
}
</style>
