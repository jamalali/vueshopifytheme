<template>
  <div class="TextLeftVideoRight">
    <div class="md:my-8 lg:px-8 lg:mx-0 xl:my-16">
      <div class="flex flex-col md:flex-row items-center justify-center">
        <div class="mt-8 md:mt-0 md:w-2/5">
          <div class="mb-12 md:mb-0 mx-8 px-4 text-center md:text-left xxl:mx-auto xxl:w-2/3">
            <h2 v-if="settings.title" class="font-extrabold uppercase text-3xl md:text-2xl lg:text-3xl xl:text-4xl my-4" v-html="settings.title"></h2>
            <p v-if="settings.text" class="font-medium leading-normal text-black-2 text-base lg:text-base xl:text-xl xxl:text-2xl xxl:pr-0" v-html="settings.text"></p>
          </div>
        </div>

        <div class="relative md:w-3/5 max-w-lg">
          <img class="block w-full md:no-filter"
            :src="options.image != '' ? options.image : options.imageDefault"
            :alt="options.alt" />

          <div class="absolute inset-x-0 inset-y-0 pl-8 pt-16 md:pl-16 md:pt-16 bg-black-full-33">
            <div class="video-button">
              <video-modal
                :options="{
                  playButtonImage: options.playButtonImage ? options.playButtonImage : ''
                }">
                <responsive-video-embed :video-id="settings.videoID != '' ? settings.videoID : 'oOg2FsUFYy8'" slot="video">
                </responsive-video-embed>
              </video-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true
    	},
    options: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
  .video-button {
    position: absolute;
    justify-content: center;
    top: calc(50% - 37px);
    left: calc(50% - 51px);
  }

  >>> .PulseButton {
    background-size: contain;
    background-repeat: no-repeat;
    width: 6.428em;
    height: 4.5em;
    border-radius: 0;
    -webkit-animation: none;
    animation: none;
    background-color: initial;
    transition: none;
  }
</style>
