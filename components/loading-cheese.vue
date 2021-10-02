<template>
  <div class="rotateLogo" :style="{'margin-bottom': height + 'px'}">
    <v-img
        :aspect-ratio="1"
        :max-height="height"
        :min-height="height"
        :max-width="height"
        :style="{ transform: 'rotateZ(' + rotation +'deg)'}"
        class="rotating"
        src="cheese-slice.svg"></v-img>
  </div>
</template>

<script>
export default {
  name: 'RotatingLogo',
  props: {
    seconds: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      height: 200
    }
  },
  computed: {
    rotation() {
      return - this.seconds * 360 / 60;
    },
    marginTop() {
      return this.height;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rotating {
  transition: transform 1s ease-in-out;
  transform-origin: 50% 100%;
}
</style>