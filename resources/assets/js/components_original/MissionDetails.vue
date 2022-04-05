<template>
  <div>
    <div class="bg-white flex flex-wrap lg:flex-nowrap lg:mx-8 justify-between mt-16 md:px-8 py-8 z-30 relative -mt-40 lg:max-w-5xl lg:mx-auto" v-if="!isMobile">
      <div class="flex-col px-8 py-4 flex items-center w-full md:w-1/2 lg:w-1/4">
        <mission-carousel-carbon-neutral />
      </div>

      <div class="flex-col px-8 py-4 flex items-center w-full md:w-1/2 lg:w-1/4">
        <mission-carousel-plant-based />
      </div>

      <div class="flex-col px-8 py-4 flex items-center w-full md:w-1/2 lg:w-1/4">
        <mission-carousel-recyclable />
      </div>

      <div class="flex-col px-8 py-4 flex items-center w-full md:w-1/2 lg:w-1/4">
        <mission-carousel-we-donate />
      </div>
    </div>

    <mission-carousel v-else />
  </div>
</template>

<script>
import breakpoints from '../breakpoints';
import MissionCarousel from './MissionCarousel';
import MissionCarouselCarbonNeutral from './MissionCarouselCarbonNeutral';
import MissionCarouselPlantBased from './MissionCarouselPlantBased';
import MissionCarouselRecyclable from './MissionCarouselRecyclable';
import MissionCarouselWeDonate from './MissionCarouselWeDonate';

export default {
  components: {
    MissionCarousel,
    MissionCarouselCarbonNeutral,
    MissionCarouselPlantBased,
    MissionCarouselRecyclable,
    MissionCarouselWeDonate
  },

  data () {
    return {
      isMobile: window.innerWidth < breakpoints.md
    };
  }
};
</script>
