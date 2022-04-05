<template>

  <div id="ebook-form" :class="[themeColor]">
    <carousel
      :autoplay="false"
      :loop="false"
      :per-page="1"
      :paginationEnabled="false"
      :navigationEnabled="false"
      class="max-w-3xl mx-4 lg:mx-auto shadow-lg bg-plaa-sign-up text-white"
      ref="carousel">

      <slide
        ref="slide01">
        <div class="w-full">
          <h2 v-if="title" class="max-w-md mx-auto text-3xl mb-4 uppercase italic tracking-wider"
            v-html="title"></h2>
          <p v-if="intro" class="text-base md:text-lg max-w-md mx-auto mb-8 leading-snug font-normal"
            v-html="intro"></p>
          <p v-if="!customer" class="post-intro text-base w-content max-w-md mx-auto mb-8 border-b-4 leading-snug font-normal"
            :class="['border-' + themeColor]"
            v-html="postIntro"></p>
          <form @submit.prevent="signUp">
            <div class="sm:flex">
              <div class="sm:w-1/2">
                <input type="text" v-model="user.name" placeholder="|| 'PlaaSignUpForm.form_name_placeholder' ||" class="placeholder-white" />
              </div>
              <div class="sm:w-1/2">
                <input type="text" v-model="user.email" placeholder="|| 'PlaaSignUpForm.form_email_placeholder' ||" required="required" class="placeholder-white" />
              </div>
            </div>

            <div class="mt-8 text-sm leading-snug">
              <div v-show="formError" class="mb-4 text-warning">
                <ul class="list-none p-0">
                  <li v-for="(error, index) in formErrors" :key="'error-'+ index">{{ error }}</li>
                </ul>
              </div>
              <div v-show="submitWarning" class="mb-4 text-warning">|| 'PlaaSignUpForm.form_warning_text' ||</div>
              <div v-show="submitError" class="mb-4 text-danger">
                <ul class="list-none p-0">
                  <li v-for="(error, index) in submitErrors" :key="'error-'+ index">{{ error }}</li>
                </ul>
              </div>
            </div>

            <div class="sm:flex sm:w-9/10 mx-auto">
              <div v-if="gdpr" class="flex items-start sm:w-1/2 mb-3 sm:mb-0">
                <div class="checkbox">
                  <input type="checkbox" v-model="user.gdpr" required="required" />
                  <div class="checked"></div>
                </div>
                <span class="ml-4 text-left text-sm text-grey-dark leading-normal"
                  v-html="gdpr">
                </span>
              </div>
              <div class="sm:justify-end sm:w-1/2 sm:pl-8">
                <button type="submit" v-html="buttonText01" class="btn-home primary account confirm w-full lg:w-56 leading-loose focus:outline-none lg:ml-4 mb-4"></button>
                <div class="sm:hidden bg-white h-1 w-12 mx-auto mb-4"></div>
                <button @click="signIn" v-html="buttonText02" class="btn-home primary account confirm w-full lg:w-56 leading-loose focus:outline-none lg:ml-4 mb-4"></button>
              </div>
            </div>
          </form>
        </div>
      </slide>

      <slide
        ref="slide02"
        v-if="submitSuccess">
        <div class="w-full">
          <div class="max-w-90 mx-auto text-2xl mb-4 uppercase italic tracking-wider leading-snug">
            <h2>|| 'PlaaSignUpForm.form_submit_success_title' ||</h2>
            <h3 :class="['text-' + themeColor]">|| 'PlaaSignUpForm.form_submit_success_subtitle' ||</h3>
          </div>
          <div class="mx-auto w-20 h-1 mt-6 mb-8 bg-white"></div>
          <div class="text-base md:text-lg lg:text-xl max-w-md mx-auto leading-snug font-normal">
            <div class="max-w-104 mx-auto text-grey text-sm leading-loose">
              <p v-if="finalMessage" class="mb-8" v-html="finalMessage"></p>
              <template v-else>
                <p class="mb-8">|| 'PlaaSignUpForm.form_submit_success_final_message' ||</p>
              </template>
            </div>
            <div class="sm:flex items-center justify-center font-black text-base uppercase italic tracking-wide">
              <a :href="bundle" :class="[ themeColor.indexOf('plaa-purple') >= 0 ? 'text-white' : 'text-' + themeColor ]">|| 'PlaaSignUpForm.form_submit_success_bundle_link_text' ||</a>
              <div class="hidden sm:block w-1 h-14 mx-6 bg-grey"></div>
              <div class="block sm:hidden mx-auto w-20 h-1 my-6 bg-grey"></div>
              <a :href="programmeUrl" class="text-white">|| 'PlaaSignUpForm.form_submit_success_programme_link_text' ||</a>
            </div>
          </div>
        </div>
      </slide>

    </carousel>
  </div>

