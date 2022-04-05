<template>
  <div class="Logos grayscale opacity-50 text-center px-4 md:px-0 pt-4 md:pt-6 md:pb-2 xl:pt-10 xl:pb-0">
    <h2 class="font-bold uppercase text-2xl xl:text-3xl mb-2">As seen on TV and media</h2>
    <div class="flex flex-wrap lg:flex-nowrap md:overflow-x-scroll justify-center">
      <img v-for="image in images"
        class="h-10 xxl:h-16 mx-4 my-2 pointer-events-none"
        :src="image.url"
        :alt="image.alt"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>
