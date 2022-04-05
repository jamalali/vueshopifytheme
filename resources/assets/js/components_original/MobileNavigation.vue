<template>
  <portal to="mobile-navigation">
    <nav
      class="fixed scroll-momentum overflow-y-scroll top-0 left-0 w-screen lg:hidden"
      :style="{ 'height': `${trueWindowHeight}px` }"
    >
      <div class="flex h-20 px-8 w-full items-center country-popup-spacer">
        <div class="flex-1">
          <!--<a href="#">
            <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <circle class="search-svg-1" cx="12.96" cy="12.62" r="9.46"/>
              <line class="search-svg-2" x1="21.5" y1="22.06" x2="27.45" y2="28"/>
            </svg>
          </a>-->
        </div>

        <div>
          <a href="/">
            <svg :fill="logoColor" class="h-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
        </a>
        </div>
        <div class="flex-1"></div>
      </div>

      <div class="search-form-container w-3/4" v-if="searchEnabled">
        <form action="/search" class="border-grey-lighter border-t-2 flex search-form p-6">
          <input placeholder="Enter search terms" ref="searchInput" class="flex-grow outline-none" type="text" name="q" :value="searchTerms" autocomplete="off" />
          <button type="submit" class="h-6">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <circle class="search-svg-1" cx="12.96" cy="12.62" r="9.46" />
              <line class="search-svg-2" x1="21.5" y1="22.06" x2="27.45" y2="28" />
            </svg>
          </button>
        </form>
      </div>

      <ul class="list-none p-0 w-3/4">
        <li
          v-for="(navigationItem, index) in navigationItems"
          :key="index"
          v-if="navigationItem.text.length > 0"
        >
          <a
            :class="[
              'block border-grey-lighter font-extrabold p-6 no-underline text-base text-black',
              index + 1 == navigationItems.length ? 'border-b-2' : 'border-b',
              index == 0 ? 'border-t-2' : 'border-t'
            ]"
            :href="navigationItem.link"
            v-if="navigationItem.link"
          >
            {{ navigationItem.text }}
            <svg
              class="float-right w-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-13719.85 11297.851 8.4 14.7"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2px"
                d="M2,2,8.4,8.4,14.7,2"
                transform="translate(-13720.85 11313.551) rotate(-90)"
              />
            </svg>
          </a>

          <span
            :class="[
              'block border-grey-lighter font-extrabold p-6 no-underline text-base text-black',
              index + 1 == navigationItems.length ? 'border-b-2' : 'border-b',
              index == 0 ? 'border-t-2' : 'border-t',
              navigationItem.isHeading ? 'text-white bg-black' : 'text-black',
            ]"
            v-else
            @click.prevent="navigationItem.dropdownOpen = !navigationItem.dropdownOpen"
          >
            {{ navigationItem.text }}
            <desktop-navbar-expandable-icon
              class="float-right w-3 mt-1"
              v-if="!navigationItem.isHeading"
              :open="navigationItem.dropdownOpen"
            />
          </span>

          <transition :css="false" @enter="animateOpenDropdown" @leave="animateCloseDropdown">
            <ul
              class="list-none p-0 overflow-hidden"
              v-show="(!navigationItem.isDropdown || navigationItem.dropdownOpen) && navigationItem.subItems"
            >
              <li v-if="index == 0" v-for="link in shopNavExtraLinks" :key="link.key" class="border-b border-grey-lighter">
                <a :href="link.url" class="flex justify-between items-center"
                :class="['bg-grey-light font-extrabold p-6 no-underline text-base text-black']"
                >
                  <div>
                    {{ link.text }}
                  </div>
                  <svg
                  class="float-right w-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-13719.85 11297.851 8.4 14.7"
                  >
                  <path
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2px"
                    d="M2,2,8.4,8.4,14.7,2"
                    transform="translate(-13720.85 11313.551) rotate(-90)"
                  />
                </svg>
                </a>
              </li>
              <li
                v-for="(subItem, subIndex) in navigationItem.subItems"
                v-if="subItem.text.length > 0"
                :key="subIndex"
                class="border-b border-grey-lighter"
              >
                <a
                  class="flex justify-between items-center"
                  :class="['bg-grey-light font-extrabold p-6 no-underline text-base text-black']"
                  :href="subItem.link"
                  @click="openOrOpen($event, subItem)"
                >
                  <div>
                    {{ subItem.text }}
                    <div
                      v-if="subItem.subText"
                      class="font-normal pt-1 text-xs"
                      v-text="subItem.subText"
                    />
                  </div>

                  <svg
                    class="float-right w-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-13719.85 11297.851 8.4 14.7"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2px"
                      d="M2,2,8.4,8.4,14.7,2"
                      transform="translate(-13720.85 11313.551) rotate(-90)"
                    />
                  </svg>
                </a>

                <transition :css="false" @enter="animateOpenChildDropdown" @leave="animateCloseChildDropdown">
                  <ul class="list-none p-0 overflow-hidden" v-show="subItem.links && subItem.dropdownOpen">
                    <li v-for="subSubItem in subItem.links" :key="subSubItem.key" class="border-b border-grey-lighter">
                      <a
                        class="flex justify-between items-center"
                        :class="['font-extrabold p-6 no-underline text-base text-black']"
                        :href="subSubItem.link"
                      >
                        <div>
                          {{ subSubItem.text }}
                        </div>
                      </a>
                    </li>
                  </ul>
                </transition>
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </nav>
  </portal>
