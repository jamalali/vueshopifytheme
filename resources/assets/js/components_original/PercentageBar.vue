<template>
    <div class="mb-8">
        <div class="font-extrabold leading-normal text-sm tracking-normal md:text-xl">
            {{ label }}

            <span
                class="float-right"
                :class="[ barIsFull ? 'text-green-thrive-light' : 'text-green-thrive' ]"
                v-text="`${percentage}%`"
            />
        </div>
        <p v-if="description" class="text-sm mt-0">{{ description }}</p>
        <div
            ref="bar"
            class="bar mt-3"
            :class="[ barIsFull ? 'bg-green-thrive-light' : 'bg-green-thrive' ]"
        />
    </div>
</template>

<script>
import gsap from 'gsap';

export default {
  props: {
    label: String,
    description: String,
    percentage: Number
  },

  mounted () {
    gsap.fromTo(this.$refs.bar, { duration: 0.5, width: 0 }, {
      width: `${this.barWidth}%`,
      ease: 'Power0.easeInOut'
    });
  },

  computed: {
    barIsFull () {
      return this.percentage >= 100;
    },

    barWidth () {
      return this.barIsFull ? 100 : this.percentage;
    }
  }
};
</script>

<style scoped>
.bar {
    height: 4px;
}

@media screen and (min-width: 768px) {
    .bar {
        height: 7px;
    }
}
</style>
