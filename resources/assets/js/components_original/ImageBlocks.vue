<template>
  <div class="ImageBlocks">
    <div class="flex flex-wrap justify-center md:-mx-4 md:flex-nowrap">

      <div v-for="(item, index) in items" :key="index"
        :index="index"
        class="bg-cover bg-no-repeat bg-center w-1/2 pb-1/2 mb-1 md:pb-1/4 md:mb-0 xl:pb-1/5"
        :class="{
          '-ml-1 mr-1 md:-ml-0 md:mr-0': index % 2 === 0,
          'hidden xl:block': (index > 4) && (index % 2 === 0)
        }"
        :style="{'background-image': 'url(' + [item.settings.image ? item.settings.image : options.imageDefault] + ')'}"
        :data-alt="item.options.alt">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    	},
    options: {
      type: Object,
      required: true
    }
  }
};
</script>
