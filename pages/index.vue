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
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Quelle quantité de fromage pour une raclette (4 personnes)",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "<p></p><p>Online purchases may be returned via a major parcel carrier. <a href=http://example.com/returns> Click here </a> to initiate a return.</p>"
        }
      }]
    }
  }
}
</script>