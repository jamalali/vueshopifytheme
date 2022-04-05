<template>
  <div class="relative w-full pt-9/16">
    <iframe
      class="absolute h-full top-0 left-0 w-full"
      :src="src"
      frameborder="0"
      allow="autoplay; encrypted-media"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  /**
     * The default video ID is just a placeholder and should be removed after
     * the real videos are added.
     */
  props: {
    videoId: {
      type: String,
      default: 'rqT-Xgjji_w'
    },
    videoHost: {
      type: String,
      default: 'youtube'
    }
  },

  computed: {
    src () {
      const videoHosts = {
        youtube: `https://www.youtube.com/embed/${this.videoId}?autoplay=0&controls=1&showinfo=0&modestbranding=1&rel=0`,
        vimeo: `https://player.vimeo.com/video/${this.videoId}`
      };
      return videoHosts[this.videoHost];
    }
  }
};
</script>
