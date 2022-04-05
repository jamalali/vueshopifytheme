<template>
    <a class="lg:hidden block font-bold lg:hidden p-2 text-center" href="#" v-on:click.prevent="toggleMenu()">
        || 'PlaaMenuToggle.menu_title_lowercase' ||
    </a>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      menu: null
    };
  },

  computed: {
    getActiveClass: function () {
      return this.currentWeek == this.week ? this.activeClass : '';
    }
  },

  methods: {
    toggleMenu () {
      this.menu.classList.toggle('hidden');
    }
  },

  mounted () {
    this.menu = document.getElementById('programme-menu');

    // This is to close the menu after a click, if needed
    // EventBus.$on('plaa-menu-toggle', (payload) => {
    //   const state = payload.state;

    // 	switch(state) {
    // 		case 'close':
    // 			this.menu.classList.add('hidden');
    // 	}
    // });
  }
};
</script>
