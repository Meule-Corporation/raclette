<template>
  <v-card v-bind="$attrs" :elevation='0' class="card-cheese" rounded="xl" color='yellow lighten-2' v-on="$listeners">
    <template v-for="(index, name) in $scopedSlots" #[name]="data">
      <slot :name="name" v-bind="data"></slot>
    </template>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: "CardCheese"
}
</script>

<style scoped>
.card-cheese.v-card {
  border: 4px solid;
  border-color: black !important;
  font-weight: bold;
}
</style>
