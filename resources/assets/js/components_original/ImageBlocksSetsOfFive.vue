<template>
  <div class="ImageBlocksSetsOfFive">
    <div
      :class="'set-' + randomNumber"
      class="flex flex-wrap justify-center md:-mx-4 md:flex-nowrap">
      <div
        class="bg-cover bg-no-repeat bg-center w-1/2 pb-1/2 mb-1 md:pb-1/4 xl:w-1/5 md:mb-0 xl:pb-1/5 -ml-1 mr-1 md:-ml-0 md:mr-0"
        :style="{'background-image': 'url(' + [sets[randomNumber].settings.image01 ? sets[randomNumber].settings.image01 : options.imageDefault] + ')'}"
        :data-alt="sets[randomNumber].options.image01Alt">
      </div>
      <div
        class="bg-cover bg-no-repeat bg-center w-1/2 pb-1/2 mb-1 md:pb-1/4 xl:w-1/5 md:mb-0 xl:pb-1/5"
        :style="{'background-image': 'url(' + [sets[randomNumber].settings.image02 ? sets[randomNumber].settings.image02 : options.imageDefault] + ')'}"
        :data-alt="sets[randomNumber].options.image02Alt">
      </div>
      <div
        class="bg-cover bg-no-repeat bg-center w-1/2 pb-1/2 mb-1 md:pb-1/4 xl:w-1/5 md:mb-0 xl:pb-1/5 -ml-1 mr-1 md:-ml-0 md:mr-0"
        :style="{'background-image': 'url(' + [sets[randomNumber].settings.image03 ? sets[randomNumber].settings.image03 : options.imageDefault] + ')'}"
        :data-alt="sets[randomNumber].options.image03Alt">
      </div>
      <div
        class="bg-cover bg-no-repeat bg-center w-1/2 pb-1/2 mb-1 md:pb-1/4 xl:w-1/5 md:mb-0 xl:pb-1/5"
        :style="{'background-image': 'url(' + [sets[randomNumber].settings.image04 ? sets[randomNumber].settings.image04 : options.imageDefault] + ')'}"
        :data-alt="sets[randomNumber].options.image04Alt">
      </div>
      <div
        class="bg-cover bg-no-repeat bg-center w-1/2 pb-1/2 mb-1 md:pb-1/4 xl:w-1/5 md:mb-0 xl:pb-1/5 hidden xl:block"
        :style="{'background-image': 'url(' + [sets[randomNumber].settings.image05 ? sets[randomNumber].settings.image05 : options.imageDefault] + ')'}"
        :data-alt="sets[randomNumber].options.image05Alt">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sets: {
      type: Array,
      required: true
    	},
    options: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      randomNumber: 0
    };
  },

  created: function () {
    this.randomNumber = Math.ceil(Math.random() * this.sets.length) - 1;
  }
};
</script>