</template>

<script>
  import breakpoints from "../breakpoints"
  import { Carousel, Slide } from 'vue-carousel'

  const VALID_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  export default {
    name: 'plaa-sign-up-form',

    components: {
      Carousel,
      Slide
    },

    props: {
      account: {
        type: String,
        required: true
      },
      formId: {
        type: String,
        required: true
      },
      subscriptionStatus: {
        type: String,
        default: 'SUBSCRIBED'
      },
      themeColor: {
        type: String
      },
      programme: {
        type: String,
        default: 'strength'
      },
      title: {
        type: String
      },
      intro: {
        type: String
      },
      postIntro: {
        type: String,
        default: `|| 'PlaaSignUpForm.form_post_intro' ||`
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
      buttonText01: {
        type: String,
        default: `|| 'PlaaSignUpForm.button_text01' ||`
      },
      buttonText02: {
        type: String,
        default: `|| 'PlaaSignUpForm.button_text02' ||`
      },
      linkText: {
        type: String,
        default: 'click here'
      },
      finalMessage: {
        type: String
      },
      noName: {
        type: Boolean
      },
      bundle: {
        type: String,
        default: '/pages/plaa-sign-up-strength'
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
        formErrors: [],
        submitWarning: false,
        submitError: false,
        submitErrors: [],
        submitSuccess: false
      }
    },

    computed: {
      programmeUrl: function () {
        return '/pages/plaa-dashboard-' + this.programme;
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
        var vm = this
        setTimeout(function(){vm.$refs.carousel.goToPage(pageNumber)},500)
      },
      getListId (programme) {
        const programmes = {
            strength: || 'globals.ometria.plaa_rhino' ||,
            endurance: || 'globals.ometria.plaa_mustang' ||,
            function: || 'globals.ometria.plaa_gorilla' ||
        }
        return programmes[programme] ?? || 'globals.ometria.plaa_rhino' ||
      },
      validEmail () {
        return VALID_EMAIL_REGEX.test(this.user.email)
      },
      async signUp (e) {
        e.preventDefault()
        this.formError = false
        this.formErrors = []
        this.submitWarning = false
        this.submitError = false
        this.submitErrors = []
        this.submitSuccess = false
        this.user.name = this.user.name.trim()
        this.user.email = this.user.email.trim()

        if (!this.validEmail()) {
          this.formError = true
          this.formErrors.push('|| 'PlaaSignUpForm.form_error_text01' ||')
        }

        if (this.gdpr && !this.user.gdpr) {
          this.formError = true
          this.formErrors.push('|| 'PlaaSignUpForm.form_error_text02' ||')
        }

        if (this.user.name == '' && this.noName != true) {
          this.formError = true
          this.formErrors.push('|| 'PlaaSignUpForm.form_error_text03' ||')
        }

        if (this.formError) return;

        var url = document.location.href,
            listId = this.getListId(this.programme);
            axios({
              method: 'post',
              url: 'https://ometria.vivolife.co.uk/api/segment-signup/',
              data: {
                store: '|| 'globals.settings.locale_oos_tag' ||',
                segment: listId,
                marketing: true,
                email: this.user.email
              }
            }).then((response) => {
              if (response.data.response) {
                try {
                  localStorage.setItem('plaa-'+this.programme, true)
                } catch (e) {
                  this.submitError = true
                  this.submitErrors.push('|| 'PlaaSignUpForm.form_submit_error_text01' ||')
                  return
                }
                this.submitSuccess = true
                this.$nextTick(() => {
                  this.goToPage(1)
                })
                if(this.noName != true) {
                  // Facebook
                  fbq('track', 'CompleteRegistration');
                  // Google
                  if('|| 'globals.google.gtagid' ||' != '') {
                    gtag('event', 'conversion', {'send_to': '|| 'globals.google.gtagid' ||'});
                    switch (this.programme) {
                      case 'endurance':
                        ga('send', 'event', 'button', 'press', 'PLAA Endurance');
                      break;
                      case 'strength':
                        ga('send', 'event', 'button', 'press', 'PLAA Strength');
                      break;
                      case 'function':
                        ga('send', 'event', 'button', 'press', 'PLAA Function');
                      break;
                    }
                  }
                  // Reddit conversion
                  !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','t2_c1njwdfu');rdt('track', 'SignUp');
                }
                return true
              }
            }).catch((err) => {
                this.submitWarning = true // Disable your adblocker
              })
      },
      async signIn (e) {
        this.finalMessage = '|| 'PlaaSignUpForm.already_signed_up_final_message' ||'
        this.noName = true
        this.signUp(e)
      }
    },

    created() {
      this.programme = document.location.href.split('plaa-sign-up-')[1].split(/[^a-zA-Z0-9]/)[0]
      var signedUp = localStorage.getItem('plaa-'+this.programme)
      if (signedUp == 'true') {
        document.location.href = '/pages/plaa-dashboard-' + this.programme;
      }
    },

    mounted() {
      this.$nextTick(() => {
        this.$refs.slide01.$el.classList.add('VueCarousel-slide-active')
      });
      // Reddit landing
      // eslint-disable-next-line
      !function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);rdt('init','t2_c1njwdfu');rdt('track', 'PageVisit');
    }
  }
