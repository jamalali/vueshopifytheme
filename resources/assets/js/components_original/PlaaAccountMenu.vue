<template>
  <ul class="list-none p-0 pt-10 pb-38">
        <li v-if="showHead" class="my-2 p-4 border-b-2 border-plaa-green refer-a-friend"><a href="/pages/plaa" class="block font-bold text-plaa-green">|| 'PlaaAccountMenu.heading_1' ||</a></li>
        <li v-if="strength" class="my-2 p-4 border-b-2 border-grey-light"><a href="/pages/plaa-dashboard-strength" class="block pl-1/6 font-bold">|| 'PlaaAccountMenu.heading_2' ||</a></li>
        <li v-if="endurance" class="my-2 p-4 border-b-2 border-grey-light"><a href="/pages/plaa-dashboard-endurance" class="block pl-1/6 font-bold">|| 'PlaaAccountMenu.heading_3' ||</a></li>
        <li v-if="functional" class="my-2 p-4 border-b-2 border-grey-light"><a href="/pages/plaa-dashboard-function" class="block pl-1/6 font-bold">|| 'PlaaAccountMenu.heading_4' ||</a></li>
  </ul>
</template>

<script>
export default {
  props: {
    strength: {
      type: Boolean,
      default: (!!(localStorage.getItem('plaa-strength')))
    	},
    endurance: {
      type: Boolean,
      default: (!!(localStorage.getItem('plaa-endurance')))
    },
    functional: {
      type: Boolean,
      default: (!!(localStorage.getItem('plaa-function')))
    },
    showHead: {
      type: Boolean,
      default: false
    }
  },
  created: function () {
    if (this.strength || this.endurance || this.functional) {
      this.showHead = true;
    }
  }
};
</script>
