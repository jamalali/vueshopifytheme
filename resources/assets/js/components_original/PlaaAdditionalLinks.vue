<template>
	<ul v-if="!hidden" class="text-center lg:text-right list-none lg:mt-10 font-bold px-0">
		<li class="bg-purple-dark text-white lg:pr-10 py-5 font-black tracking-wider uppercase">
			|| 'PlaaAdditionalLinks.additional_links_title' ||
		</li>

		<li v-for="(link, index) in links" :key="index" :index="index">
			<a :href="link.url" :class="link.classList" target="_blank">
				{{ link.title }}
			</a>
		</li>
	</ul>
</template>

<script>
export default {
  data () {
    return {
      hidden: false
    };
  },

  props: {
    links: {
      type: Array,
      required: true
    },
    week: {
      type: String,
      required: true
    }
  },

  mounted () {
    EventBus.$on('plaa-week-filter-click', (payload) => {
      const selectedWeek = payload.week;
      this.hidden = this.isHidden(selectedWeek);
    });

    this.hidden = this.isHidden(1);
  },

  methods: {
    isHidden (selectedWeek) {
      if (this.week != selectedWeek) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
