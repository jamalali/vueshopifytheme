<template>

  <div :class="{'inline': !useButton}" class="eBookForm">
    <a
      href="#"
      @click.prevent="goToPage(0)"
      :class="[useButton ? 'btn-home primary account confirm w-full sm:w-auto' : 'font-bold hover:text-green-thrive']"
      v-html="useButton ? buttonText : linkText">
    </a>

    <div v-show="modalVisible" id="ebook-form" class="absolute top-0 left-0 w-full z-20 mt-4">
      <carousel
        :autoplay="false"
        :loop="false"
        :per-page="1"
        :paginationEnabled="false"
        :navigationEnabled="false"
        class="max-w-xl mx-4 lg:mx-auto shadow-lg bg-black"
        ref="carousel">

        <slide
          ref="slide01">
          <div @click="hideModal()" class="closeBtn"
            v-html="closeBtn">
          </div>
          <div class="w-full">
            <h2 v-if="title" class="text-3xl mb-4 uppercase"
              v-html="titleFinal"></h2>
            <p v-if="intro" class="text-base md:text-lg lg:text-xl max-w-md mx-auto mb-8 leading-snug font-normal"
              v-html="introFinal"></p>
            <form @submit.prevent="signUp" class="max-w-125 mx-auto">
              <div v-if="!customer">
                <input type="text" v-model="user.name" placeholder="|| 'eBookForm.placeholder_username' ||" required="required" class="placeholder-black" />
                <input type="text" v-model="user.email" placeholder="|| 'eBookForm.placeholder_email' ||" required="required" class="placeholder-black" />
              </div>

              <div v-if="gdpr" class="flex items-start">
                <div class="checkbox">
                  <input type="checkbox" v-model="user.gdpr" required="required" />
                  <div class="checked"></div>
                </div>
                <span class="ml-4 text-left text-sm leading-normal"
                  v-html="gdpr">
                </span>
              </div>

              <div class="mt-8 text-sm leading-snug">
                <div v-show="formError" class="mb-4 text-warning">|| 'eBookForm.form_error' ||</div>
                <div v-show="submitWarning" class="mb-4 text-warning">|| 'eBookForm.submit_warning' ||</div>
                <div v-show="submitError" class="mb-4 text-danger">
                  <ul class="list-none p-0">
                    <li v-for="(error, index) in submitErrors" :key="'error-'+ index">{{ error }}</li>
                  </ul>
                </div>
                <button type="submit" v-html="buttonText" class="btn-home primary account confirm w-full focus:outline-none"></button>
              </div>
            </form>
          </div>
        </slide>

        <slide
          v-if="submitSuccess"
          ref="slide02">
          <div @click="hideModal()" class="closeBtn"
            v-html="closeBtn">
          </div>
          <div class="w-full">
            <h2 v-if="title" class="text-3xl mb-8 uppercase"
              v-html="title"></h2>
            <div class="text-base md:text-lg lg:text-xl max-w-md mx-auto leading-snug font-normal">
              <p v-if="finalMessage" v-html="finalMessage" class="mb-8"></p>
              <template v-else>
                <p class="mb-8">|| 'eBookForm.default_final_message' ||</p>
              </template>
              <p>|| 'eBookForm.close_window_text' ||</p>
            </div>
          </div>
        </slide>

      </carousel>
    </div>
  </div>

</template>

