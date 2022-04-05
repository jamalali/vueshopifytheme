<template>
  <header
    :class="[
      showTopBar ? 'show-top-bar' : 'top-0',
      drawerOpen ? 'absolute z-50' : 'fixed z-infinity',
      'bg-white w-screen lg:hidden country-popup-spacer'
    ]"
  >
    <div class="flex h-20 items-center px-4 w-full">
      <div class="flex w-1/3">
        <div class="flex flex-1">
          <div v-if="loggedIn && (noTemplate || accountPage)">
            <a class="flex items-center font-bold" href="/">
              <div class="text-2xl mr-2">&lt;</div>
              <div class="text-sm uppercase">Back to store</div>
            </a>
          </div>
          <div v-else>
            <a href="#" @click.prevent="openDrawer">

              <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.25 14.25" v-if="drawerOpen">
                <rect fill="#1D1D1D" x="1.12" y="6.41" width="12" height="1.44" transform="translate(7.13 -2.95) rotate(45)"/>
                <rect fill="#1D1D1D" x="1.13" y="6.41" width="12" height="1.44" transform="translate(17.2 7.12) rotate(135)"/>
              </svg>

              <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.25 14.25" v-else>
                <rect fill="#1D1D1D" x="1.13" y="3" width="12" height="1.44"/>
                <rect fill="#1D1D1D" x="1.13" y="10" width="12" height="1.44"/>
              </svg>

              <!--<svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="-14465.384 10512.12 12.055 12.056" v-if="drawerOpen">
                <g fill="none" stroke="#1e1e1e" stroke-width="1px" transform="translate(-14486.507 10479.493)">
                  <line x2="15.548" transform="translate(21.653 33.158) rotate(45)"/>
                  <line x2="15.548" transform="translate(32.648 33.157) rotate(135)"/>
                </g>
              </svg>

              <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.5 31.5" v-else>
                <line ref="" fill="none" stroke="#1D1D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="4.5" y1="8.8" x2="27.4" y2="8.7"/>
                <line ref="" fill="none" stroke="#1D1D1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="4.5" y1="22.8" x2="27.4" y2="22.7"/>
              </svg>-->
            </a>
          </div>
        </div>

        <div v-if="!(noTemplate || accountPage)" class="flex flex-1">
          <a href="/account">
            <svg class="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <circle class="account-svg-1" cx="15.75" cy="15.75" r="12.5"/>
              <path class="account-svg-2" d="M24.17,24v-.12c0-.78-.09-2.84-2.1-3.52a11.17,11.17,0,0,1-3.13-1.43.91.91,0,0,0-1.26.22.9.9,0,0,0-.15.67.93.93,0,0,0,.37.59,12.85,12.85,0,0,0,3.69,1.69c.61.22.74.85.78,1.83V24c0,.26,0,.63,0,.92l0,.42H24.1l0-.35A6.93,6.93,0,0,0,24.17,24Zm-.38-.1Z"/>
              <path class="account-svg-2" d="M13.23,18.79a.84.84,0,0,0-.67.15,11.33,11.33,0,0,1-3.2,1.44c-1.94.67-2,2.73-2,3.52V24a7.08,7.08,0,0,0,0,1l0,.34H9.22L9.17,25a7,7,0,0,1,0-.92V24c0-1,.17-1.63.77-1.84a12.88,12.88,0,0,0,3.7-1.69.93.93,0,0,0,.37-.59.88.88,0,0,0-.15-.67A.89.89,0,0,0,13.23,18.79Z"/>
              <path class="account-svg-2" d="M15.68,18.18h.13A3.58,3.58,0,0,0,18.57,17c1.51-1.7,1.26-4.62,1.23-4.9a4,4,0,0,0-1.9-3.55A4.3,4.3,0,0,0,15.79,8h-.07a4.4,4.4,0,0,0-2.1.53,4,4,0,0,0-1.93,3.57c0,.28-.28,3.2,1.23,4.9A3.57,3.57,0,0,0,15.68,18.18Zm-2.94-6v0c.13-2.81,2.13-3.11,3-3.11h0c1.06,0,2.85.45,3,3.11v0s.28,2.69-1,4.1a2.59,2.59,0,0,1-2,.84h0a2.58,2.58,0,0,1-2-.84C12.47,14.89,12.73,12.22,12.74,12.19Z"/>
              <path class="account-svg-2" d="M15.81,18.56h-.14a4,4,0,0,1-3-1.32c-1.6-1.81-1.35-4.84-1.32-5.18A4.33,4.33,0,0,1,13.43,8.2a4.76,4.76,0,0,1,2.29-.59,4.89,4.89,0,0,1,2.37.6,4.39,4.39,0,0,1,2.09,3.87c0,.32.27,3.35-1.33,5.16a4,4,0,0,1-3,1.32Zm-.13-.75h.06a3.32,3.32,0,0,0,2.55-1.07c1.39-1.57,1.17-4.3,1.14-4.61a3.65,3.65,0,0,0-1.72-3.27,4.11,4.11,0,0,0-3.91,0,3.65,3.65,0,0,0-1.73,3.26c0,.33-.26,3.06,1.13,4.63A3.25,3.25,0,0,0,15.68,17.81Zm.09-.31a3,3,0,0,1-2.34-1c-1.28-1.44-1.1-4-1.07-4.36v-.07a3.22,3.22,0,0,1,3.35-3.44,3.27,3.27,0,0,1,3.4,3.46h0s.31,2.86-1.06,4.4A2.93,2.93,0,0,1,15.77,17.5Zm-2.66-5.25c0,.16-.21,2.57.88,3.79a2.2,2.2,0,0,0,1.74.71A2.18,2.18,0,0,0,17.5,16c1-1.16.91-3.35.88-3.74v-.14c-.1-2.21-1.48-2.71-2.61-2.74-1,0-2.53.36-2.64,2.76Z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="flex justify-center w-1/3">
        <a class="mx-4" href="/">
        <svg v-if="!logo" :fill="logoColor" class="h-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	      viewBox="0 0 557.8 99.5" style="enable-background:new 0 0 557.8 99.5;" xml:space="preserve">
          <g>
            <path d="M123.9,93c-0.1,0.1-0.5,0.2-1,0.2h-20.6c-0.6,0-0.9,0-1-0.1c-0.1,0-0.1-0.4-0.1-1.1V54.2V7.5
              c0-0.7,0.1-0.9,0.7-0.9h21.3c0.6,0,0.6,0.1,0.8,0.2c0.1,0.1,0.2,0.4,0.2,0.9v84.4C124.1,92.6,124,92.9,123.9,93"/>
            <path d="M217.3,9c-2.6,5.7-37.5,76.9-40,82.4c-0.6,1.2-1.2,1.7-1.9,1.7c-0.6,0-1.1-0.5-1.6-1.5
              C170.3,84.8,137,17,133.2,8.8c-0.5-1-0.7-1.6-0.7-1.9c0-0.2,0.5-0.4,1.3-0.4h19.5c0.6,0,1.1,0.1,1.4,0.2c0.4,0.1,0.6,0.4,0.8,0.8
              c0.5,1.3,15,31.6,19.7,40.4c-0.1-0.1,19.3-38.7,19.8-39.9c0.3-1,1.2-1.5,2.5-1.5h19.2C218.6,6.8,217.3,9,217.3,9"/>
            <path d="M258.5,5.2c-24.3,0-44.1,19.7-44.1,44.1c0,24.3,19.7,44.1,44.1,44.1c24.3,0,44.1-19.7,44.1-44.1
              C302.6,24.9,282.8,5.2,258.5,5.2 M280.7,49.9c0,13.1-10.7,23.8-23.8,23.8c-4.2,0-8-1.2-11.4-3c9.2-20.3,24-31,22.2-29.9
              c-13.3,8-29.7,23-29.9,23.2c-2.9-3.9-4.7-8.8-4.7-14.1c0-13.1,10.7-23.8,23.8-23.8c5.9,0,11.3,2.2,15.5,5.8l17.2-5.2l-10.5,14.6
              C280.1,44,280.7,46.9,280.7,49.9"/>
            <path d="M91.8,8c-2.6,5.7-37.9,78-40.5,83.4c-0.6,1.2-1.2,1.7-1.9,1.7c-0.6,0-1.1-0.5-1.6-1.5
              C44.3,84.8,11,17,7.2,8.8C6.7,7.8,6.5,7.2,6.5,7c0-0.2,0.5-0.4,1.3-0.4h19.5c0.6,0,1.1,0.1,1.4,0.2c0.4,0.1,0.6,0.4,0.8,0.8
              c0.5,1.3,15,31.6,19.7,40.4C49.2,47.9,68.6,9.3,69.1,8.1c0.3-1,1.2-1.5,2.5-1.5h19.6C92.5,6.6,91.8,8,91.8,8"/>
            <path d="M432.4,89.7c0,1.6-0.1,2.6-0.2,3c-0.2,0.4-0.7,0.7-1.5,0.7h-18.2c-0.7,0-1.3,0-1.9-0.1
              c-0.6-0.1-1-0.3-1.3-0.7c-0.3-0.5-0.5-1.1-0.5-2v-2.4V9.4c0-0.9,0.3-1.4,0.9-1.5c0.6-0.1,1.5-0.1,2.8-0.1c1.6,0,2.8,0.1,3.4,0.2
              c0.6,0.2,0.9,0.7,0.9,1.6v72.1v2.5c0,0.9,0.3,1.5,0.9,1.9c0.2,0.2,0.7,0.3,1.2,0.3c0.6,0,1.1,0.1,1.6,0.1h10.3
              c0.8,0,1.3,0.3,1.5,0.8C432.3,87.8,432.4,88.6,432.4,89.7"/>
            <path d="M458.2,93c-0.4,0.2-1.6,0.3-3.6,0.3c-1.7,0-2.7-0.1-3.1-0.2c-0.4-0.1-0.6-0.6-0.6-1.5V9.7
              c0-0.8,0.2-1.3,0.7-1.5c0.5-0.2,1.5-0.3,3-0.3c1.7,0,2.8,0.1,3.4,0.3c0.6,0.2,0.9,0.8,0.9,1.7v81.5
              C458.8,92.2,458.6,92.8,458.2,93"/>
            <path d="M506.3,11.5c0,1.3-0.1,2.2-0.4,2.6c-0.2,0.4-0.9,0.7-2,0.7h-11.5H491c-0.4,0-0.8,0.1-1.2,0.2
              c-0.6,0.4-0.9,1.1-0.9,2v2.6v23.1v1.7c0,0.5,0.2,1,0.6,1.4c0.4,0.4,0.9,0.6,1.3,0.5c0.5,0,1,0,1.5,0.1c1,0.2,2.2,0.2,3.5,0.2
              c1.4,0,2.4-0.1,2.9-0.1c1,0,1.6,0.3,1.8,0.9c0.2,0.6,0.4,1.5,0.4,2.8c0,1.4-0.1,2.3-0.4,2.9c-0.2,0.5-0.9,0.8-1.8,0.8
              c-0.5,0-1.4,0-2.8-0.1c-1.3,0-2.5,0-3.5,0.1c-0.7,0-1.3,0-1.8,0.1c-0.6,0-1,0.1-1.2,0.3c-0.6,0.4-0.9,1-0.9,1.9v2.5v33
              c0,0.9-0.3,1.4-1,1.5c-0.7,0.1-1.7,0.2-3.1,0.2c-1.3,0-2.3-0.1-2.9-0.2c-0.6-0.1-0.9-0.6-0.9-1.4v-80V9.9c0-0.4,0.2-0.8,0.6-1.2
              c0.4-0.5,0.7-0.8,1-0.9c0.2-0.1,0.7-0.1,1.3-0.1h20.9c0.8,0,1.3,0.3,1.4,0.9C506.2,9.3,506.3,10.2,506.3,11.5"/>
            <path d="M550.2,90c0,1.4-0.1,2.3-0.2,2.8c-0.2,0.4-0.6,0.7-1.2,0.7h-18.3c-1,0-1.9,0-2.9,0.1c-0.9,0-1.6-0.1-2-0.5
              c-0.5-0.4-0.7-1-0.7-1.8v-2.3V11.5c0-0.8,0-1.3,0.1-1.6c0.1-0.2,0.3-0.6,0.7-1.1c0.4-0.5,0.8-0.8,1.2-0.9
              c0.4-0.1,0.9-0.1,1.6-0.1h20.3c0.7,0,1.2,0.3,1.3,1c0.1,0.7,0.2,1.6,0.2,2.7c0,1.1-0.1,2-0.2,2.5c-0.1,0.5-0.6,0.8-1.4,0.8h-12.2
              c-0.5,0-1,0-1.7,0.1c-0.6,0.1-1,0.2-1.2,0.5c-0.3,0.4-0.5,0.7-0.6,0.9c0,0.2-0.1,0.7-0.1,1.5v23.2v1.7c0,0.6,0.2,1.1,0.7,1.5
              c0.4,0.3,0.8,0.5,1.3,0.5h1.4h5.8c0.7,0,1.2,0.3,1.4,0.8c0.2,0.5,0.3,1.4,0.3,2.8c0,1.2-0.1,2.1-0.2,2.6
              c-0.2,0.5-0.7,0.8-1.5,0.8h-5.5c-0.7,0-1.3,0-1.8,0.1c-0.6,0-1,0.1-1.2,0.3c-0.6,0.4-0.9,0.9-0.9,1.5v2.1v26.3
              c0,0.8,0,1.7,0.1,2.6c0,0.9,0.2,1.5,0.6,1.7c0.3,0.2,0.9,0.3,1.6,0.4c0.7,0.1,1.4,0.1,2.1,0.1h11.6c0.7,0,1.2,0.2,1.3,0.7
              C550.1,87.7,550.2,88.6,550.2,90"/>
            <path d="M355.3,93.3c-1.1,0-2-0.9-2-2V9.8c0-1.1,0.9-2,2-2s2,0.9,2,2v81.5C357.3,92.4,356.4,93.3,355.3,93.3"/>
          </g>
        </svg>
          <img v-else class="logo relative" :class="[{ 'winter' : winter }, { 'valentines' : valentines }]" :src="logo" alt="Vivo Life" />
        </a>
      </div>

      <div class="flex w-1/3">
        <div class="flex flex-1 justify-end">
          <div v-if="loggedIn && (noTemplate || accountPage)"><a class="font-bold uppercase" href="/account/logout">|| 'MobileNavbar.logout_label' ||</a></div>
          <slot v-else name="cart-total"></slot>

          <mobile-navigation
            v-show="drawerOpen"
            :logged-in="loggedIn"
            :vivo-nav="vivoNav"
            :shop-nav="shopNav"
            :top-level-nav="topLevelNav"
            :footer-nav="footerNav"
            :logo-color="logoColor"
            :shop-nav-extra-links="shopNavExtraLinks"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MobileNavigation from './MobileNavigation';

