<template>
  <span
    class="planted-trees-counter-integer"
    v-text="count"
  />
</template>

<script>
export default {
  data () {
    return {
      loaded: false,
      count: 0
    };
  },

  mounted () {
    this.getCount();
  },

  methods: {
    async getCount () {
      const response = await axios.get('https://trees.vivolife.com/count');
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
