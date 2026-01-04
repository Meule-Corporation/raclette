<template>
  <v-col>
    <v-row class="justify-center flex-nowrap">
      <v-img src="/minus.svg" class="ma-2 numberOfPeoplePicker-button" max-width="50px" @click="decrement"></v-img>
      <span class="ma-2 text-h4">{{ count }}</span>
      <span class="ma-2 text-h4">{{ $t(label, count) }}</span>
      <v-img src="/add.svg" class="ma-2 numberOfPeoplePicker-button" max-width="50px" @click="increment"></v-img>
    </v-row>
  </v-col>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  count: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['count-updated'])

function decrement() {
  if (props.count > 0) {
    emit('count-updated', props.count - 1)
  }
}

function increment() {
  emit('count-updated', props.count + 1)
}
</script>

<style scoped>
.numberOfPeoplePicker-button {
  cursor: pointer;
}
</style>
