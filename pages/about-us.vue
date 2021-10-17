<template>
  <v-container>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <cheeseTitle></cheeseTitle>
    </v-col>
    <v-col cols="12">
      <card-cheese>
        <v-img
            class="white--text align-end"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
      </card-cheese>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" sm="4">
      <card-cheese>
        <v-img
            class="white--text align-end"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
      </card-cheese>
    </v-col>
    <v-col cols="12" sm="4">
      <card-cheese>
        <v-img
            class="white--text align-end"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
      </card-cheese>
    </v-col>
    <v-col cols="12" sm="4" >
      <card-cheese>
        <v-img
            class="white--text align-end"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>
        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
      </card-cheese>
    </v-col>

  </v-row>
  </v-container>
</template>

<script>
import cheeseTitle from '@/components/cheese-title'

export default {
  components: {cheeseTitle}
}
</script>
