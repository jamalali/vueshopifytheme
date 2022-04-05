<template>
  <div class="bg-white mt-16 py-8 z-30 relative text-center -mt-16">
    <slick ref="mission-carousel" :options="slickOptions">
      <div class="px-8">
        <mission-carousel-carbon-neutral />
      </div>

      <div class="px-8">
        <mission-carousel-plant-based />
      </div>

      <div class="px-8">
        <mission-carousel-recyclable />
      </div>

      <div class="px-8">
        <mission-carousel-we-donate />
      </div>
    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import MissionCarouselCarbonNeutral from './MissionCarouselCarbonNeutral';
import MissionCarouselPlantBased from './MissionCarouselPlantBased';
import MissionCarouselRecyclable from './MissionCarouselRecyclable';
import MissionCarouselWeDonate from './MissionCarouselWeDonate';

export default {
  components: {
    Slick,
    MissionCarouselCarbonNeutral,
    MissionCarouselPlantBased,
    MissionCarouselRecyclable,
    MissionCarouselWeDonate
  },

  data () {
    return {
      slickOptions: {
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        dots: true
      }
    };
  },

  methods: {
    reInit () {
      this.$nextTick(() => {
        this.$refs['mission-carousel'].reSlick();
      });
    }
  }
};
</script>
