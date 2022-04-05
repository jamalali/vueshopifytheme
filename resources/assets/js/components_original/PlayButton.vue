<template>
  <button
    class="bg-no-repeat bg-contain"
    :class = "{ 'PulseButton' : !options.buttonText, 'w-full text-center' : options.buttonText }"
    :style="{
      'background-image': 'url(' + (options && options.playButtonImage && options.playButtonImage != '' ? options.playButtonImage : '') + ')'
    }">
    <svg
      v-if="!options.playButtonImage || (options.playButtonImage && options.playButtonImage == '')"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.191 26.492">
      <path
        stroke="#fff"
        fill="#fff"
        d="M32.277,8.863a.8.8,0,1,0-.845,1.355,2.953,2.953,0,0,1,0,5.011L18.338,23.393a2.953,2.953,0,0,1-4.515-2.506V4.558a2.953,2.953,0,0,1,4.515-2.506L25.96,6.806a.8.8,0,1,0,.845-1.355L19.183.7a4.549,4.549,0,0,0-6.957,3.86V20.887a4.493,4.493,0,0,0,2.342,3.978,4.493,4.493,0,0,0,4.615-.117l13.094-8.164a4.549,4.549,0,0,0,0-7.721Z"
        transform="translate(-11.726 0.546)"
      />
    </svg><span v-if="options.buttonText" class="uppercase text-white font-bold tracking-widerer text-xs md:text-sm ml-1/5 leading-title-close lg:-mt-1 inline-block align-top md:w-52">{{ options.buttonText }}</span>
  </button>
</template>

<script>
import { TimelineMax } from 'gsap';

export default {
  props: {
    color: {
      type: String,
      default: 'green'
    },

    hoverColor: {
      type: String,
      default: 'green-dark'
    },

    options: {
      type: Object
    }
  }
};
</script>

<style scoped>
.PulseButton {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-radius: 50%;
  background: #b5d310;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(181, 211, 16,.5);
  animation: pulse 1.5s infinite;
  transition: background-color 0.3s ease-in;
}

.PulseButton:hover {
  animation: none;
}

.PulseButton:focus {
  outline: 0;
}

.PulseButton svg {
  width: 50%;
  margin-left: 3px
}

@keyframes pulse {
  from { transform: scale(0.9) }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(181, 211, 16,0);
  }
  to {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(181, 211, 16,0);
  }
}
</style>
