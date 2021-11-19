<template>
  <div class="rotateLogo" :style="{'margin-bottom': height + 'px'}">
    <v-img
        :aspect-ratio="1"
        :max-height="height"
        :min-height="height"
        :max-width="height"
        :style="{ transform: 'rotateZ(' + -rotation +'deg)'}"
        class="rotating"
        src="cheese-slice.svg"></v-img>
  </div>
</template>

<script>
export default {
  name: 'LoadingCheese',
  data() {
    return {
      height: 200,
      seconds: 0,
      interval: null
    }
  },
  computed: {
    rotation() {
      return - this.seconds * 360 / 60;
    },
    marginTop() {
      return this.height;
    }
  },
  created() {
    this.interval = setInterval(() => {
      this.seconds++;
    }, 1000);
    // Triggers a rotaiton instantly
    setTimeout(() => {
      this.seconds++;
    }, 10)
  },
  destroyed() {
    clearInterval(this.interval);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rotating {
  transition: transform 1s ease-in-out;
  transform-origin: 50% 100%;
}
</style>
