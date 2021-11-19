<template>
  <v-snackbar
    v-model="show"
    vertical
    :timeout="-1"
    outlined
    rounded
    :right='!isMobile'
    :app='!isMobile'
    :transition="transition"
  >
    <span class="cookie-consent-message">
      {{ $t('cookie.message') }}
    </span>

    <template v-slot:action="{ attrs }">
      <v-row no-gutters>
        <v-col>
          <ButtonCheese v-bind="attrs" size="x-small" class="ma-2" @click="leave">
            {{ $t('cookie.refuse') }}
          </ButtonCheese>
        </v-col>
        <v-col>
          <ButtonCheese v-bind="attrs" size="x-small" class="ma-2" @click="dismiss">
            {{ $t('cookie.accept') }}
          </ButtonCheese>
        </v-col>
      </v-row>
    </template>
  </v-snackbar>
</template>

<script>
import ButtonCheese from '@/components/ButtonCheese';

export default {
  name: 'CookieConsent',
  components: { ButtonCheese },
  data() {
    return {
      show: undefined,
    };
  },
  computed: {
    cookie() {
      return !this.getCookie('cookie_a_la_raclette');
    },
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    transition() {
      return this.isMobile ? 'slide-y-reverse-transition' : 'fade-transition';
    }
  },
  beforeMount() {
    setTimeout(() => {
      this.show = this.cookie;
    }, 1000);
  },
  methods: {
    dismiss() {
      this.show = false;
      const exdate = new Date();
      exdate.setDate(exdate.getDate() + 365);
      const cookie = [
        `cookie_a_la_raclette=1`,
        `expires=${exdate.toUTCString()}`,
        `path=/`,
      ];
      document.cookie = cookie.join(';');
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      return parts.length !== 2 ? undefined : parts.pop().split(';').shift();
    },
    leave() {
      location.href =
        'https://www.marmiton.org/recettes/recette_cookies-maison_86989.aspx';
    },
  },
};
</script>
