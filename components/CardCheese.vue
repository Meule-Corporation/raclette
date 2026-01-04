<template>
  <v-card v-bind="$attrs" :elevation="0" class="card-cheese" rounded="xl" color="yellow-lighten-2">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}"></slot>
    </template>
  </v-card>
</template>

<script setup>
defineOptions({ inheritAttrs: true })
</script>

<style scoped>
.card-cheese.v-card {
  border: 4px solid;
  border-color: black !important;
  font-weight: bold;
}
</style>
