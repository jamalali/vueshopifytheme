<template>
  <div class="CharitiesCarouselGF">
    <carousel
      :autoplay="true"
      :autoplayTimeout="15000"
      :loop="true"
      :per-page="1"
      :paginationEnabled="true"
      paginationActiveColor="#FAFAFA"
      paginationColor="rgba(250,250,250,0.42)"
      :navigationEnabled="true"
      :navigationPrevLabel="arrowSVGlarge"
      :navigationNextLabel="arrowSVGlarge"
      ref="carousel">

      <slide v-for="(item, index) in shuffledItems" :key="'item-'+index"
        :index="index"
        :id="'VueCarousel-slide-' + index"
        :class="{
          'last-slide': (index === items.length - 1)
        }"
        :style="{
          '--background': 'url(' + item.imgURL + ')'
        }">
        <div>
          <div class="pt-4 px-4 pb-8 lg:p-16 lg:w-1/2 flex items-center justify-center">
            <img class="w-full" :src="item.logoURL" :alt="item.title" />
          </div>
          <div class="flex flex-col justify-center lg:w-1/2">
            <div v-if="item.videoCode && item.videoURL" class="video relative">
              <div class="background block w-full pb-3/5 bg-black-full"
                :style="{
                  '--background': 'url(' + item.videoURL + ')'
                }">
              </div>

              <div class="product-magic-coffee absolute inset-x-0 inset-y-0 pl-8 pt-16 md:pl-16 md:pt-16 bg-overlay">
                <div class="video-button">
                  <video-modal>
                    <responsive-video-embed :video-id="item.videoCode" slot="video">
                    </responsive-video-embed>
                  </video-modal>
                </div>
              </div>
            </div>

            <p class="lg:my-12 text-sm md:text-base tracking-normal leading-normal" v-html="item.text"></p>

            <a class="font-bold hover:text-green-friday-green" :href="item.link" target="_blank">|| 'CharitiesCarouselGF.find_out_more' ||</a>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'

  function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5)
  }

  export default {
    name: 'charities-carousel-gf',

    components: {
      Carousel,
      Slide
    },

    data() {
      return {
        arrowSVGsmall: '<svg xmlns="http://www.w3.org/2000/svg" width="17.564" height="31.442" viewBox="0 0 17.564 31.442"><path id="Path_9347" data-name="Path 9347" d="M13.342,0,0,13.343,13.342,27.2" transform="translate(2.101 2.121)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-width="3"/></svg>',
        arrowSVGlarge: '<svg xmlns="http://www.w3.org/2000/svg" width="39.464" height="74.639" viewBox="0 0 39.464 74.639"><path id="Path_9359" data-name="Path 9359" d="M13630.358,8455.45l-33.834-33.839,33.834-35.145" transform="translate(-13593.723 -8383.64)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-width="4"/></svg>',
        shuffledItems: shuffleArray(this.items)
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
        this.$refs.carousel.handleNavigation('backward')
      },
      next () {
        this.$refs.carousel.handleNavigation()
      },
      goToPage (pageNumber) {
        this.$refs.carousel.goToPage(pageNumber)
      }
    },

    mounted: function() {
      if (document.getElementById('VueCarousel-slide-0')) {
        document.getElementById('VueCarousel-slide-0').classList.add('VueCarousel-slide-active')
      }
    }
  };
</script>

<style scoped>
  .VueCarousel-slide {
    background-image: var(--background);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .VueCarousel-slide > div {
    @apply h-full p-8 pb-20 text-white bg-black-full-60;
  }
  @screen md {
    .VueCarousel-slide > div {
      @apply pb-24;
    }
  }
  @screen lg {
    .VueCarousel-slide > div {
      @apply pl-0 py-24 pr-16 flex;
    }
  }

  >>> .VueCarousel-inner {
    max-width: 100vw;
  }

  >>> .VueCarousel-navigation {
    position: absolute;
    bottom: 27px;
    width: 100%;
    z-index: 1;
  }
  @media (min-width: 992px) {
    >>> .VueCarousel-navigation {
      top: calc(50% - 20px);
      bottom: initial;
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

  >>> .VueCarousel-pagination {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  >>> .VueCarousel-pagination .VueCarousel-dot-container,
  >>> .VueCarousel-pagination .VueCarousel-dot-container > * {
    margin-top: 0 !important;
  }
  >>> .VueCarousel-pagination .VueCarousel-dot-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  >>> .VueCarousel-pagination .VueCarousel-dot {
    display: block;
    margin: 9px;
    padding: 0 !important;
    background-color: #fff !important;
    margin-bottom: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  }
  >>> .VueCarousel-pagination .VueCarousel-dot:focus {
    outline: none;
  }
  >>> .VueCarousel-pagination .VueCarousel-dot.VueCarousel-dot--active {
    width: 16px !important;
    height: 16px !important;
  }

  .video .background {
    background-image: var(--background);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
