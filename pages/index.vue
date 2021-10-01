<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <h1 class="text-h1 text-center mb-12">{{ $t('raclette') }}</h1>
      <countdown />
    </v-col>
  </v-row>
</template>

<script>
import countdown from '@/components/countdown'

export default {
  components: { countdown },
}
</script>