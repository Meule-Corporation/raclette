<template>
  <v-snackbar
    v-model="show"
    transition="fade"
    :vertical="true"
    :timeout="-1"
    content-class="snack-content"
    :right="true"
    outlined
    rounded
    app
    absolute
  >
    <span class="cookie-consent-message">
      {{ $t('cookie.message') }}
    </span>

    <template #action="{}">
      <v-row no-gutters>
        <v-col>
          <ButtonCheese size="x-small" class="ma-2" @click="leave">
            {{ $t('cookie.refuse') }}
          </ButtonCheese>
        </v-col>
        <v-col>
          <ButtonCheese size="x-small" class="ma-2" @click="dismiss">
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
  props: {
    transition: {
      type: String,
      default: 'cookie-consent-transition',
    },
  },
  data() {
    return {
      show: undefined,
    };
  },
  computed: {
    cookie() {
      return !this.getCookie('cookie_a_la_raclette');
    },
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

<style scoped>
.v-snack__action {
  align-self: auto !important;
}

.snack-content {
  margin-right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
