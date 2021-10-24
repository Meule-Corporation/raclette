<template>
  <v-btn class="button-cheese" x-large rounded color="yellow lighten-2" v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: "button-cheese"
}
</script>

<style scoped>
.button-cheese.v-btn {
  border: 4px solid;
  border-color: black !important;
  font-weight: bold;
}

.button-cheese.v-btn.v-btn--disabled {
  border-color: unset !important;
}
</style>
