<template>
  <div class="TextHighlight">
    <div class="px-8 pb-8 max-w-md mx-auto md:px-16 md:pb-16 xl:max-w-full xl:px-56 xl:py-24">
      <div class="items-center text-center justify-center font-extrabold text-xl leading-normal md:text-sm xl:text-4xl">
        <template v-if="settings.text && settings.text !== ''">
          <div v-html="settings.text"></div>
        </template>
        <template v-else>
          We believe in our products so much we offer a <span class="text-green">30 day money back guarantee</span> on everything we sell. If this product doesn’t meet your expectations, simply send it back to us for a full refund. No questions asked.
        </template>
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
      type: Object
    }
  }
};
</script>
