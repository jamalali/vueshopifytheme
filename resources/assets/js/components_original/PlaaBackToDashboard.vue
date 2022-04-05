<template>
  <div v-if="show" class="mb-2 font-semibold">
    <a href="javascript:history.back()">
      &#60; {{ text }}
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String
      }
    },

    data() {
      return {
        show: false,
        text: 'Back'
      };
    },

    methods: {
      checkReferrer: function () {
        const referrer = document.referrer;

        if (referrer == '') { return false; }

        const url = new URL(referrer);
        const path = url.pathname;

        if (path.includes('/pages/plaa-dashboard-')) {
          this.text = '|| 'PlaaBackToDashboard.text_back_to_dashboard' ||';
          this.show = true;
        } else if (path.includes('/blogs/plaa-')) {
          this.text = '|| 'PlaaBackToDashboard.text_back' ||';
          this.show = true;
        }
      }
    },

    mounted() {
      this.checkReferrer();
    },
  };
</script>
