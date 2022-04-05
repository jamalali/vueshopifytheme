<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="3734 5846 32.594 32.594"
    :style="style"
  >
    <ellipse
      :fill="color == 'black' ? '#1d1d1d' : '#fff'"
      cx="16.297"
      cy="16.297"
      rx="16.297"
      ry="16.297"
      transform="translate(3734 5846)"
    />

    <path
      :stroke="color != 'black' ? '#1d1d1d' : '#fff'"
      style="fill:none;stroke-linecap: round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:3px;"
      d="M0,0,5.349,5.349,10.614,0"
      transform="translate(3748.5 5867.114) rotate(-90)"
    />
  </svg>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'right'
    },

    color: {
      type: String,
      default: 'black'
    }
  },

  computed: {
    style () {
      return this.direction == 'left' ? { transform: 'rotate(180deg)' } : {};
    }
  }
};
</script>
