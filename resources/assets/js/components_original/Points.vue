<template>
  <div class="Points">
    <div class="flex flex-wrap mx-auto px-8 justify-center md:max-w-xl xl:max-w-4xl">

      <div v-for="(point, index) in points" :key="index"
        :index="index"
        class="text-center mx-auto my-6 md:mx-2 md:my-4 lg:mx-4 xxl:mx-6">
        <div class="flex items-center h-8 md:mr-0 md:mb-4 xl:h-16">
          <img class="w-8 mx-auto xl:w-16" :src="point.settings.image ? point.settings.image : options.imageDefault" :alt="point.options.alt ? point.options.alt : point.settings.text" />
        </div>
        <div class="font-semibold w-32 h-12 mx-auto mt-4 text-sm md:text-xs md:mt-0 lg:w-38 xl:font-normal xl:text-base" v-html="point.settings.text">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    points: {
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
