<template>
  <div>
    <svg class="-mt-24 h-32 w-32 mx-auto block cursor-pointer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-13003.054 -1361.054 137.961 137.961" @click="show = true">
      <defs>
        <filter id="Ellipse_290" x="-13003.054" y="-1361.054" width="137.961" height="137.961" filterUnits="userSpaceOnUse">
          <feOffset dy="3" input="SourceAlpha"/>
          <feGaussianBlur stdDeviation="17.5" result="blur"/>
          <feFlood flood-opacity="0.361"/>
          <feComposite operator="in" in2="blur"/>
          <feComposite in="SourceGraphic"/>
        </filter>
      </defs>
      <g id="Group_3204" data-name="Group 3204" transform="translate(-13121 -1623)">
        <g class="cls-4" transform="matrix(1, 0, 0, 1, 13121, 1623)">
          <circle id="Ellipse_290-2" data-name="Ellipse 290" cx="16.481" cy="16.481" r="16.481" transform="translate(-12950.55 -1311.55)"/>
        </g>
        <g id="Group_3202" data-name="Group 3202" transform="translate(285.512 -34.723) rotate(45)">
          <g id="Rectangle_1936" data-name="Rectangle 1936" class="fill-white" transform="translate(190.52 320.723) rotate(45)">
            <rect class="stroke-none" width="2.336" height="12.441" rx="1.168"/>
            <rect class="fill-none" x="0.5" y="0.5" width="1.336" height="11.441" rx="0.668"/>
          </g>
          <g id="Rectangle_1937" data-name="Rectangle 1937" class="fill-white" transform="translate(192.171 329.519) rotate(135)">
            <rect class="stroke-none" width="2.336" height="12.441" rx="1.168"/>
            <rect class="fill-none" x="0.5" y="0.5" width="1.336" height="11.441" rx="0.668"/>
          </g>
        </g>
      </g>
    </svg>
    <portal to="team-modal">
      <div class="modal-background flex items-center" v-if="show" @click="show = false">
        <svg class="absolute cursor-pointer mt-4 mr-4 right-0 top-0 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="-1405.337 11749.662 17.678 17.678">
          <g
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="4px"
            transform="translate(-1697.019 10366.914) rotate(45)"
          >
            <line y2="17" transform="translate(1196.5 763)"/>
            <line x1="17" transform="translate(1188 771.5)"/>
          </g>
        </svg>

        <div class="bg-white flex p-4 md:p-16 items-center text-lg mx-auto w-4/5 max-w-md">
          <slot></slot>
        </div>
      </div>
    </portal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    };
  }
};
</script>
