<template>
    <aside class="flex my-4" :class="{ invisible: ! loaded }">
        <div
            class="flex flex-col justify-center ml-auto md:w-2/3"
            :class="{ 'lg:max-w-sm': mode != 'banner' }"
        >
            <h2
                class="font-extrabold text-rainforest-green relative text-xl whitespace-nowrap z-10"
                :class="mode == 'banner' ? 'md:text-2xl' : 'md:text-3xl'"
            >
                || 'PlantedTreesCounter.title' ||
            </h2>

            <p
                class="leading-normal my-2 text-xs "
                :class="mode == 'banner' ? 'lg:text-lg' : 'lg:text-sm'"
            >
                || 'PlantedTreesCounter.description' ||
            </p>
            <h2 class="text-xl md:text-2xl font-bold uppercase"><span
                    class="block pr-2 text-2xl text-green md:inline-block md:text-3xl"
                    :class="mode == 'banner' ? 'md:text-4xl' : 'md:text-2xl'"
                    v-text="count"
                /> || 'PlantedTreesCounter.count_suffix' ||</h2>
        </div>

        <div class="hidden md:flex items-end w-1/3" v-if="image">
            <img class="block ml-auto -mb-4" :src="image" alt="|| 'PlantedTreesCounter.image_alt' ||">
        </div>
    </aside>
</template>

<script>
export default {
  props: ['image', 'mode'],

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
      this.loaded = true;
      try {
        this.count = response.data.count;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>
    @media screen and (min-width: 992px) {
       /* h2 span {
            transform: translateY(2px);
        }*/
    }

</style>
