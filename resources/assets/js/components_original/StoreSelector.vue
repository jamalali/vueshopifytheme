<template>
  <div @click.stop>
    <div
      class="cursor-pointer flex h-full items-center ml-3"
      @click="showStoresList = ! showStoresList"
      @mouseover="cancelTimeout"
      @mouseout="createTimeout"
    >
      <component :is="storeRegionFlags[storeRegion]" class="mr-2 w-4 rounded-full"></component>

      <span :class="textShade" class="h-full">{{ storeRegion.toUpperCase() }}</span>
    </div>

    <div
      class="relative"
      v-if="showStoresList"
      @mouseover="cancelTimeout"
      @mouseout="createTimeout"
    >
      <ul class="absolute bg-black list-none p-0 mt-3 top-0 left-0 px-3">
        <li v-for="(region, index) in storeRegions" :key="index" class="py-2">
          <a class="flex items-center justify-between no-underline text-white hover:text-grey" :href="storeRegionURLs[region]">
            <component :is="storeRegionFlags[region]" class="mr-2 rounded-full w-4"></component>
            {{ region.toUpperCase() }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import AmericanFlag from "./AmericanFlag";
  import EuropeanFlag from "./EuropeanFlag";
  import GermanFlag from "./GermanFlag";
  import FrenchFlag from "./FrenchFlag";
  import UnionJackFlag from "./UnionJackFlag";

  export default {
    props: {
      textShade: {
        type: String,
        required: true
      }
    },

    components: { AmericanFlag, EuropeanFlag, GermanFlag, FrenchFlag, UnionJackFlag },

    /**
     * Create an event listener on the document so that if a user clicks outside
     * of the store selector then it is hidden. This only applies for elements
     * that allow click events to propagate to their parents.
     */
    mounted() {
      document.addEventListener('click', () => {
        this.showStoresList = false;
      });
    },

    created() {
      this.storeRegion = this.storeRegion.toLowerCase();
      //console.log(`Store loaded, region: ${this.storeRegion}`);
      let index = this.storeRegions.indexOf(this.storeRegion);
      this.$delete(this.storeRegions, index);
    },

    /**
     * Create the initial data.
     */
    data() {
      return {
        storeRegion: '|| 'globals.settings.store_region' ||',
        storeRegions: ['uk', 'us', 'eu', 'de', 'fr'],
        storeRegionFlags: {
          'uk': 'union-jack-flag',
          'us': 'american-flag',
          'eu': 'european-flag',
          'de': 'german-flag',
          'fr': 'french-flag'
        },
        storeRegionURLs: {
          'uk': 'https://www.vivolife.co.uk/',
          'us': 'https://www.vivolife.com/',
          'eu': 'https://eu.vivolife.com/',
          'de': 'https://www.vivolife.de/',
          'fr': 'https://www.vivolife.fr/'
        },
        showStoresList: false,
        timeout: null,
      };
    },

    methods: {
      /**
       * Create a timeout that will hide the store selector after one second.
       */
      createTimeout() {
        this.timeout = setTimeout(() => {
          this.showStoresList = false;
        }, 1000);
      },

      /**
       * Cancel the timeout that will hide the store selector.
       */
      cancelTimeout() {
        clearTimeout(this.timeout);
      }
    }
  };
</script>
