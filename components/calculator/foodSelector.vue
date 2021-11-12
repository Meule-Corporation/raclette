<template>
  <div class="ma-2">
    <v-chip
        v-for="food in availableFoods"
        :key="food.id"
        class="ma-1"
        color="yellow lighter-2"
        x-large
        :outlined="!selectedFoods.includes(food)"
        @click="$emit('food-clicked', food)"
    >
      <div>
      <v-avatar left rounded>
        <v-img :src="`food/${food.id}.svg`" />
      </v-avatar>
      </div>
      {{ $t(food.id) }}
    </v-chip>
  </div>
</template>

<script>
export default {
  name: "FoodSelector",
  props: {
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
  },
  data() {
    return {
      selectedItems: []
    }
  }
}
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