</script>

<style lang="sass" scoped>
  .VueCarousel-slide
    @apply flex justify-end items-center px-4 py-8 text-center text-white h-full relative

    @media (min-width: 576px)
      @apply px-8 py-12

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

  input[type=text]
    @apply w-4/5 px-0 py-2 mb-4 bg-transparent text-white text-lg border-b-3 border-white

    @media (min-width: 576px)
      @apply mb-12

    &:focus
      @apply outline-none

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

  .btn-home.primary.account.confirm
    @apply h-16 uppercase shadow-lg tracking-wider

  .plaa-red
    .post-intro ::v-deep a
      @apply text-plaa-red

    input[type=text]:focus
      @apply border-plaa-red

    .checkbox input[type=checkbox]:checked ~ .checked
      @apply bg-plaa-red

    .btn-home.primary.account.confirm
      @apply border-plaa-red bg-plaa-red

  .plaa-purple
    .post-intro ::v-deep a
      @apply text-plaa-purple

    input[type=text]:focus
      @apply border-plaa-purple

    .checkbox input[type=checkbox]:checked ~ .checked
      @apply bg-plaa-purple

    .btn-home.primary.account.confirm
      @apply border-plaa-purple bg-plaa-purple

  .plaa-blue
    .post-intro ::v-deep a
      @apply text-plaa-blue

    input[type=text]:focus
      @apply border-plaa-blue

    .checkbox input[type=checkbox]:checked ~ .checked
      @apply bg-plaa-blue

    .btn-home.primary.account.confirm
      @apply border-plaa-blue bg-plaa-blue

</style>
