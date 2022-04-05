<template>
  <div class="HeroImageStatic02 relative">
    <div v-for="(slide, index) in slides"
      :key=index
      :class="{
        'light-text': slide.lightText === 'light'
      }"
      :style="{
        '--mobile-background': 'url(' + slide.mobileImage + ')',
        '--desktop-background': 'url(' + slide.desktopImage + ')'
      }"
      class="staticHero">
      <div
        class="text-center p-4 pt-16 pb-48 bg-black-full-45 md:pt-20 lg:text-left lg:px-30 lg:py-40 lg:pb-64 xxxl:pt-52"
        :class="[slide.overlay ? '' : 'lg:bg-black-full-05']">
        <div :class="[slide.textPosition ? 'lg:text-' + slide.textPosition : '']">
          <div class="font-bold text-white mx-auto text-sm uppercase tracking-wider mb-6 md:mb-14 md:text-2xl lg:text-black-full">
            {{ slide.tinyText }}
          </div>
          <div
            v-html="slide.titleText"
            class="title-text font-extrabold mx-auto mb-5 text-white uppercase tracking-widerer text-3xl md:text-4xl lg:tracking-wider lg:mb-14 lg:text-black-2 lg:text-5xl xxl:text-6xl">
          </div>
          <div
            v-html="slide.mainText"
            class="hidden w-1/3 -mt-6 mb-14 font-medium text-black-2 text-xl tracking-normal leading-normal lg:block">
          </div>
          <div
            v-html="slide.mobileMainText"
            class="-mt-3 mb-4 px-6 font-medium text-white mx-auto text-base tracking-normal leading-normal md:w-1/2 lg:hidden">
          </div>
        </div>
        <a v-if="slide.buttonOne" :href="slide.buttonOne.url" class="primary btn-home">
          {{ slide.buttonOne.text }}
        </a>
        <a v-if="slide.buttonTwo"
          :href="slide.buttonTwo.url"
          :class="[
            'secondary',
            'btn-home',
            slide.lightText === 'light' ? 'on-dark' : '',
            'ml-4',
            'hidden',
            'lg:inline-block',
            'typeform-share'
          ]">
          {{ slide.buttonTwo.text }}
        </a>
      </div>
    </div>
    <div class="footnotes text-center absolute bottom-0 w-full lg:flex">
      <div v-if="options.showFootnoteOne"
        class="footnote-one mx-4 md:mx-auto lg:mx-0 md:w-2/3 lg:w-1/2">
        <a
          @click.prevent="goQuiz"
          :href="options.footnoteOne.url"
          v-html="options.footnoteOne.text === '' ? '<strong>Take our Supplement Quiz</strong> to find the perfect product for you' : options.footnoteOne.text"
          :style="{'--up-arrow': 'url(' + options.footnoteOne.upArrow + ')'}"
          class="desktop hidden lg:block p-10 text-black-3 text-1xl no-underline bg-off-white-5 xxl:p-8 xxl:text-2xl">
        </a>
        <div class="mobile lg:hidden mb-8 text-white">
          <a
            @click.prevent="goQuiz"
            :href="options.footnoteOne.url"
            v-html="options.footnoteOne.mobileText === '' ? `Unsure which supplements are right for you?<br \/><span class='text-vivo-green'>Click here<\/span> to try our 30 second quiz` : options.footnoteOne.mobileText"
            class="font-medium text-sm md:text-base">
          </a>
        </div>
      </div>
      <div
        class="footnote-two px-8 py-1 xxl:py-0 bg-grey-77 tracking-wider"
        :class="[options.showFootnoteOne ? 'lg:w-1/2' : 'w-full' ]">
        <a
          v-if="options.footnoteTwo.text === ''"
          :href="options.footnoteTwo.url"
          class="text-white text-sm sm:text-lg lg:text-xl no-underline uppercase xxl:text-2xl">
          || 'HeroImageCarousel02.trees_planted_text' ||
        </a>
        <a
          v-else
          :href="options.footnoteTwo.url"
          v-html="options.footnoteTwo.text"
          class="text-white text-sm sm:text-lg lg:text-2xl no-underline uppercase">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import * as typeformEmbed from '@typeform/embed';

export default {
  components: {
  },

  props: {
    slides: {
      type: Array,
      required: true
    	},
    options: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    goQuiz (e) {
      const url = e.target.href || e.target.parentElement.href;
      if (url.indexOf('typeform') > -1) {
        const ref = typeformEmbed.makePopup(
          url,
          {
            mode: 'popup',
            hideScrollbars: true,
            onSubmit: function () {
              console.log('Typeform successfully submitted');
            }
          }
        );
        ref.open();
      } else {
        document.location.href = url;
      }
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

.HeroImageCarousel02,
.staticHero {
  position: relative;
}
.staticHero {
  background-image: var(--mobile-background);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 3s;
  /* unncomment to fade */
  /* opacity: 0; */
}
@screen lg {
  .staticHero {
    background-image: var(--desktop-background);
  }
}
.light-text div {
  color: white !important;
}
.staticHero .arrow {
  cursor: pointer;
}
.staticHero .arrow[hidden] {
  display: none;
}

.footnote-one .desktop b,
.footnote-one .desktop strong {
  color: #252736;
}
@screen lg {
  .footnote-one a:after {
    content: ' ';
    display: inline-block;
    background-image: var(--up-arrow);
    background-size: contain;
    background-repeat: no-repeat;
    height: 8px;
    width: 14px;
    position: relative;
    top: -1px;
    left: 11px;
  }
}
@screen xxl {
  .footnote-one a:after {
    height: 21px;
    width: 21px;
    top: 8px;
    left: 14px;
  }
}
.footnote-two a {
  line-height: 5.5rem;
}
.footnote-two a > * {
  position: relative;
  top: 2px;
  margin-right: 10px;
  font-size: 1.2rem;
}
@screen sm {
  .footnote-two a > * {
    font-size: 1.5rem;
  }
}
@screen xxl {
  .footnote-two a > * {
    font-size: 2rem;
  }
}

.staticHero .btn-home.secondary {
  display: none;
}
@screen lg {
  .staticHero .btn-home.secondary {
    display: inline-block;
  }
}
</style>