export default {
  props: {
    logo: String,
    logoColor: {
      type: String,
      default: '#000000'
    },
    loggedIn: Boolean,
    noTemplate: Boolean,
    accountPage: Boolean,
    vivoNav: {
      type: Array,
      required: true
    },
    shopNav: {
      type: Array,
      required: true
    },
    topLevelNav: {
      type: Array,
      required: true
    },
    footerNav: {
      type: Array,
      required: true
    },
    showTopBar: {
      type: Boolean,
      default: false
    },
    valentines: {
      type: Boolean,
      default: false
    },
    winter: {
      type: Boolean,
      default: false
    },
    shopNavExtraLinks: {
      type: Array
    }
  },

  components: { MobileNavigation },

  mounted () {
    EventBus.$on('main-content-position-was-reset', this.closeDrawer);
  },

  /**
     * Create the initial data.
     */
  data () {
    return {
      drawerOpen: false
    };
  },

  methods: {
    /**
       * Open the nav drawer.
       */
    openDrawer () {
      this.drawerOpen = true;

      EventBus.$emit('animate-main-content-position', {
        time: 0.3,
        newPosition: {
          xPercent: 75,
          y: 40
        }
      });
    },

    /**
       * Close the nav drawer.
       */
    closeDrawer () {
      this.drawerOpen = false;
    }
  }
};
</script>

<style lang="sass" scoped>
  header.show-top-bar
    top: 56px
  .body--desktop-navbar-shrunk header.show-top-bar
    top: 0px

  .logo
    @apply max-w-none

    &.winter
      @apply h-10
      top: -5px

    &.valentines
      @apply h-10
      top: -1px
</style>
