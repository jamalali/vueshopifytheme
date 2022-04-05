<template>
  <div class="ImageTextButton">
    <div class="flex flex-wrap mx-auto px-8 justify-center md:max-w-xl xl:max-w-4xl">

      <div v-for="(item, index) in items" :key="index"
        :index="index"
        class="w-80 mb-24 md:w-66 md:mx-auto md:mb-0 xl:w-128">
        <img class="h-36 w-36 mx-auto block mb-6 xl:w-70 xl:mb-8" :src="item.settings.image ? item.settings.image : options.imageDefault" :alt="item.options.alt" />
        <div class="text-center">
          <h2 v-if="item.settings.title" class="font-bold text-xl md:text-lg lg:text-xl xl:text-3xl" v-html="item.settings.title"></h2>
          <p v-if="item.settings.text" class="font-semibold leading-normal mt-3 mb-6 text-grey-darker text-sm md:text-xs md:h-20 xl:text-lg xl:h-30 xl:mt-6" v-html="item.settings.text"></p>
          <a v-if="item.settings.buttonText" class="secondary btn-home" :href="item.settings.buttonUrl" v-html="item.settings.buttonText"></a>
        </div>
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
