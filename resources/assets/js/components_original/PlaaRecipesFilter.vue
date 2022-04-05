<template>
	<ul class="flex list-none p-0">
		<li :class="liClass">
			<a href="#" :class="[aClass, getActiveClass('all')]" v-on:click.prevent="filterRecipes('all')">
					|| 'PlaaRecipesFilter.filter_all_title' ||
			</a>
		</li>
		<li :class="liClass">
			<a href="#" :class="[aClass, getActiveClass('breakfast')]" v-on:click.prevent="filterRecipes('breakfast')">
					|| 'PlaaRecipesFilter.filter_breakfast_title' ||
			</a>
		</li>
		<li :class="liClass">
			<a href="#" :class="[aClass, getActiveClass('lunch')]" v-on:click.prevent="filterRecipes('lunch')">
					|| 'PlaaRecipesFilter.filter_lunch_title' ||
			</a>
		</li>
		<li :class="liClass">
			<a href="#" :class="[aClass, getActiveClass('dinner')]" v-on:click.prevent="filterRecipes('dinner')">
					|| 'PlaaRecipesFilter.filter_dinner_title' ||
			</a>
		</li>
		<li :class="liClass">
			<a href="#" :class="[aClass, getActiveClass('dessert')]" v-on:click.prevent="filterRecipes('dessert')">
					|| 'PlaaRecipesFilter.filter_dessert_title' ||
			</a>
		</li>
		<li :class="liClass">
			<a href="#" :class="[aClass, getActiveClass('snack')]" v-on:click.prevent="filterRecipes('snack')">
					|| 'PlaaRecipesFilter.filter_snacks_title' ||
			</a>
		</li>
	</ul>
</template>

<script>

export default {
  data () {
    return {
      currentMeal: 'all',
      liClass: 'mx-1',
      aClass: 'border-1 border-transparent hover:border-grey-light px-4 py-1 rounded-full text-xs tracking-wide uppercase'
    };
  },

  methods: {
    getActiveClass: function (meal) {
      return this.currentMeal == meal ? 'border-grey-light' : '';
    },

    filterRecipes (selectedMeal) {
      this.currentMeal = selectedMeal;
      EventBus.$emit('plaa-recipe-filter-click', {
        meal: selectedMeal
      });

      this.$root.replaceState({
        meal: selectedMeal
      });
    }
  },

  mounted () {
    EventBus.$on('plaa-recipe-filter-click', (payload) => {
      this.currentMeal = payload.meal;
    });
  }
};
</script>
