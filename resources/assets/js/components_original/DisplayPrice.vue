<template>
  <span class="relative uppercase font-bold tracking-wide notranslate">{{ finalPrice }}</span>
</template>

<script>
export default {
  props: ['price'],

  data () {
    return {
      currency: "|| 'globals.settings.currency_code' ||",
      locale: "|| 'globals.settings.store_locale_full' ||"
    };
  },

  computed: {
    finalPrice () {
      const formatter = new Intl.NumberFormat(this.locale, { style: 'currency', currency: this.currency });
      return formatter.format(this.price / 100);
    }
  }
};
</script>
