<template>
  <div class="ImageTextButton">
    <div class="md:flex flex-wrap mx-auto px-8 pt-16 pb-1 justify-center align-center md:px-16 md:py-24 md:max-w-xl xl:max-w-3xl">

      <template v-for="(item, index) in items">
        <div class="mx-auto mb-16 sm:w-80 md:w-66 md:mb-0 lg:w-80 xl:w-104 xxl:w-128" :key="index">
          <h2
            :class="['heading-' + index]"
            class="font-bold uppercase text-3xl text-black-full text-center md:text-3xl lg:text-4xl xl:text-4xl"
            v-html="item.settings.title ? item.settings.title : (index == 0 ? 'Perform' : 'Ritual')"></h2>
          <p
            :class="['intro-text-' + index]"
            class="font-medium leading-normal mt-3 mb-6 text-black-1 text-center text-base md:text-lg xl:text-lg xl:mt-6"
            v-html="item.settings.introText ? item.settings.introText : (index == 0 ? 'A blend of 25g plant protein, BCAAs, turmeric and digestive enzymes to help you train harder and recover faster.' : 'A simple blend of pea, hemp and quinoa to add extra protein to your daily routine.')"></p>
          <a
            :class="['image-link-' + index]"
            :href="item.settings.buttonUrl">
            <img
              :class="['image-' + index]"
              class="w-70 mx-auto block mt-12 md:mt-0"
              :src="item.settings.image ? item.settings.image : (index == 0 ? options.imageDefault01 : options.imageDefault02)"
              :alt="item.options.alt != '' ? item.options.alt : (item.settings.title ? item.settings.title : '')" />
          </a>
          <div class="hero-caption-bullets">
            <ul
              :class="['body-text-' + index]"
              class="text-left font-semibold leading-relaxed mt-3 mb-12 text-black-2 text-base md:text-base lg:mt-6 lg:mb-16">
              <template v-if="(!item.settings.bodyText || item.settings.bodyText == '') && index == 0">
                <li v-for="(item, index) in performList" :key="index">{{ item }}</li>
              </template>
              <template v-else-if="!item.settings.bodyText || item.settings.bodyText == ''">
                <li v-for="(item, index) in ritualList" :key="index">{{ item }}</li>
              </template>
              <template v-else>
                <li v-for="(item, index) in (item.settings.bodyText.split(' | '))" :key="index">{{ item }}</li>
              </template>
            </ul>
          </div>
          <h3
            class="uppercase font-extrabold text-black text-left text-xl md:text-2xl ml-4 md:-ml-2">Perfect For:</h3>
          <ul
            :class="['perfect-for-points-' + index]"
            class="text-left font-semibold leading-relaxed mt-3 mb-12 text-grey-darker text-base md:text-base lg:mt-6 list-none">
            <template v-if="(!item.settings.perfectForPoints || item.settings.perfectForPoints == '') && index == 0">
              <li v-for="(item, index) in performPoints" :key="index"><img :src="options.imageTick" class="w-4" />{{ item }}</li>
            </template>
            <template v-else-if="!item.settings.perfectForPoints || item.settings.perfectForPoints == ''">
              <li v-for="(item, index) in ritualPoints" :key="index"><img :src="options.imageTick" class="w-4" />{{ item }}</li>
            </template>
            <template v-else>
              <li v-for="(item, index) in (item.settings.perfectForPoints.split(' | '))" :key="index"><img :src="options.imageTick" class="w-4" />{{ item }}</li>
            </template>
          </ul>
          <div class="text-center md:text-left md:-ml-2">
            <a
              class="secondary btn-home"
              :href="item.settings.buttonUrl"
              v-html="item.settings.buttonText ? item.settings.buttonText : 'Shop Now'"></a>
          </div>
        </div>

        <div
          v-if="index == 0"
          :key="index"
          class="vs font-extrabold text-magic-coffee-grey uppercase mb-16 text-center text-5xl lg:text-7xl">
          <span>vs</span>
        </div>
      </template>

    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data: function () {
    return {
      performList: [
        '25g protein per serving',
        'Heavy metal tested',
        'Complete amino acid profile',
        'Free from herbicides, pesticides and fungicides',
        'BCAAs to support muscle growth',
        'Fermented protein and digestive enzymes',
        'Turmeric extract to enhance recovery'
      ],
      ritualList: [
        '20g protein per serving',
        'Heavy metal tested',
        'Complete amino acid profile',
        'Free from herbicides, pesticides and fungicides',
        'A simple blend of pea, hemp, quinoa protein, a hint of natural flavouring nothing else',
        '3 delicious flavours, vanilla, dark chocolate and unflavoured'
      ],
      performPoints: [
        'Post workout recovery',
        'Building lean muscle tissue',
        'Exercise performance',
        'Athletes and gym-goers'
      ],
      ritualPoints: [
        'Smoothies and shakes',
        'Protein bars, energy balls and high protein treats',
        'Anyone looking for a simple everyday protein boost'
      ]
    };
  },

  props: {
    items: {
      type: Array,
      required: true
    	},
    options: {
      type: Object,
      required: true
    }
  },

  mounted: function () {
    $(document).ready(function () {
      $(window).resize(function () {
        if ($(window).width() > 767) {
          // .intro-text
          if ($('.intro-text-0').height() >= $('.intro-text-1').height()) {
            $('.intro-text-1').height($('.intro-text-0').height());
          } else {
            $('.intro-text-0').height($('.intro-text-1').height());
          }
          // .body-text
          if ($('.body-text-0').height() >= $('.body-text-1').height()) {
            $('.body-text-1').height($('.body-text-0').height());
          } else {
            $('.body-text-0').height($('.body-text-1').height());
          }
          // .perfect-for-points
          if ($('.perfect-for-points-0').height() >= $('.perfect-for-points-1').height()) {
            $('.perfect-for-points-1').height($('.perfect-for-points-0').height());
          } else {
            $('.perfect-for-points-0').height($('.perfect-for-points-1').height());
          }
          // .vs
          var extraHeight = ($('.image-1').height() / 2) - ($('.ImageTextButton .vs span').height() / 2);
          $('.ImageTextButton .vs').css('padding-top', $('.heading-1').height() + $('.intro-text-1').height() + extraHeight + 25);
        } else {
          $('[class*="intro-text"],[class*="body-text"],[class*="perfect-for-points"]').height('');
          $('.ImageTextButton .vs').css('padding-top', '');
        }
      }).resize();
    });
  }
};
</script>

<style scoped lang="sass">
  ul.list-none
    list-style-type: none
    text-indent: -20px

    img
      margin-right: 4px
      position: relative
      left: -4px
</style>
