<template>
    <div class="max-w-4xl mx-auto">

        <h3 class="text-center uppercase text-plaa-sign-up font-normal font-primary lg:text-2xl xl:text-3xl tracking-wide mb-5 font-bold italic">
            || 'PlaaProgrammePicker.choose_programme_title' ||
        </h3>

        <div class="flex flex-wrap justify-center md:flex-nowrap">

            <div v-for="(programme, index) in programmes" :key="index"
            :index="index"
            :class="[{ 'no-image': !programme.image }, programme.colour]"
            class="programme w-full overflow-hidden">

                <div class="bg-cover bg-no-repeat bg-center pb-full relative"
                :style="{ backgroundImage: programme.image && 'url(' + programme.image + ')' }">

                    <div v-if="programme.image" class="absolute bg-black-full-50 h-full w-full"></div>

                    <div class="absolute flex flex-col h-full w-full">

                        <div class="flex flex-col h-3/4 justify-center text-center">

                            <h3 class="font-normal tracking-wider uppercase text-white lg:text-2xl xl:text-3xl font-bold italic">
                                {{ programme.animal }}
                            </h3>

                            <div class="bg-white h-1 mx-auto w-6 mb-1 mt-2 xl:w-8"></div>

                            <h4 class="attribute uppercase font-normal font-primary text-xl tracking-wider lg:text-2xl xl:text-3xl font-bold italic">
                                {{ programme.attribute }}
                            </h4>

                            <p class="hidden max-w-56 mb-0 mx-auto text-sm text-white leading-snug">
                                {{ programme.blurb }}
                            </p>

                        </div>

                        <div class="text-center">
                            <a class="max-w-104 mx-4 bg-transparent border-2 cta inline-block px-6 py-3 tracking-wider hover:bg-transparent text-white uppercase" :class="programme.attribute" :href="programme.url">
                                {{ programme.linkTitle }}
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
  props: {
    programmes: {
      type: Array,
      required: true
    	},
    options: {
      type: Object
    },
    programme: {
      type: Array
    }
  },
  mounted: function () {
    document.onreadystatechange = () => {
      if (document.readyState == 'complete') {
        var i = 0;
        for (i = 0; i < this.programmes.length; i++) {
          if (localStorage.getItem('plaa-' + this.programmes[i].attribute.toLowerCase())) {
            var url = this.programmes[i].url.replace('sign-up', 'dashboard');
            $('a.bg-transparent.' + this.programmes[i].attribute).attr('href', url);
            $('ul.bg-plaa-sign-up a:contains(' + this.programmes[i].attribute + ')').attr('href', url);
          }
        }
      }
    };
  }
};
</script>

<style lang="sass" scoped>
  .programme

    &.purple

      .attribute
        @apply text-plaa-purple

      .cta
        @apply border-plaa-purple

    &.red

      &.no-image
        @apply bg-plaa-red

      .attribute
        @apply text-plaa-red

      .cta
        @apply border-plaa-red

    &.blue

      &.no-image
        @apply bg-plaa-blue

      .attribute
        @apply text-plaa-blue

      .cta
        @apply border-plaa-blue

    &.no-image

      .attribute
        @apply text-white

      .cta
        @apply text-white border-white
</style>
