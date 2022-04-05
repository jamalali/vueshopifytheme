<template>
  <a href="#" :class="[this.linkClass, getActiveClass]" v-on:click.prevent="filterArticles(week)">
    {{ linkTitle }}
  </a>
</template>

<script>
export default {
  data () {
    return {
      currentWeek: 1
    };
  },

  props: {
    linkClass: {
      type: String
    },
    activeClass: {
      type: String
    },
    linkTitle: {
      type: String
    },
    week: {
      type: String
    }
  },

  computed: {
    getActiveClass: function () {
      return this.currentWeek == this.week ? this.activeClass : '';
    }
  },

  methods: {
    filterArticles (selectedWeek) {
      EventBus.$emit('plaa-week-filter-click', {
        week: selectedWeek
      });

      // This is to close the menu after a click, if needed
      // EventBus.$emit('plaa-menu-toggle', {
      //   state: 'close'
      // });

      this.$root.replaceState({
        week: selectedWeek
			  });
    }
  },

  mounted () {
    EventBus.$on('plaa-week-filter-click', (payload) => {
      const selectedWeek = payload.week;
      this.currentWeek = selectedWeek;
    });
  }
};
</script>
