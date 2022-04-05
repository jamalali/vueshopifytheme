<template>
  <a
    @click.prevent="goQuiz"
    :href="options.link"
    class="TypeformLink"
    :class="options.classes">
    {{ options.text ? options.text : 'Start Quiz' }}
  </a>
</template>

<script>
import * as typeformEmbed from '@typeform/embed';

export default {
  props: {
    options: {
      type: Object
    }
  },

  methods: {
    hideFreshChat () {
      // We hide the Freshchat widget so it doesn't turn up over our nice quiz.
      const chatWidget = document.getElementById('fc_frame');
      chatWidget.style.zIndex = 1;
    },

    goQuiz (e) {
      const url = e.target.href; // Get the URL for the form from options.
      // this.hideFreshChat();
      const ref = typeformEmbed.makePopup(
        url,
        {
          mode: 'popup',
          hideScrollbars: true,
          onSubmit: function () {
            console.log('Typeform successfully submitted');
          }
        }
      );
      ref.open();
    }
  }
};
</script>

<style scoped>

</style>
