<template>
  <div ref="TabbedPageContent">
    <div v-if="isMobile">
      <div v-for="(tab, index) in tabs" :key="'mobileTab-' + index">
        <div>
            <button
                class="AccordionButton block font-extrabold mb-2 px-8 py-6 text-lg text-left tracking-normal uppercase w-full shadow focus:no-outline"
                :class="[
                  {
                    'AccordionButton--active': activeTabsMobile.includes(tab),
                    'bg-magic-chaga-chai': tabIncludes(index,'chaga chai'),
                    'bg-magic-raw-hot': tabIncludes(index,'raw hot'),
                    'bg-magic-golden-turmeric': tabIncludes(index,'golden turmeric'),
                    'bg-magic-matcha-coconut': tabIncludes(index,'matcha coconut'),
                    'mt-8': index == 0,
                    'border-b-3 border-green-thrive': !customTab(index) && activeTabsMobile.includes(tab)
                  },
                  customTab(index) ? 'text-white' : 'text-green-thrive'
                ]"
                @click.prevent="showTabMobile(tab)"
            >
                {{ tab }}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="Chevron float-right pt-1 w-4 text-green-thrive"
                :class="[
                  {'Chevron--active': activeTabsMobile.includes(tab)},
                  customTab(index) ? 'text-white' : 'text-green-thrive'
                ]"
                viewBox="0 0 15.521 9.31">
                <path
                  :class="[customTab(index) ? 'stroke-white' : 'stroke-green-thrive']"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                  d="M2,2,8.31,8.31,14.522,2"
                  transform="translate(-0.5 -0.5)" />
              </svg>
            </button>
        </div>

        <tabbed-page-content-transition>
          <slot v-if="activeTabsMobile.includes(tab)" :name="tab" />
        </tabbed-page-content-transition>
      </div>
    </div>

    <div v-else>
      <div class="StickyTabs mb-8 px-4">
        <ul class="vivo-hidden border-t-2 border-grey-lighter list-none p-0 max-w-4xl mx-auto md:flex">
          <li
            v-for="(tab, index) in tabs"
            class="flex-1 border-grey-lighter border-l border-r"
            :key="'desktopTab-' + index">
            <button
              class="TabButton bg-white block border-b-5 font-bold h-full leading-none px-4 py-6 text-lg text-center tracking-normal uppercase w-full lg:text-xl focus:no-outline hover:text-green-thrive"
              :class="[
                activeTab == tab ? 'TabButton--active' : 'border-white',
                {
                  'TabButton--active': activeTab == tab,
                  'border-green-thrive text-green-thrive': !customTab(index) && activeTab == tab,
                  'border-white hover:text-green-thrive': !customTab(index),
                  'text-magic-chaga-chai hover:text-magic-chaga-chai': tabIncludes(index,'chaga chai'),
                  'border-magic-chaga-chai': tabIncludes(index,'chaga chai') && activeTab == tab,
                  'text-magic-raw-hot hover:text-magic-raw-hot': tabIncludes(index,'raw hot'),
                  'border-magic-raw-hot': tabIncludes(index,'raw hot') && activeTab == tab,
                  'text-magic-golden-turmeric hover:text-magic-golden-turmeric': tabIncludes(index,'golden turmeric'),
                  'border-magic-golden-turmeric': tabIncludes(index,'golden turmeric') && activeTab == tab,
                  'text-magic-matcha-coconut hover:text-magic-matcha-coconut': tabIncludes(index,'matcha coconut'),
                  'border-magic-matcha-coconut': tabIncludes(index,'matcha coconut') && activeTab == tab
                }
              ]"
              @mouseover="lazyloaded"
              @click.prevent="showTab(tab)"
              v-text="tab" />
          </li>
        </ul>
      </div>

      <div
        v-for="tab in tabs"
        :key="'tabContent-' + tab.replace(/\s+/g, '-').toLowerCase()"
        v-if="lazyload && activeTab == tab">
        <slot :name="tab" />
      </div>
    </div>
  </div>
</template>

<script>
import { filter } from 'lodash';
import TabbedPageContentTransition from './TabbedPageContentTransition';

