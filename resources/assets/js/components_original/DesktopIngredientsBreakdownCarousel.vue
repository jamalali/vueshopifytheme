<template>
  <div class="relative mt-8">
    <div class="absolute w-4 cursor-pointer left-0 transition-300 hover:scale-1.2" @click="prev" style="top:50%;">
      <slider-chevron direction="left" />
    </div>

    <slick ref="slick" :options="slickOptions" class="mx-8">
      <div
        class="cursor-pointer font-bold text-center text-sm uppercase"
        v-for="(ingredient, index) in ingredients"
        :key="index"
        @click="$emit('ingredient-selected', index)"
      >
        <img class="transition-300 hover:scale-1.2" :src="ingredient.image" :alt="ingredient.name">
        {{ ingredient.name }}
      </div>
    </slick>

    <div class="absolute w-4 cursor-pointer right-0 transition-300 hover:scale-1.2" @click="next" style="top:50%;">
      <slider-chevron direction="right" />
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import SliderChevron from './SliderChevron';

export default {
  components: { Slick, SliderChevron },

  props: {
    ingredients: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      slickOptions: {
        arrows: false,
        centerMode: false,
        slidesToShow: 7,
        infinite: false,
        centerPadding: 0,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 6
            }
          }
        ]
      }
    };
  },

  watch: {
    ingredients () {
      this.reInit();
    }
  },

  methods: {
    next () {
      this.$refs.slick.next();
    },

    prev () {
      this.$refs.slick.prev();
    },

    reInit () {
      this.$nextTick(() => this.$refs.slick.reSlick());
    }
  }
};
</script>
