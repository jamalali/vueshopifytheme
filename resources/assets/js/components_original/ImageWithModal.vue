<template>
  <div>
    <a href="#" @click.prevent="modalOpen = true">
      <slot name="image" />
    </a>

    <portal to="product-image-modal">
      <div
        v-if="modalOpen"
        class="modal-background"
        @click="modalOpen = false"
      >
        <svg
          class="absolute cursor-pointer mt-4 mr-4 right-0 top-0 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-1405.337 11749.662 17.678 17.678"
        >
          <g
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="4px"
            transform="translate(-1697.019 10366.914) rotate(45)"
          >
            <line
              y2="17"
              transform="translate(1196.5 763)"
            />
            <line
              x1="17"
              transform="translate(1188 771.5)"
            />
          </g>
        </svg>

        <div class="flex h-full items-center justify-center mx-auto w-4/5">
          <span @click="$event.stopPropagation()">
            <slot name="full-size-image" />
          </span>
        </div>
      </div>
    </portal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modalOpen: false
    };
  },

  watch: {
    modalOpen (newValue) {
      document.body.classList.toggle('body--no-scroll', newValue);
    }
  }
};
</script>