<script>
  import breakpoints from "../breakpoints"
  import { Carousel, Slide } from 'vue-carousel'

  const VALID_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  export default {
    name: 'ebook-form',

    components: {
      Carousel,
      Slide
    },

    props: {
      formId: {
        type: String,
        required: true
      },
      title: {
        type: String
      },
      intro: {
        type: String
      },
      customer: {
        type: Object
      },
      gdpr: {
        type: String
      },
      useButton: {
        type: Boolean,
        default: true
      },
      buttonText: {
        type: String,
        default: `|| 'eBookForm.default_button_text' ||`
      },
      linkText: {
        type: String,
        default: `|| 'eBookForm.default_link_text' ||`
      },
      finalMessage: {
        type: String
      },
      options: {
        type: Object
      }
    },

    data() {
      return {
        user: {
          name: (this.customer && this.customer.name) || '',
          email: (this.customer && this.customer.email) || '',
          gdpr: false
        },
        formError: false,
        submitWarning: false,
        submitError: false,
        submitErrors: [],
        submitSuccess: false,
        account: '586b6d005ab0b646',
        closeBtn: `<svg xmlns="http://www.w3.org/2000/svg" width="28.876" height="28.876" viewBox="0 0 28.876 28.876">
          <g id="Group_6449" data-name="Group 6449" transform="translate(-2129.379 3071.621)">
            <line id="Line_1547" data-name="Line 1547" y1="24.634" x2="24.634" transform="translate(2131.5 -3069.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
            <line id="Line_1548" data-name="Line 1548" x2="24.634" y2="24.634" transform="translate(2131.5 -3069.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
          </g>
        </svg>`,
        modalVisible: false
      }
    },


    computed: {
      titleFinal() {
        return this.title.replace(/\\"/g, '"').replace(/\\'/g, "'");
      },

      introFinal() {
        return this.intro.replace(/\\"/g, '"').replace(/\\'/g, "'");
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
        this.showModal()
        var vm = this
        setTimeout(function(){vm.$refs.carousel.goToPage(pageNumber)},500)
      },
      showModal () {
        this.modalVisible = true
        //this.$nextTick(() => {
        //  window.innerWidth <= breakpoints.md ? location.hash = "#ebook-form" : location.hash = ""
        //})
      },
      hideModal () {
        this.modalVisible = false
        //if (window.innerWidth <= breakpoints.md) location.hash = null
      },
      validEmail() {
        return VALID_EMAIL_REGEX.test(this.user.email)
      },
      async signUp (e) {
        e.preventDefault()
        this.formError = false
        this.submitSuccess = false
        this.submitWarning = false
        this.submitError = false;
        if (this.user.name == '' || !this.validEmail() || (this.gdpr && !this.user.gdpr)) {
          this.formError = true
          return
        }        
        axios({
          method: 'post',
          url: 'https://ometria.vivolife.co.uk/api/segment-signup/',
          data: {
            store: '|| 'globals.settings.locale_oos_tag' ||',
            segment: || 'globals.ometria.ebook_list' ||,
            marketing: true,
            email: this.user.email
          }
        }).then((response) => {
            if (response.data.response === true) {
              this.submitSuccess = true
              this.$nextTick(() => {
                this.goToPage(1)
              })
              return true
            }
            this.submitError = true
            this.submitErrors = response.errors
          }
        );
      }
    },

    mounted() {
      this.$nextTick(() => {
        this.$refs.slide01.$el.classList.add('VueCarousel-slide-active')
      })
    }
  }
</script>

<style lang="sass" scoped>
  .VueCarousel-slide
    @apply flex justify-end items-center px-8 py-16 text-center text-white h-full relative

    @media (min-width: 768px)
      @apply px-16 py-16 min-h-152

  ::v-deep .VueCarousel-inner
    max-width: 100vw

  ::v-deep .VueCarousel-navigation
    position: absolute
    top: 26px
    width: 100%

    @media (min-width: 768px)
      top: calc(50% - 20px)

    .VueCarousel-navigation-prev
      left: initial
      right: 10px
      padding: 0 !important

      @media (min-width: 768px)
        left: calc(25px + -25px)
        transform: translateY(-50%) translateX(-50%)

    .VueCarousel-navigation-next
      right: 50px
      padding: 0 !important

      @media (min-width: 768px)
        right: calc(25px + 0rem)

      svg
        transform: rotate(180deg)

    .VueCarousel-navigation-prev, .VueCarousel-navigation-next
      svg
        height: 50px
        width: 50px

        @media (min-width: 768px)
          @apply shadow-lg

        path
          stroke-width: 8px

          @media (min-width: 768px)
            stroke-width: 4px

  ::v-deep .VueCarousel-navigation-button:focus
    outline: none

  .closeBtn
    @apply absolute top-0 right-0 m-4 cursor-pointer

    @media (min-width: 768px)
      @apply m-8

  input[type=text]
    @apply w-full px-3 py-2 mb-4 text-black border-2 border-white

    &:focus
      @apply outline-none border-2 border-green-thrive

  .checkbox
    @apply relative mt-1

    input[type=checkbox],
    .checked
      @apply w-8 h-8

    input[type=checkbox]
      @apply outline-none cursor-pointer

      &:checked ~ .checked
        @apply bg-green-thrive

    .checked
      @apply bg-white absolute top-0 pointer-events-none

  .btn-home
    text-transform: uppercase !important
</style>
