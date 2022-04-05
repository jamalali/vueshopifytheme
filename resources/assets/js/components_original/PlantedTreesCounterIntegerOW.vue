<template>
  <span
    class="planted-trees-counter-integer-ow"
    v-text="count"
  />
</template>

<script>
import TweenMax from 'gsap';

export default {
  data () {
    return {
      loaded: false,
      count: 0
    };
  },

  mounted () {
    this.getCount();
    setInterval(this.getCount, 30000);
  },

  methods: {
    async getCount () {
      this.loaded = false
      const response = await axios.get('https://trees.vivolife.com/plastic');
      try {
        this.count = response.data.count;
        this.loaded = true;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
