<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1 class="text-h1 text-center mb-12">RACLETTE</h1>
      <v-row>
        <v-col align="center">
          <v-chip dark color="teal" class="ma-2" x-large>
            {{ twoDigits(days) }} {{ days > 1 ? 'days' : 'day' }}
          </v-chip>
          <v-chip dark color="teal" class="ma-2" x-large>
            {{ twoDigits(hours) }} {{ hours > 1 ? 'hours' : 'hour' }}
          </v-chip>
          <v-chip dark color="teal" class="ma-2" x-large>
            {{ twoDigits(minutes) }} min
          </v-chip>
          <v-chip dark color="teal" class="ma-2" x-large>
            {{ twoDigits(seconds) }} sec
          </v-chip>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
const DEADLINE = 'October 12, 2021'
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