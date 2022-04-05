<template>
  <div class="HowItsMadeCarousel">
    <div class="item-titles hidden lg:flex justify-center items-center mb-6">
      <div v-for="(item, index) in items" :key="'item-list-'+index"
        :index="index"
        :class="{
          'border-l-1 border-black': (index > 0)
        }">
        <div class="text-sm font-extrabold uppercase px-6">
          <span
            class="cursor-pointer"
            @click="goToPage(index)">
            {{ item.titleShort }}
          </span>
        </div>
      </div>
    </div>

    <carousel
      :autoplay="false"
      :loop="true"
      :per-page="1"
      :paginationEnabled="false"
      :navigationEnabled="true"
      :navigationPrevLabel="arrowSVGlarge"
      :navigationNextLabel="arrowSVGlarge"
      ref="carousel">

      <slide v-for="(item, index) in items" :key="'item-'+index"
        :index="index"
        :id="'VueCarousel-slide-' + index"
        :class="{
          'last-slide': (index === items.length - 1)
        }">
        <h2 class="lg:hidden font-extrabold text-black-2 text-magic-coffee-green text-xs text-center py-5 tracking-normal uppercase">{{ item.title }}</h2>
        <div
          class="rounded-lg shadow-lg bg-white mx-8 lg:mx-24 mb-8 px-4 py-4"
          :style="{
            '--gif': (options && options.gif ? 'url(' + options.gif + ')' : '')
          }">
          <div class="item-details flex flex-wrap lg:flex-nowrap lg:items-center relative">
            <div class="hidden lg:block w-1/5 overflow-hidden lg:min-h-32">
              <div class="rounded-sm bg-cover bg-no-repeat bg-center pb-full relative"
                :style="{'background-image': 'url(' + item.imgURL + ')'}">
                <div class="flex flex-wrap content-center absolute h-full w-full bg-black-full-33 p-4 xl:p-8 items-center">
                  <div class="font-extrabold text-base xl:text-lg xxl:text-xl xxxl:text-2xl text-white uppercase">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div v-for="(attribute, index) in item.attributes" :key="'attribute-'+index"
              :index="index"
              class="attribute w-1/2 lg:w-1/5 text-center lg:min-h-32"
              :class="{
                'hidden lg:block': (index > 1 && index < 4),
                'hidden': (index > 3),
                'mb-12 lg:mb-0': (index < 2)
              }">
              <div class="h-12 lg:h-16 max-w-27 mx-auto mb-3">
                <img class="h-full" :src="attribute.imgURL" :alt="attribute.title" />
              </div>
              <h3 class="font-extrabold uppercase text-xs lg:text-base">{{ attribute.title }}</h3>
              <div class="w-32 xl:w-48 mx-auto mt-1 text-xs">
                {{ attribute.text }}
              </div>
            </div>
            <div class="flex flex-row-reverse flex-auto lg:hidden">
              <div v-for="(attribute, index) in item.attributes" :key="'attribute-'+index"
                :index="index"
                class="attribute w-1/2 text-center"
                :class="{
                  'hidden': (index < 2)
                }">
                <div class="h-12 max-w-27 mx-auto mb-3">
                  <img class="h-full" :src="attribute.imgURL" :alt="attribute.title" />
                </div>
                <h3 class="font-extrabold uppercase text-xs">{{ attribute.title }}</h3>
                <div class="w-32 mx-auto mt-1 text-xs">
                  {{ attribute.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'how-its-made-carousel',

  components: {
    Carousel,
    Slide
  },

  data () {
    return {
      arrowSVGsmall: '<svg xmlns="http://www.w3.org/2000/svg" width="17.564" height="31.442" viewBox="0 0 17.564 31.442"><path id="Path_9347" data-name="Path 9347" d="M13.342,0,0,13.343,13.342,27.2" transform="translate(2.101 2.121)" fill="none" stroke="#1d1d1d" stroke-linecap="round" stroke-width="3"/></svg>',
      arrowSVGlarge: '<svg xmlns="http://www.w3.org/2000/svg" width="39.464" height="74.639" viewBox="0 0 39.464 74.639"><path id="Path_9359" data-name="Path 9359" d="M13630.358,8455.45l-33.834-33.839,33.834-35.145" transform="translate(-13593.723 -8383.64)" fill="none" stroke="#1d1d1d" stroke-linecap="round" stroke-width="4"/></svg>'
    };
  },

  props: {
    items: {
      type: Array,
      required: true
    	},
    options: {
      type: Object
    }
  },

  methods: {
    previous () {
      this.$refs.carousel.handleNavigation('backward');
    },
    next () {
      this.$refs.carousel.handleNavigation();
    },
    goToPage (pageNumber) {
      this.$refs.carousel.goToPage(pageNumber);
    }
  },
  mounted: function () {
    if (document.getElementById('VueCarousel-slide-0')) {
      document.getElementById('VueCarousel-slide-0').classList.add('VueCarousel-slide-active');
    }
  }
};
</script>

<style scoped>
  .item-titles span:hover {
    color: #47A600;
    text-decoration: underline;
  }
  .attribute[index="0"]:before,
  .attribute[index="1"]:before,
  .attribute[index="2"]:before,
  .attribute[index="3"]:before {
    content: ' ';
    background-image: var(--gif);
    background-repeat: no-repeat;
    background-position: center;
    width: 42px;
    height: 12px;
    position: relative;
    top: 72px;
    left: 118px;
    display: block;
  }
  @media (max-width: 991px) {
    .attribute[index="0"] {
      padding-top: 12px;
    }
    .attribute[index="0"]:before {
      position: absolute;
      left: calc(50% - 21px);
      top: 25%;
    }
    .attribute[index="1"]:before {;
      top: calc(100% + 21px);
      left: calc(50% - 21px);
      transform: rotate(90deg);
    }
    .attribute[index="2"]:before {
      visibility: hidden;
    }
    .attribute[index="3"] {
      padding-top: 12px;
    }
    .attribute[index="3"]:before {
      transform: rotate(180deg);
      position: absolute;
      left: calc(50% - 21px);
      top: 68%;
    }
  }
  @media (min-width: 992px) {
    .attribute[index="0"]:before,
    .attribute[index="1"]:before,
    .attribute[index="2"]:before {
      width: 100%;
      top: 60px;
      left: 50%;
    }
    .attribute[index="3"]:before {
      visibility: hidden;
    }
  }
  >>> .VueCarousel-inner {
    max-width: 100vw;
  }

  >>> .VueCarousel-navigation {
    position: absolute;
    top: 27px;
    width: 100%;
  }
  @media (min-width: 992px) {
    >>> .VueCarousel-navigation {
      top: calc(50% - 20px);
    }
  }
  >>> .VueCarousel-navigation .VueCarousel-navigation-prev {
    left: calc(25px + 2rem);
    padding: 0 !important;
  }
  >>> .VueCarousel-navigation .VueCarousel-navigation-prev svg {
  }
  >>> .VueCarousel-navigation .VueCarousel-navigation-next {
    right: calc(25px + 2rem);
    padding: 0 !important;
  }
  >>> .VueCarousel-navigation .VueCarousel-navigation-next svg {
    transform: rotate(180deg);
  }
  >>> .VueCarousel-navigation .VueCarousel-navigation-prev svg,
  >>> .VueCarousel-navigation .VueCarousel-navigation-next svg {
    height: 25px;
  }
  @media (min-width: 992px) {
    >>> .VueCarousel-navigation .VueCarousel-navigation-prev svg,
    >>> .VueCarousel-navigation .VueCarousel-navigation-next svg {
      height: 50px;
    }
  }
  >>> .VueCarousel-navigation .VueCarousel-navigation-prev svg path,
  >>> .VueCarousel-navigation .VueCarousel-navigation-next svg path {
    stroke-width: 8px;
  }
  @media (min-width: 992px) {
    >>> .VueCarousel-navigation .VueCarousel-navigation-prev svg path,
    >>> .VueCarousel-navigation .VueCarousel-navigation-next svg path {
      stroke-width: 4px;
    }
  }
  >>> .VueCarousel-navigation-button:focus {
    outline: none;
  }
</style>
