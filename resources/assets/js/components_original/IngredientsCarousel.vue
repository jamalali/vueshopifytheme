<template>
  <div class="relative">
    <slick class="ingredients-slider" ref="slick" :options="slickOptions">
      <div
        v-for="(ingredient, key) in ingredients"
        :key="key"
      >
        <img class="mx-auto w-full" :src="ingredient.background" :alt="ingredient.name">

        <div class="ingredient-description bg-black p-8 text-white">
          <h2 class="font-extrabold text-base tracking-wide uppercase">
            {{ ingredient.name }}
          </h2>

          <p class="leading-loose mb-0 border-b-2 border-white pb-4 text-xs" v-if="ingredient.description">
            {{ ingredient.description }}
          </p>

          <p class="leading-loose mb-0 border-b-2 border-white pb-4 text-xs" v-else>
            || 'IngredientsCarousel.default_description_text' ||
          </p>
        </div>
      </div>
    </slick>

    <slider-chevron color="white" class="absolute ml-2 top-0 left-0 text-white w-6" direction="left" :style="{ marginTop: '106px' }" @click.native="prev" />
    <slider-chevron color="white" class="absolute mr-2 top-0 right-0 text-white w-6" direction="right" :style="{ marginTop: '106px' }" @click.native="next" />
  </div>
</template>

<script>
import Slick from 'vue-slick';
import SliderChevron from './SliderChevron';
import 'slick-carousel/slick/slick.css';

export default {
  props: ['ingredients'],

  components: { Slick, SliderChevron },

  data () {
    return {
      slickOptions: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        centerPadding: 0
      }
    };
  },

  methods: {
    reInit () {
      this.$nextTick(() => this.$refs.slick.reSlick());
    },

    prev () {
      this.$refs.slick.prev();
    },

    next () {
      this.$refs.slick.next();
    }
  }
};
</script>
