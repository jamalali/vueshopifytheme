<template>
    <li class="group min-w-16 px-2 py-8 relative" style="height: 80px; padding-bottom: 0;">
        <a
            class="border-white no-underline text-black hover:border-black transition-300 hover:opacity-65"
            :href="href"
            :target="target"
        >
            {{ text }}
            <div
                v-if="subText"
                class="font-normal mt-1 text-xs"
                v-text="subText"
            />
        </a>
        <div class="absolute opacity-0 bottom-0 left-0 transition-300 w-full group-hover:opacity-100">
            <div class="border-b-2 border-black mx-auto w-16"/>
        </div>
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
    subText: String,
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
