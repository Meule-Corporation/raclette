<template>
  <v-col>
    <v-row class="justify-center flex-nowrap" >
      <v-img src="minus.svg" class="ma-2 numberOfPeoplePicker-button" max-width="50px" @click="decrement"></v-img>
      <span class="ma-2 text-h4" v-text="count"></span>
      <span class="ma-2 text-h4" v-text="$tc(label, count)"></span>
      <v-img src="add.svg" class="ma-2 numberOfPeoplePicker-button" max-width="50px" @click="increment"></v-img>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    decrement() {
      if (this.count > 0) {
        this.$emit('count-updated', this.count - 1);
      }
    },
    increment() {
      this.$emit('count-updated', this.count + 1);
    },
  },
};
</script>

<style scoped>
.numberOfPeoplePicker-button {
  cursor: pointer;
}
</style>
