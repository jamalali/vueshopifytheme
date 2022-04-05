<template>
  <li class="pt-8 w-1/4 px-2">
    <a class="font-extrabold hover:opacity-65 inline-block mb-5 no-underline text-black xxl:text-xl tracking-wide transition-300 uppercase" :href="href" :target="target">
      {{ text }}
    </a>
    <ul v-if="links" class="list-none p-0">
      <li v-for="childlink in links" :key="childlink.key" class="mb-2">
        <a :href="childlink.url" class="font-semibold hover:text-black text-grey-77 transition-300">
          {{ childlink.title }}
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  computed: {
    target () {
      return this.newTab ? '_blank' : '_self';
    }
  },

  props: {
    text: String,
    links: Array,
    href: String,
    newTab: {
      type: Boolean,
      default: false
    }
  },

  created () {
    this.text = this.text.replace('\\', '');
  }
};
</script>
