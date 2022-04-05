<template>
  <div class="PhotoLeftTextRight02">
    <div class="overflow-hidden md:py-20">
      <div class="md:flex">
        <div class="left-part flex-grow flex items-center py-8 md:py-0 md:mr-8 md:w-1/4 xl:flex-1">
          <img :src="options.image ? options.image : options.imageDefault" :alt="options.alt" />
        </div>
        <div class="right-part flex-1 flex items-center px-12 pb-10 md:px-0 md:pb-0">
          <div class="text md:w-3/4 xl:mx-auto xl:w-3/5">
            <h2 v-if="settings.title" class="title uppercase text-center text-3xl font-extrabold mb-2 leading-tight md:text-3xl md:text-left xl:text-6xl" v-html="settings.title"></h2>
            <div v-if="settings.text" class="text-content mb-6 text-xl text-center leading-normal md:text-left md:text-lg md:mb-10 xl:text-3xl xl:mb-18" v-html="settings.text"></div>
            <a v-if="settings.buttonText" class="secondary btn-home block mx-auto md:inline md:mx-0" :href="settings.buttonUrl" v-html="settings.buttonText"></a>
          </div>
        </div>
      </div>
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
