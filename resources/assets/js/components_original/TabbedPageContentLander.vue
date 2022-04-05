<template>
  <div ref="TabbedPageContentLander">
    <div v-if="isMobile">
      <div v-for="(tab, index) in tabs" :key="'mobileTab-' + index">
        <div>
          <button
            class="AccordionButton block font-extrabold mb-2 px-8 py-6 text-lg text-left tracking-normal uppercase w-full shadow focus:no-outline"
            :class="[
              {'AccordionButton--active': activeTabsMobile.includes(tab)},
              {'omega': colour === 'text-omega-green'},
              {'d3': colour === 'text-d3-orange'},
              {'mt-8': index === 0},
              {colour: activeTabsMobile.includes(tab)}
            ]"
            @click.prevent="showTabMobile(tab)"
          >
            {{ tab }}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="Chevron float-right pt-1 w-4"
              :class="[{'Chevron--active': activeTabsMobile.includes(tab) }, {colour: activeTabsMobile.includes(tab) }]"
              viewBox="0 0 15.521 9.31"
            >
              <path
                class="fill-none stroke-current"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="3"
                d="M2,2,8.31,8.31,14.522,2"
                transform="translate(-0.5 -0.5)"
              />
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
        <ul
          class="vivo-hidden border-t-2 border-grey-lighter list-none p-0 max-w-2xl mx-auto md:flex shadow-lg"
        >
          <li
            v-for="(tab, index) in tabs"
            class="flex-1 border-grey-lighter border-l border-r"
            :key="'desktopTab-' + index"
          >
            <button
              class="TabButton bg-white block font-bold h-full leading-none px-4 py-6 text-lg text-center tracking-normal uppercase w-full lg:text-xl focus:no-outline"
              :class="[
                                hoverColour,
                                { 'TabButton--active': activeTab === tab },
                                { colour: activeTab === tab },
                                {'omega': colour === 'text-omega-green'},
                                {'d3': colour === 'text-d3-orange'}
                            ]"
              @mouseover="lazyloaded"
              @click.prevent="showTab(tab)"
              v-text="tab"
            />
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
    tabs: Array,
    colour: {
      type: String,
      default: 'text-green-thrive'
    }
  },

  computed: {
    hoverColour () {
      return `hover:${this.colour}`;
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
        this.$refs.TabbedPageContentLander.scrollIntoView();
      });
    },

    showTabMobile (tab) {
      if (this.activeTabsMobile.includes(tab)) {
        this.activeTabsMobile = filter(this.activeTabsMobile, n => n != tab);
      } else {
        this.activeTabsMobile = [...this.activeTabsMobile, tab];
      }
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
  filter: drop-shadow(15px 15px 30px rgba(0, 0, 0, 0.08));
}

.TabButton {
  border-bottom: 5px solid white;
  padding-bottom: calc(1.5rem - 5px);
}

.TabButton:hover,
.TabButton--active {
  border-color: #4ab857;
}

.omega.TabButton:hover,
.omega.TabButton--active {
  border-color: #54a892;
}

.d3.TabButton:hover,
.d3.TabButton--active {
  border-color: #f6b53b;
}

.AccordionButton {
  border-bottom: 1px solid white;
  padding-bottom: calc(1.5rem - 1px);
}

.omega.AccordionButton {
  color: white;
  background-color: #54a892;
}

.d3.AccordionButton {
  color: white;
  background-color: #f6b53b;
}

.AccordionButton--active {
  border-bottom: 3px solid #4ab857;
  padding-bottom: calc(1.5rem - 3px);
}

.omega.AccordionButton--active {
  border-bottom: 3px solid #54a892;
  padding-bottom: calc(1.5rem - 3px);
}

.d3.AccordionButton--active {
  border-bottom: 3px solid #f6b53b;
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