function isMobile () {
  const BREAKPOINT = 768;
  return window.innerWidth < BREAKPOINT;
}

let resizing = false;

export default {
  components: { TabbedPageContentTransition },
  props: {
    tabs: {
      type: Array,
      required: true
    },
    ids: {
      type: Array,
      default: () => {
        return [];
      },
      required: false
    }
  },

  data () {
    const urlParams = new URLSearchParams(window.location.search);
    const activeTab = this.tabs[parseInt(urlParams.get('tab') || 0)];

    return {
      activeTab,
      activeTabsMobile: [activeTab],
      isMobile: isMobile(),
      lazyload: false,
      trustpilot: false
    };
  },

  mounted () {
    document.addEventListener('resize', this.documentResized);

    window.addEventListener('scroll', this.lazyloaded);
    window.addEventListener('wheel', this.lazyloaded);
    window.addEventListener('touchstart', this.lazyloaded);
  },

  methods: {
    showTab (tab) {
      this.activeTab = tab;
      this.$nextTick(() => {
        this.loadTrustpilot();
        this.$refs.TabbedPageContent.scrollIntoView();
      });
    },

    showTabMobile (tab) {
      if (this.activeTabsMobile.includes(tab)) {
        this.activeTabsMobile = filter(this.activeTabsMobile, n => n != tab);
      } else {
        this.activeTabsMobile = [...this.activeTabsMobile, tab];
      }
    },

    customTab (currentTab) {
      let tab = this.tabs[currentTab].toLowerCase();
      if (this.ids.length > 0 && typeof (this.ids[currentTab]) == 'string') {
        tab = this.ids[currentTab].toLowerCase();
      }
      return tab.includes('chaga chai') || tab.includes('raw hot') || tab.includes('golden turmeric') || tab.includes('matcha coconut');
    },

    tabIncludes (currentTab, identifier) {
      let tab = this.tabs[currentTab].toLowerCase();
      if (this.ids.length > 0 && typeof (this.ids[currentTab]) == 'string') {
        tab = this.ids[currentTab].toLowerCase();
      }
      const string = identifier.toLowerCase();
      return tab.includes(string);
    },

    clickSelect () {
      this.$refs.selectInput.click();
    },

    documentResized () {
      if (resizing) return;

      requestAnimationFrame(() => {
        resizing = true;
        this.isMobile = isMobile();
        resizing = false;
      });
    },

    lazyloaded () {
      if (this.lazyload) {
        if (this.trustpilot) return;

        this.loadTrustpilot();

        return;
      }

      this.lazyload = true;
    },

    loadTrustpilot () {
      if (window.Trustpilot && document.getElementsByClassName('trustpilot-widget').length > 0) {
        document.getElementsByClassName('trustpilot-widget').forEach((element) => {
          if (!element.classList.contains('loaded')) {
            window.Trustpilot.loadFromElement(element);
            element.classList.add('loaded');
            this.trustpilot = true;
          }
        });
      }
    }
  },

  destroyed () {
    document.removeEventListener('resize', this.documentResized);

    window.removeEventListener('scroll', this.lazyloaded);
    window.removeEventListener('wheel', this.lazyloaded);
    window.removeEventListener('touchstart', this.lazyloaded);
  }
};
</script>

<style scoped>
  .StickyTabs {
      position: sticky;
      top: 80px;
      z-index: 100;
      transition: top 0.3s;
  }

  @media screen and (min-width: 992px) {
      .StickyTabs {
          top: 164px;
      }

      .body--desktop-navbar-shrunk .StickyTabs {
          top: 76px;
      }
  }

  ul {
      filter: drop-shadow(15px 15px 30px rgba(0,0,0,0.08));
  }

  .TabButton {
      padding-bottom: calc(1.5rem - 5px);
  }

  .AccordionButton {
      padding-bottom: calc(1.5rem - 1px);
  }

  .AccordionButton--active {
      padding-bottom: calc(1.5rem - 3px);
  }

  .Chevron {
      transition: transform 0.3s;
      transform: rotate(-90deg);
  }

  .Chevron--active {
      transform: rotate(0deg);
  }
</style>
