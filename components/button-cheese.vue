<template>
  <v-btn class="button-cheese" :x-large="size === 'x-large'" :x-small="size === 'x-small'" rounded color="yellow lighten-2" v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: "ButtonCheese",
  props: {
    size: {
      type: String,
      default: () => 'x-large'
    }
  }
}
</script>

<style scoped>
.button-cheese.v-btn {
  border-color: black !important;
  font-weight: bold;
}

.button-cheese.v-btn.v-size--x-large {
  border: 4px solid;
}


.button-cheese.v-btn.v-size--x-small {
  border: 2px solid;
}


.button-cheese.v-btn.v-btn--disabled {
  border-color: unset !important;
}
</style>
