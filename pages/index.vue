<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h1 class="text-sm-h1 text-center">{{ $t('raclette') }}</h1>
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