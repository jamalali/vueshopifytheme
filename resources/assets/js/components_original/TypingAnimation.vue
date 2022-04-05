<template>
  <div>
    {{ prefix }}
    {{ suffix }}<span ref="cursor" class="font-thin">{{ cursor }}</span>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  props: {
    prefix: String,
    cursor: { type: String, default: '|' },
    suffixes: { type: Array, required: true }
  },

  mounted () {
    const suffixState = { index: 0, position: 0 };
    const timeline = gsap.timeline({ repeat: -1 });

    this.suffixes.forEach((suffix, suffixIndex) => {
      timeline.to(suffixState, {
        duration: 0,
        index: suffixIndex,
        position: 0,
        onComplete: () => {
          this.suffix = '';
        }
      });

      suffix.split('').forEach((char, charIndex) => {
        timeline.to(suffixState, {
          duration: charIndex == 0 ? 1 : 0.05,
          index: suffixIndex,
          position: charIndex + 1,
          onComplete: () => {
            this.suffix = suffix.substring(0, suffixState.position);
          }
        });
      });

      [1, 2, 3].forEach(count => {
        timeline.to(this.$refs.cursor, {
          duration: 0.2,
          opacity: 0
        }, count == 1 ? '+=0' : '+=0.5').to(this.$refs.cursor, 0.2, {
          opacity: 1
        });
      });
    });
  },

  data () {
    return { suffix: '' };
  }
};
</script>
