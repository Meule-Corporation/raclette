<template>
  <v-btn class="button-cheese" :size="size" rounded color="yellow-lighten-2" v-bind="$attrs">
    <slot />
  </v-btn>
</template>

<script setup>
defineOptions({ inheritAttrs: true })

defineProps({
  size: {
    type: String,
    default: 'x-large'
  }
})
</script>

<style scoped>
.button-cheese.v-btn {
  border-color: black !important;
  font-weight: bold !important;
}

.button-cheese.v-btn.v-btn--size-x-large {
  border: 4px solid !important;
}

.button-cheese.v-btn.v-btn--size-x-small {
  border: 2px solid !important;
}

.button-cheese.v-btn.v-btn--disabled {
  border-color: unset !important;
}
</style>
