<template>
  <div class="HeroImageStaticVs bg-cover bg-no-repeat bg-center"
    :style="{
      '--mobile-background': 'url(' + [options.mobileImage != '' ? options.mobileImage : options.mobileImageDefault] + ')',
      '--desktop-background': 'url(' + [options.desktopImage != '' ? options.desktopImage : options.desktopImageDefault] + ')'
    }">
    <div class="bg-black-full-45 px-16 py-16 md:py-20 lg:py-8">
      <div class="items-center text-white text-center justify-center font-extrabold text-3xl uppercase leading-none tracking-wider max-w-xs mx-auto md:text-2xl lg:text-3xl lg:max-w-sm lg:my-16 xl:text-4xl"
        v-html="settings.title != '' ? settings.title : '|| 'HeroImageStaticVs.which_protein_text' ||'">
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

<style scoped>
  .HeroImageStaticVs {
    background-image: var(--mobile-background);
  }

  @screen lg {
    .HeroImageStaticVs {
      background-image: var(--desktop-background);
    }
  }
</style>
