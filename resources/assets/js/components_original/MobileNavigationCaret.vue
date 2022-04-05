<template>
  <svg
    class="float-right w-2"
    :style="{ 'transform': `rotate(${rotation}deg)` }"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-13719.85 11297.851 8.4 14.7"
  >
    <path
      :fill="fill"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="2px"
      d="M2,2,8.4,8.4,14.7,2"
      transform="translate(-13720.85 11313.551) rotate(-90)"
    />
  </svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: '#000'
    },

    rotation: {
      type: Number,
      default: 0
    }
  }
};
</script>
