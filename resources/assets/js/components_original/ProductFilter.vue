<template>
  <div
    :class="['relative w-full sm:w-1/2 md:flex-1 md:w-auto', { 'shadow-lg': showOptions }]"
    @mouseleave="showOptions = false"
  >
    <div
      :class="[
        'cursor-pointer flex font-bold items-center justify-between p-10 text-base uppercase md:text-lg',
        { 'hover:bg-grey-lighter': ! showOptions }
      ]"
      @click="showOptions = !showOptions"
    >
      <div>{{ title }}</div>
      <div>
        <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="17298.5 -23902.5 15.699 9.4">
          <path
            fill="none"
            stroke="#1d1d1d"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="3px"
            d="M2,2,8.4,8.4,14.7,2"
            transform="translate(17298 -23903)"
          />
        </svg>
      </div>
    </div>

    <ul
      class="absolute bg-white list-none p-0 shadow-lg text-base w-full z-50 md:text-lg"
      v-if="showOptions"
    >
      <li
        class="border-grey-lighter border-t-2 cursor-pointer flex font-bold items-center justify-between p-10 uppercase"
        v-for="(option, index) in options"
        :key="index"
        @click="toggleFilter(option)"
      >
        {{ option }}
        <div class="w-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="8929.5 -23733.582 39 39">
            <g transform="translate(8518 -24148)">
              <circle fill="#ededed" cx="19.5" cy="19.5" r="19.5" transform="translate(411.5 414.418)"/>
              <path fill="none" stroke="#000" stroke-width="4px" d="M-5529.326,1097.7l4.7,5.23,13.433-11.5" transform="translate(5887.572 -951.807) rotate(-3)" v-if="active[option] == true"/>
            </g>
          </svg>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },

    options: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      showOptions: false,
      active: {}
    };
  },

  methods: {
    toggleFilter (option) {
      this.showOptions = false;
      this.active = { ...this.active, [option]: !this.active[option] };
      EventBus.$emit('toggle-product-filter', option);
    }
  }
};
</script>
