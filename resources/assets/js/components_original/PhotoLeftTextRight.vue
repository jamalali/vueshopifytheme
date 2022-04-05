<template>
  <div class="PhotoLeftTextRight">
    <div class="mt-8 md:mx-8 md:my-8 lg:px-8 lg:mx-0 xl:my-16">
      <div class="items-center flex flex-col md:flex-row">
        <div class="md:w-3/5 lg:w-2/3">
          <img class="mx-auto block" :src="options.image ? options.image : options.imageDefault" :alt="options.alt" />
        </div>

        <div class="mt-8 md:mt-0 md:w-2/5 lg:w-1/3">
          <div class="mb-8 md:mb-0 mx-8 text-center md:text-left lg:mx-auto lg:w-68 xl:w-104 xl:ml-0">
            <h2 v-if="settings.title" class="font-extrabold uppercase text-3xl md:text-2xl lg:text-3xl xl:text-4xl my-4" v-html="settings.title"></h2>
            <p v-if="settings.text" class="font-medium leading-normal mb-10 md:pr-4 text-black text-sm lg:text-base xl:text-xl xxl:text-2xl xxl:pr-0" v-html="settings.text"></p>
            <a v-if="settings.buttonText" class="secondary btn-home mx-auto md:mx-0" :href="settings.buttonUrl" v-html="settings.buttonText"></a>
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