</template>

<script>
import gsap from 'gsap';
import DesktopNavbarExpandableIcon from './DesktopNavbarExpandableIcon';

export default {
  props: {
    logoColor: {
      type: String,
      default: '#000000'
    },
    loggedIn: Boolean,
    vivoNav: {
      type: Array,
      required: true
    },
    shopNav: {
      type: Array,
      required: true
    },
    shopNavExtraLinks: {
      type: Array
    },
    topLevelNav: {
      type: Array,
      required: true
    },
    footerNav: {
      type: Array,
      required: true
    }
  },

  components: { DesktopNavbarExpandableIcon },

  /**
   * Create the initial data.
   *
   * @return {Object}
   */
  data () {
    return {
      searchTerms: Vivo.searchTerms, // Vivo.searchTerms is set in theme.liquid
      searchEnabled: window.searchEnabled,
      navigationItems: [
        {
          text: "|| 'MobileNavigation.subnav_shop_label' ||",
          isDropdown: true,
          dropdownOpen: false,
          subItems: this.shopNav
        },
        {
          text: "|| 'MobileNavigation.subnav_vivo_label' ||",
          isDropdown: true,
          dropdownOpen: false,
          subItems: this.vivoNav
        },
        ...this.topLevelNav,
        {
          text: "|| 'MobileNavigation.top_level_account_label' ||",
          isDropdown: false,
          isHeading: true,
          subItems: this.loggedIn
            ? [
              {
                text: "|| 'MobileNavigation.subnav_account_1_label' ||",
                link: "|| 'MobileNavigation.subnav_account_1_link' ||"
              },
              {
                text: "|| 'MobileNavigation.subnav_account_2_label' ||",
                link: "|| 'MobileNavigation.subnav_account_2_link' ||"
              },
              {
                text: "|| 'MobileNavigation.subnav_account_3_label' ||",
                link: "|| 'MobileNavigation.subnav_account_3_link' ||"
              }
            ]
            : [{
              text: "|| 'MobileNavigation.subnav_account_4_label' ||",
              link: "|| 'MobileNavigation.subnav_account_4_link' ||"
            }]
        },
        ...this.footerNav,
        {
          text: "|| 'MobileNavigation.top_level_select_store_label' ||",
          isDropdown: true,
          dropdownOpen: false,
          subItems: [
            { text: 'UK', link: 'https://www.vivolife.co.uk' },
            { text: 'DE', link: 'https://www.vivolife.de' },
            { text: 'EU', link: 'https://eu.vivolife.com' },
            { text: 'USA', link: 'https://www.vivolife.com' },
            { text: 'FR', link: 'https://www.vivolife.fr' }
          ]
        }
      ]
    };
  },

  computed: {
    /**
     * Get the window height.
     *
     * It would be preferable to use 100vh to set elements to match the window
     * height but there is a "feature" in iOS where 100vh includes an area
     * obscured by the browser UI.
     *
     * @return {Number}
     */
    trueWindowHeight () {
      return window.innerHeight;
    }
  },

  methods: {
    openOrOpen (e, subItem) {
      if (subItem.link == '#') {
        subItem.dropdownOpen = !subItem.dropdownOpen;
        e.preventDefault();
      }
    },
    animateOpenChildDropdown (el, done) {
      const parent = el.parentElement;
      const grandParent = parent.parentElement;

      grandParent.style.removeProperty('height');

      gsap.set(el, {
        height: 'auto'
      });
      gsap.from(el, {
        duration: 0.3,
        height: 0,
        onComplete: done
      });
    },

    animateCloseChildDropdown (el, done) {
      gsap.to(el, {
        duration: 0.3,
        height: 0,
        onComplete: done
      });
    },

    /**
     * Animate the reveal of a sub menu.
     */
    animateOpenDropdown (el, done) {
      gsap.set(el, {
        height: 'auto'
      });
      gsap.from(el, {
        duration: 0.3,
        height: 0,
        onComplete: done
      });
    },

    /**
     * Animate the removal of a sub menu.
     */
    animateCloseDropdown (el, done) {
      gsap.to(el, {
        duration: 0.3,
        height: 0,
        onComplete: done
      });
    }
  }
};
</script>
