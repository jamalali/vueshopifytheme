<template>
  <div class="flex-col px-8 py-4 flex items-center w-full md:w-1/2 lg:w-1/4">
    <slot></slot>

    <h4
      class="text-center"
      v-text="title"
    />

    <p
      class="text-center text-light text-xs w-full leading-normal"
      v-text="text"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },

    text: {
      type: String,
      required: true
    }
  }
};
</script>
