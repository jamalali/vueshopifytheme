<template>
    <div class="max-w-4xl mx-auto p-10" :class="theme">

        <h3 class="text-center text-white uppercase font-bold mb-6 md:text-2xl"
          v-html="headingParsed">
        </h3>

        <div class="flex flex-wrap justify-center mb-5">

          <div v-for="(section, index) in sections" :key="index"
              :index="index"
              class="flex last:mb-0 mb-5 w-80 lg:mx-10">

              <div class="flex items-center pr-5 w-1/4">

                <svg v-if="section.icon == 'icon-calendar'" xmlns="http://www.w3.org/2000/svg" width="67" height="69" viewBox="0 0 67 69">
                  <g id="Group_6018" data-name="Group 6018" transform="translate(-454 -3786)">
                    <g id="Group_6011" data-name="Group 6011" transform="translate(445.5 2513.5)">
                      <rect id="Rectangle_4978" data-name="Rectangle 4978" width="65" height="67" rx="8" transform="translate(9.5 1273.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                      <path id="Path_36964" data-name="Path 36964" d="M5.094,0h46.26C55.3,0,54.76,3.134,54.76,7s.544,7-3.407,7H5.094c-3.951,0-3.564-3.134-3.564-7S1.143,0,5.094,0Z" transform="translate(14.466 1279.5)" fill="none" stroke="#fff" stroke-width="2"/>
                      <rect id="Rectangle_4980" data-name="Rectangle 4980" width="54" height="35" rx="4" transform="translate(15.5 1299.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2"/>
                    </g>
                    <line id="Line_1440" data-name="Line 1440" x1="52.45" transform="translate(461.5 3824.333)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                    <line id="Line_1441" data-name="Line 1441" x1="52.45" transform="translate(461.5 3836.333)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                    <line id="Line_1442" data-name="Line 1442" x1="33.333" transform="translate(482.5 3813.667) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                    <line id="Line_1443" data-name="Line 1443" x1="33.333" transform="translate(471.5 3813.667) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                    <line id="Line_1444" data-name="Line 1444" x1="33.333" transform="translate(505.5 3813.667) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                    <line id="Line_1445" data-name="Line 1445" x1="33.333" transform="translate(494.5 3813.667) rotate(90)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                  </g>
                </svg>

                <svg v-if="section.icon == 'icon-people-group'" class="max-w-full" xmlns="http://www.w3.org/2000/svg" width="78.741" height="83.499" viewBox="0 0 78.741 83.499">
                  <g id="Group_6693" data-name="Group 6693" transform="translate(477.541 160.737)">
                    <path id="Path_37229" data-name="Path 37229" d="M-379.386,31.209a8.274,8.274,0,0,0-8.274-8.274,8.274,8.274,0,0,0-8.273,8.274" transform="translate(-48.348 -109.947)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <circle id="Ellipse_972" data-name="Ellipse 972" cx="6.864" cy="6.864" r="6.864" transform="translate(-442.766 -101.353)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <path id="Path_37230" data-name="Path 37230" d="M-310.192-39.345a8.274,8.274,0,0,0-8.273-8.274,8.274,8.274,0,0,0-8.274,8.274" transform="translate(-90.108 -67.365)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <circle id="Ellipse_973" data-name="Ellipse 973" cx="6.864" cy="6.864" r="6.864" transform="translate(-415.333 -129.325)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <path id="Path_37231" data-name="Path 37231" d="M-459.494-37.345a8.274,8.274,0,0,0-8.274-8.274,8.274,8.274,0,0,0-8.273,8.274" transform="translate(0 -68.572)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <circle id="Ellipse_974" data-name="Ellipse 974" cx="6.864" cy="6.864" r="6.864" transform="translate(-474.526 -128.532)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <path id="Path_37232" data-name="Path 37232" d="M-384.386-114.791a8.274,8.274,0,0,0-8.274-8.273,8.274,8.274,0,0,0-8.273,8.273" transform="translate(-45.33 -21.831)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <circle id="Ellipse_975" data-name="Ellipse 975" cx="6.864" cy="6.864" r="6.864" transform="translate(-444.748 -159.237)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <path id="Path_37233" data-name="Path 37233" d="M-318.525-48.936" transform="translate(-95.066 -66.57)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <path id="Path_37234" data-name="Path 37234" d="M-339.937-119.611A22.392,22.392,0,0,1-329.86-110.6" transform="translate(-82.143 -23.916)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <path id="Path_37235" data-name="Path 37235" d="M-433.9,2.153a22.389,22.389,0,0,1-10.077-9.009" transform="translate(-19.349 -91.967)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <path id="Path_37236" data-name="Path 37236" d="M-325.314-14.64a22.388,22.388,0,0,1-9.009,10.077" transform="translate(-85.531 -87.269)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                    <path id="Path_37237" data-name="Path 37237" d="M-441.449-112.322a22.388,22.388,0,0,1,10.1-8.987" transform="translate(-20.877 -22.891)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                  </g>
                </svg>

                <svg v-if="section.icon == 'icon-key'" class="max-w-full" xmlns="http://www.w3.org/2000/svg" width="130.345" height="56.335" viewBox="0 0 130.345 56.335">
                  <g id="Group_6017" data-name="Group 6017" transform="translate(-31.708 -73.814)">
                    <path id="Path_36961" data-name="Path 36961" d="M161.928,101.982A28.045,28.045,0,0,0,106.5,95.934H37.882a6.049,6.049,0,1,0,0,12.1h7.372v9.347a6.049,6.049,0,1,0,12.1,0v-4.949h5.5v4.949a6.049,6.049,0,0,0,12.1,0V108.03H106.5a28.045,28.045,0,0,0,55.43-6.048Zm-28.043,24.743a24.751,24.751,0,0,1-24.4-20.617,1.65,1.65,0,0,0-1.627-1.377H73.3a1.649,1.649,0,0,0-1.649,1.649v11a2.75,2.75,0,1,1-5.5,0v-6.6A1.65,1.65,0,0,0,64.5,109.13H55.7a1.65,1.65,0,0,0-1.65,1.649v6.6a2.749,2.749,0,1,1-5.5,0v-11a1.649,1.649,0,0,0-1.649-1.649H37.882a2.75,2.75,0,0,1,0-5.5h69.978a1.651,1.651,0,0,0,1.627-1.377,24.745,24.745,0,1,1,24.4,28.869Z" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="0.25"/>
                    <path id="Path_36962" data-name="Path 36962" d="M171.978,112.469a5.545,5.545,0,0,0,.3-.671A19.247,19.247,0,0,0,154.6,84.938a19.245,19.245,0,1,0,13.037,33.4A22.95,22.95,0,0,0,171.978,112.469Zm-17.373,7.659a15.936,15.936,0,1,1,14.4-9.082c-.021.044-.039.089-.056.134a19,19,0,0,1-3.887,5.034A15.887,15.887,0,0,1,154.605,120.129Z" transform="translate(-20.72 -2.201)" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="0.25"/>
                  </g>
                </svg>

              </div>

              <div class="flex items-center text-white w-2/3">
                <p class="m-0">
                  {{ section.blurb }}
                </p>
              </div>

          </div>

        </div>

        <div class="text-center">
          <a :class="['text-plaa-' + theme]" class="p-4 uppercase bg-white inline-block tracking-wide hover:bg-white" :href="link">
            {{ linkText }}
          </a>
        </div>

    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    },
    sections: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      default: 'green'
    }
  },

  computed: {
    headingParsed () {
      return this.title.replace(/\\"/g, '"').replace(/\\'/g, "'");
    }
  }
};
</script>

<style lang="sass" scoped>
  .green
    @apply bg-plaa-green

    .btn
        @apply text-plaa-green

  .purple
    @apply bg-plaa-purple

    .btn
        @apply text-plaa-purple

  .red
    @apply bg-plaa-red

    .btn
      @apply text-plaa-red

  .blue
    @apply bg-plaa-blue

    .btn
      @apply text-plaa-blue
</style>
