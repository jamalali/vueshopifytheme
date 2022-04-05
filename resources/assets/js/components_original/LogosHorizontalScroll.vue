<template>
  <div class="LogosHorizontalScroll">
    <div class="overflow-x-scroll py-6 xl:text-center">
      <img
        class="mx-4 max-w-none h-12 md:h-16 lg:h-auto lg:max-w-full lg:mx-auto xl:h-24 xl:mx-4"
        :src="[options.image ? options.image : options.imageDefault]"
        :alt="[settings.image !== null && settings.image.alt ? settings.image.alt : 'home compostable packaging, plant based, winner vegfest, one tree planted per order, carbon neutral, vegan, whole foods']"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true
    	},
    options: {
      type: Object,
      required: true
    }
  }
};
</script>
