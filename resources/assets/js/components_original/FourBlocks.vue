<template>
  <div class="FourBlocks">
    <div class="hidden xl:block bg-white pt-14 pb-6">
      <h2 class="font-extrabold text-2xl uppercase text-center tracking-wide">{{ settings.title }}</h2>
    </div>

    <div class="md:hidden">
      <div class="flex mb-1">
        <div class="flex-1 relative pb-1/2 image-hover-zoom overflow-hidden mr-1">
          <img class="absolute h-full w-full object-cover" :src="options.block01.image ? options.block01.image : options.block01.imageDefault" :alt="options.block01.alt" />
          <a :href="settings.blockOneUrl" class="flex flex-wrap content-center text-center absolute h-full w-full bg-black-full-33 cursor-pointer items-center no-underline">
            <div class="uppercase mx-auto font-extrabold text-white tracking-wide leading-tight no-underline" v-html="settings.blockOneText"></div>
          </a>
        </div>
        <div class="flex-1 relative pb-1/2 image-hover-zoom overflow-hidden">
          <img class="absolute h-full w-full object-cover" :src="options.block02.image ? options.block02.image : options.block02.imageDefault" :alt="options.block02.alt" />
          <a :href="settings.blockTwoUrl" class="flex flex-wrap content-center text-center absolute h-full w-full bg-black-full-33 cursor-pointer items-center no-underline">
            <div class="uppercase mx-auto font-extrabold text-white tracking-wide leading-tight no-underline" v-html="settings.blockTwoText"></div>
          </a>
        </div>
      </div>
      <div class="flex">
        <div class="flex-1 relative pb-1/2 image-hover-zoom overflow-hidden mr-1">
          <img class="absolute h-full w-full object-cover" :src="options.block03.image ? options.block03.image : options.block03.imageDefault" :alt="options.block03.alt" />
          <a :href="settings.blockThreeUrl" class="flex flex-wrap content-center text-center absolute h-full w-full bg-black-full-33 cursor-pointer items-center no-underline">
            <div class="uppercase mx-auto font-extrabold text-white tracking-wide leading-tight no-underline" v-html="settings.blockThreeText"></div>
          </a>
        </div>
        <div class="flex-1 relative pb-1/2 image-hover-zoom overflow-hidden">
          <img class="absolute h-full w-full object-cover" :src="options.block04.image ? options.block04.image : options.block04.imageDefault" :alt="options.block04.alt" />
          <a :href="settings.blockFourUrl" class="flex flex-wrap content-center text-center absolute h-full w-full bg-black-full-33 cursor-pointer items-center no-underline">
            <div class="uppercase mx-auto font-extrabold text-white tracking-wide leading-tight no-underline" v-html="settings.blockFourText"></div>
          </a>
        </div>
      </div>
    </div>

    <div class="hidden md:flex">
      <div class="flex-1 relative pb-1/4 image-hover-zoom overflow-hidden mr-1">
        <img class="absolute h-full w-full object-cover" :src="options.block01.image ? options.block01.image : options.block01.imageDefault" :alt="options.block01.alt" />
        <a :href="settings.blockOneUrl" class="flex flex-wrap content-center text-center absolute h-full w-full bg-black-full-33 cursor-pointer items-center no-underline">
          <div class="uppercase mx-auto font-extrabold text-white tracking-wide leading-tight no-underline xl:tracking-wider xl:text-2xl" v-html="settings.blockOneText"></div>
        </a>
      </div>
      <div class="flex-1 relative pb-1/4 image-hover-zoom overflow-hidden mr-1">
        <img class="absolute h-full w-full object-cover" :src="options.block02.image ? options.block02.image : options.block02.imageDefault" :alt="options.block02.alt" />
        <a :href="settings.blockTwoUrl" class="flex flex-wrap content-center text-center absolute h-full w-full bg-black-full-33 cursor-pointer items-center no-underline">
          <div class="uppercase mx-auto font-extrabold text-white tracking-wide leading-tight no-underline xl:tracking-wider xl:text-2xl" v-html="settings.blockTwoText"></div>
        </a>
      </div>
      <div class="flex-1 relative pb-1/4 image-hover-zoom overflow-hidden mr-1">
        <img class="absolute h-full w-full object-cover" :src="options.block03.image ? options.block03.image : options.block03.imageDefault" :alt="options.block03.alt" />
        <a :href="settings.blockThreeUrl" class="flex flex-wrap content-center text-center absolute h-full w-full bg-black-full-33 cursor-pointer items-center no-underline">
          <div class="uppercase mx-auto font-extrabold text-white tracking-wide leading-tight no-underline xl:tracking-wider xl:text-2xl" v-html="settings.blockThreeText"></div>
        </a>
      </div>
      <div class="flex-1 relative pb-1/4 image-hover-zoom overflow-hidden">
        <img class="absolute h-full w-full object-cover" :src="options.block04.image ? options.block04.image : options.block04.imageDefault" :alt="options.block04.alt" />
        <a :href="settings.blockFourUrl" class="flex flex-wrap content-center text-center absolute h-full w-full bg-black-full-33 cursor-pointer items-center no-underline">
          <div class="uppercase mx-auto font-extrabold text-white tracking-wide leading-tight no-underline xl:tracking-wider xl:text-2xl" v-html="settings.blockFourText"></div>
        </a>
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
