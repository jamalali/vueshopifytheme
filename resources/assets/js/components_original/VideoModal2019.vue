<template>
  <div>
    <play-button-youtube
      :class="playButtonClass"
      @click.native="showModal"
    />

    <portal to="video-modal">
      <div
        v-if="modalVisible"
        class="modal-background"
        @click="hideModal"
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
              transform="translate(1196.5 763)"/>
            <line
              x1="17"
              transform="translate(1188 771.5)"/>
          </g>
        </svg>

        <div class="flex h-full items-center mx-auto w-4/5">
          <span
            class="w-full"
            @click.stop
          >
            <slot name="video" />
          </span>
        </div>
      </div>
    </portal>
  </div>
</template>

<script>
export default {
  props: {
    buttonClass: {
      type: String,
      default: 'absolute right-0 top-0 w-32 md:left-0 md:-ml-32 lg:mt-8'
    },

    buttonColor: {
      type: String,
      default: 'green'
    },

    playButtonClass: {
      type: String,
      default: 'mx-auto w-11'
    }
  },

  data () {
    return { modalVisible: false };
  },

  watch: {
    modalVisible (newValue) {
      document.body.classList.toggle('body--no-scroll', newValue);
    }
  },

  methods: {
    showModal () {
      this.modalVisible = true;
      document.body.classList.add('body--no-scroll');
    },

    hideModal () {
      this.modalVisible = false;
      document.body.classList.remove('body--no-scroll');
    }
  }
};
</script>
