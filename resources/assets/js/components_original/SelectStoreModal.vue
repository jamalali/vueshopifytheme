<template>
  <div
    v-if="visible"
    class="Modal bg-white-60 fixed flex items-center justify-center inset-x-0 inset-y-0 z-999999999"
  >
    <div class="bg-white max-w-md px-16 py-20 text-center w-full">
    <svg :fill="logoColor" class="block mx-auto w-40 mb-10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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

      <p class="font-bold mb-0 text-2xl">|| 'SelectStoreModal.welcome_text' ||</p>
      <p class="mb-6 mt-0 text-lg">|| 'SelectStoreModal.please_select_text' ||</p>

      <hr class="mx-auto w-24 border-black border-t mb-4" />

      <select
        ref="store"
        v-on:change="store = $event.target.value"
        class="appearance-none block border border-black font-extrabold mb-4 text-lg tracking-wide w-full | focus:no-outline"
      >
        <option :selected="detectedCountry == ''" value="">|| 'SelectStoreModal.select_text' ||</option>
        <option
          v-for="(_, country) in countries"
          :key="country"
          :value="country"
          :selected="detectedCountry == country"
          >{{ country }}</option>
      </select>

      <a
        :href="`${store ? countries[store] : ''}?store-selected=1`"
        class="btn btn--rayen bg-green block font-bold mx-auto no-underline bottom-0 left-0 px-6 py-0 relative text-white text-xs w-content lg:text-xl lg:text-base"
        :class="{'invisible': store === ''}"
        :disabled="store === ''"
        data-text="|| 'SelectStoreModal.select_button_text' ||"
        @click.prevent="selectStore"
      >
        <span class="py-3">|| 'SelectStoreModal.select_button_text' ||</span>
      </a>
    </div>
  </div>
</template>

<script>
const currentStore = "|| 'globals.settings.store_url' ||";

const countries = {
  UK: 'https://www.vivolife.co.uk',
  'USA Mainland': 'https://www.vivolife.com',
  Germany: 'https://www.vivolife.de',
  France: 'https://www.vivolife.fr',
  Austria: 'https://www.vivolife.de',
  Belgium: 'https://www.vivolife.fr',
  Bulgaria: 'https://eu.vivolife.com',
  Croatia: 'https://eu.vivolife.com',
  'Czech Republic': 'https://eu.vivolife.com',
  Denmark: 'https://eu.vivolife.com',
  Estonia: 'https://eu.vivolife.com',
  Finland: 'https://eu.vivolife.com',
  Greece: 'https://eu.vivolife.com',
  Guernsey: 'https://www.vivolife.co.uk',
  Hungary: 'https://eu.vivolife.com',
  Ireland: 'https://eu.vivolife.com',
  Italy: 'https://eu.vivolife.com',
  Jersey: 'https://www.vivolife.co.uk',
  Liechtenstein: 'https://www.vivolife.de',
  Lithuania: 'https://eu.vivolife.com',
  Luxembourg: 'https://www.vivolife.fr',
  // Malta: "https://www.vivolife.co.uk", - Removing Malta (Jed V. 2019)
  Netherlands: 'https://eu.vivolife.com',
  Poland: 'https://eu.vivolife.com',
  Portugal: 'https://eu.vivolife.com',
  Romania: 'https://eu.vivolife.com',
  Serbia: 'https://eu.vivolife.com',
  Slovakia: 'https://eu.vivolife.com',
  Slovenia: 'https://eu.vivolife.com',
  Spain: 'https://eu.vivolife.com',
  Sweden: 'https://eu.vivolife.com',
  Switzerland: 'https://www.vivolife.co.uk',
  'United Arab Emirates': 'https://www.vivolife.co.uk'
};

export default {
  props: {
    logoColor: {
      type: String,
      default: '#000000'
    }
  },

  data () {
    const urlParams = new URLSearchParams(window.location.search);
    let visible = false;

    try {
      if (urlParams.has('store-selected') || urlParams.has('nointerruptions') || this.isBlog()) {
        localStorage.setItem('storeSelected', true);
      } else {
        visible = !localStorage.getItem('storeSelected');
      }
    } catch (e) {}

    if (!visible) {
      EventBus.$emit('store-selector-closed', true);
    }

    return { countries, visible, store: '', detectedCountry: '' };
  },

  mounted () {
    if (this.visible === true) {
      this.visible = this.axiosGetCountry();
    }
  },

  watch: {
    visible (newVisible) {
      document.body.classList.toggle('body--no-scroll', newVisible);
    }
  },

  methods: {
    selectStore (event) {
      try {
        localStorage.setItem('storeSelected', true);
      } catch (e) {}

      if (currentStore == this.countries[this.store]) {
        this.visible = false;
        EventBus.$emit('store-selector-closed', true);
        return;
      }

      window.location.href = `${this.countries[this.store]}?store-selected=1`;
    },

    isBlog () {
      return window.location.pathname.match(/blog/g) !== null;
    },

    axiosGetCountry () {
      var output = '';
      var selected = false;
      axios({
        method: 'get',
        url: 'https://api.ipstack.com/check?access_key=ad51603f48aa68dab5807a43c2d626f6',
        responseType: 'json'
      }).then(
        function (response) {
          const siteConfig = [
            {
              site: 'vivolife.co.uk',
              c_codes: ['GB', 'GG', 'JE', 'CH', 'AE']
            },
            {
              site: 'vivolife.de',
              c_codes: ['DE', 'AT', 'LI', 'LU']
            },
            {
              site: 'vivolife.fr',
              c_codes: ['FR']
            },
            {
              site: 'eu.vivolife.com',
              c_codes: [
                'BE',
                'BG',
                'HR',
                'CY',
                'CZ',
                'DK',
                'EE',
                'FI',
                'GR',
                'HU',
                'IE',
                'IT',
                'LV',
                'LT',
                'MT',
                'NL',
                'PO',
                'PT',
                'RO',
                'SK',
                'SI',
                'ES',
                'SE'
              ]
            },
            {
              site: 'vivolife.com',
              c_codes: ['US']
            }
          ];
          var i;
          for (i = 0; i < siteConfig.length; i++) {
            if (document.location.href.indexOf(siteConfig[i].site) > -1) {
              var j;
              for (j = 0; j < siteConfig[i].c_codes.length; j++) {
                if (response.data.country_code == siteConfig[i].c_codes[j]) {
                  localStorage.setItem('storeSelected', true);
                  selected = true;
                  EventBus.$emit('store-selector-closed', true);
                }
              }
            }
          }
          if (!selected) {
            selected = false;
          }
          this.detectedCountry = response.data.country_name;
          if (this.detectedCountry === 'United States') { this.detectedCountry = 'USA Mainland'; }
          if (this.detectedCountry === 'United Kingdom') { this.detectedCountry = 'UK'; }
          if (countries[this.detectedCountry]) {
            this.store = this.detectedCountry;
          }
          this.selected = selected;
          this.visible = !this.selected;
        }.bind(this)).catch((error) => {
        console.warn(error.message);
        this.visible = true;
      });
    }
  }
};
</script>

<style scoped>
.z-999999999 {
  z-index: 999999999;
}

select {
  appearance: none;
  -webkit-appearance: none;
  height: 50px;
  padding: 0 20px 0 15px;
  border-radius: 0;
  max-width: 100%;
  font-size: 14px;
  /* background-image: url(//cdn.shopify.com/s/files/1/0578/1097/t/93/assets/ico-select.svg?12515988174062876509); This image 404s */
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-color: #fff;
}
</style>
