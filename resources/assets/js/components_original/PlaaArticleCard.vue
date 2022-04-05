<template>
  <a v-if="!hidden" :href="url">
    <div class="flex flex-col justify-between w-70 lg:w-104 h-50 lg:h-72 relative rounded hover:shadow-sm p-4 mr-4 my-4 cursor-pointer bg-center bg-cover" :style="{'background-image': 'url(' + imageSrc + ')'}">
      <div class="absolute bg-black h-full opacity-50 top-0 w-full left-0"></div>
      <div class="flex z-10">
        <template v-for="(tag, index) in tags">
          <plaa-article-tag
            :key="index"
            :tag="tag">
          </plaa-article-tag>
        </template>
      </div>
      <div class="flex z-10">
        <div class="flex-grow pr-3">
          <h3 class="text-white font-bold text-2xl tracking-normal mb-2">
              {{ title }}
          </h3>
          <p class="text-white text-xs m-0">
              {{ authorFirstname }}
          </p>
        </div>
        <div class="flex flex-col">
          <template v-if="time">
            <span class="font-semibold text-center text-white text-sm uppercase">
                {{ time }}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="27.873" height="31.628" viewBox="0 0 27.873 31.628">
                <g id="Group_6568" data-name="Group 6568" transform="translate(0 0.75)">
                <g id="Ellipse_941" data-name="Ellipse 941" transform="translate(0 3.005)" fill="none" stroke="#fff" stroke-width="1.5">
                    <circle cx="13.937" cy="13.937" r="13.937" stroke="none"/>
                    <circle cx="13.937" cy="13.937" r="13.187" fill="none"/>
                </g>
                <path id="Path_37099" data-name="Path 37099" d="M0,0V9.111" transform="translate(17.541 9.902) rotate(30)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                <path id="Path_37100" data-name="Path 37100" d="M0,0V3.633" transform="translate(13.937)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                <path id="Path_37101" data-name="Path 37101" d="M0,0V2.018" transform="translate(22.002 3.004) rotate(30)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                <path id="Path_37102" data-name="Path 37102" d="M0,2.019V0" transform="translate(7.401 4.753) rotate(150)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                </g>
            </svg>
          </template>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    blog: {
      type: String
    },
    url: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    authorFirstname: {
      type: String
    },
    time: {
      type: String
    },
    workoutWeek: {
      type: String
    },
    workoutNum: {
      type: String
    },
    tags: {
      type: Object
    },
    meal: {
      type: String
    }
  },

  data () {
    return {
      selectedWeek: '1',
      currentMeal: 'all',
      hidden: false
    };
  },

  mounted () {
    EventBus.$on('plaa-week-filter-click', (payload) => {
      const selectedWeek = payload.week;
      if (this.blog == 'workouts') {
        this.hidden = this.isHidden(selectedWeek);
      }
    });

    EventBus.$on('plaa-recipe-filter-click', (payload) => {
      const selectedMeal = payload.meal;
      if (this.blog == 'recipes') {
        this.hidden = this.isHiddenByMeal(selectedMeal);
      }
    });

    if (this.blog == 'workouts') {
      this.hidden = this.isHidden(this.selectedWeek);
    }

    if (this.blog == 'recipes') {
      this.hidden = this.isHiddenByMeal(this.currentMeal);
    }
  },

  methods: {
    isHidden (selectedWeek) {
      if (this.workoutWeek != selectedWeek) { return true; } else { return false; }
    },

    isHiddenByMeal (selectedMeal) {
      if (selectedMeal == 'all') { return false; } else if (this.meal != selectedMeal) { return true; } else { return false; }
    }
  }
};
</script>
