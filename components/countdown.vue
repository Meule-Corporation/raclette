<template>
  <v-row v-if="diff > 0">
    <v-col align="center">
      <v-chip
        color="yellow lighten-2"
        class="ma-2 font-weight-bold custom-chip"
        x-large
      >
        {{ twoDigits(days) }} {{ $tc('day', days) }}
      </v-chip>
      <v-chip
        color="yellow lighten-2"
        class="ma-2 font-weight-bold custom-chip"
        x-large
      >
        {{ twoDigits(hours) }} {{ $tc('hour', hours) }}
      </v-chip>
      <v-chip
        color="yellow lighten-2"
        class="ma-2 font-weight-bold custom-chip"
        x-large
      >
        {{ twoDigits(minutes) }} {{ $t('minute') }}
      </v-chip>
      <v-chip
        color="yellow lighten-2"
        class="ma-2 font-weight-bold custom-chip"
        x-large
      >
        {{ twoDigits(seconds) }} {{ $t('second') }}
      </v-chip>
      <loading-cheese :seconds="seconds"></loading-cheese>
    </v-col>
  </v-row>
</template>

<script>
const DEADLINE = 'October 25, 2021'
let interval = null

export default {
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      date: null,
      diff: 0,
    }
  },
  computed: {
    seconds() {
      return Math.trunc(this.diff) % 60
    },
    minutes() {
      return Math.trunc(this.diff / 60) % 60
    },
    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24
    },
    days() {
      return Math.trunc(this.diff / 60 / 60 / 24)
    },
  },
  watch: {
    now() {
      this.diff = this.date - this.now
      if (this.diff <= 0) {
        this.diff = 0
        // Remove interval
        clearInterval(interval)
      }
    },
  },
  created() {
    const endTime = DEADLINE
    this.date = Math.trunc(Date.parse(endTime.replace(/-/g, '/')) / 1000)
    if (!this.date) {
      throw new Error("Invalid props value, correct the 'deadline' or 'end'")
    }
    interval = setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
    this.diff = this.date - this.now;
  },
  destroyed() {
    clearInterval(interval)
  },
  methods: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return '0' + value.toString()
      }
      return value.toString()
    },
  },
}
</script>

<style scoped>
.custom-chip.v-chip {
  border: solid 4px;
  border-color: black !important;
}
</style>
