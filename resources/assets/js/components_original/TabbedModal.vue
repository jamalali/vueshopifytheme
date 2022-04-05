<template>
  <div>
    <ul class="tabbed-modal-2020 sm:absolute sm:flex list-none left-0 pt-1 sm:pt-0 px-2 text-sm w-full z-50 -bottom-0-6 md:pl-0 md:w-auto xl:pl-12 lg:text-xl">
      <li
        v-for="(button, index) in tabButtons"
        :key="'button-' + button.replace(/\s+/g, '-').toLowerCase()"
        class="w-full sm:w-1/2 mt-4 sm:mt-0 px-2 md:w-auto md:px-0"
        :class="{'md:ml-6': index > 0}"
      >
        <a
          class="block btn--rayen font-bold no-underline px-0 py-0 text-center text-white tracking-wide uppercase w-full md:w-48 lg:w-56"
          :class="`btn--hover-${buttonHoverColor} bg-${buttonColor}`"
          href="#"
          :data-text="button"
          @click.prevent="showModal(button)"
        >
          <span
            class="py-3"
            v-text="button"
          />
        </a>
      </li>
    </ul>

    <transition @enter="animateShowModal" @leave="animateHideModal" :css="false">
      <div
        class="bg-white fixed flex flex-col h-screen p-8 top-0 left-0 w-screen z-infinity"
        v-if="modalVisible"
      >
        <div class="text-right">
          <close-button
            class="w-3 stroke-current"
            @click.native="hideModal"
            @keypress.enter.native="hideModal"
          >
          </close-button>
        </div>

        <ul class="list-none mb-8 md:mb-0 p-0 md:flex md:flex-shrink-0">
          <li
            v-for="tab in tabs"
            :key="'tab-' + tab.replace(/\s+/g, '-').toLowerCase()"
            class="flex-1 font-bold py-2 text-center text-lg md:py-8"
          >
            <a
              :class="[`border-b-2 border-${tab == currentTab ? 'black' : 'transparent'} inline-block no-underline pb-1 text-black uppercase`]"
              href="#"
              @click.prevent="currentTab = tab"
            >
              {{ tab }}
            </a>
          </li>
        </ul>

        <div
          v-for="tab in tabs"
          :key="'tabContent-' + tab.replace(/\s+/g, '-').toLowerCase()"
          class="overflow-scroll"
          v-if="currentTab == tab">
          <slot :name="tab" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CloseButton from './CloseButton';
import gsap from 'gsap';

export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },

    buttons: {
      type: Array,
      required: false
    },

    buttonColor: {
      type: String,
      default: 'green'
    },

    buttonHoverColor: {
      type: String,
      default: 'green-dark'
    },

    defaultTab: {
      type: String,
      required: false
    }
  },

  components: { CloseButton },

  /**
     * Set the intial data.
     */
  data () {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');

    return {
      currentTab: this.defaultTab || this.tabs[tabParam || 0],
      modalVisible: !!tabParam
    };
  },

  computed: {
    /**
       * Return the buttons, if none have been supplied then return all of the
       * tabs.
       */
    tabButtons () {
      return this.buttons || this.tabs;
    }
  },

  methods: {
    /**
       * Show the modal and set the current tab.
       */
    showModal (tab) {
      this.modalVisible = true;
      this.currentTab = tab;
      EventBus.$emit('toggleNavbarSize', true);
    },

    /**
       * Hide the modal and unset the current tab.
       */
    hideModal () {
      this.modalVisible = false;
      this.currentTab = null;
      EventBus.$emit('toggleNavbarSize', false);
    },

    /**
       * Animate the reveal of the modal.
       */
    animateShowModal (el, done) {
      gsap.from(el, {
        duration: 0.3,
        ease: 'power1.easeOut',
        xPercent: 100,
        onComplete: done
      });
    },

    /**
       * Animate the removal of the modal.
       */
    animateHideModal (el, done) {
      gsap.to(el, {
        duration: 0.3,
        ease: 'power1.easeIn',
        xPercent: -100,
        onComplete: done
      });
    }
  }
};
</script>

<style lang="sass" scoped>
  .TabbedModal > div
    padding-top: 112px

    @screen lg
      padding-top: 108px
</style>
