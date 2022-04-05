<template>
  <div class="relative">
    <div class="absolute">
      <transition @enter="flipIn" @leave="flipOut" :css="false">
        <container v-if="view == 'top'">
          <img class="block" :src="backgroundImage">
          <card-body>
            <div>
              Select what you want to
            </div>

            <div class="font-extrabold text-7xl">ACHIEVE</div>

            <ul class="list-none p-0 mt-4">
              <li class="border-t border-b b-white p-4" @click="view = 'gender'">
                Select gender
                <span class="text-grey-dark" v-if="gender">({{ gender }})</span>
              </li>

              <li class="border-b b-white p-4" @click="view = 'objective'">
                What do you want to improve
                <span class="text-grey-dark" v-if="objective">({{ objective }})</span>
              </li>
            </ul>

            <a v-if="hasRecommendation()" :href="recommendation()">Link</a>
          </card-body>
        </container>
      </transition>

      <transition-group @enter="flipInScale" @leave="flipOutScale" :css="false">
        <container v-if="view == 'gender'" key="gender">
          <img class="block" :src="backgroundImage">
          <card-body>
            <span @click="view = 'top'">Close</span>
            <div>
              Select Gender
            </div>

            <ul class="list-none p-0 mt-4">
              <li class="border-t border-b b-white p-4" @click="selectGender('Male')">Male</li>
              <li class="border-b b-white p-4" @click="selectGender('Female')">Female</li>
            </ul>
          </card-body>
        </container>

        <container v-if="view == 'objective'" key="objective">
          <img class="block" :src="backgroundImage">
          <card-body>
            <span @click="view = 'top'">Close</span>
            <div>
              What do you want to improve
            </div>

            <ul class="list-none p-0 mt-4">
              <li class="border-t border-b b-white p-4" @click="selectObjective('Fitness & Performance')">Fitness & Performance</li>
              <li class="border-b b-white p-4" @click="selectObjective('Health & Lifestyle')">Health & Lifestyle</li>
            </ul>
          </card-body>
        </container>
      </transition-group>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

const collections = {
  Male: {
    'Fitness & Performance': '#',
    'Health & Lifestyle': '#'
  },
  Female: {
    'Fitness & Performance': '#',
    'Health & Lifestyle': '#'
  }
};

const flipDuration = 2;

export default {
  props: ['backgroundImage'],

  data () {
    return {
      view: 'top',
      gender: null,
      objective: null
    };
  },

  components: {
    'card-body': {
      template: '<div class="absolute inset-x-0 inset-y-0 bg-green-90 text-white"><slot></slot></div>'
    },

    container: {
      template: '<div class="absolute top-0 left-0 w-128"><slot></slot></div>'
    }
  },

  methods: {
    selectGender (gender) {
      this.gender = gender;
      this.view = 'top';
    },

    selectObjective (objective) {
      this.objective = objective;
      this.view = 'top';
    },

    hasRecommendation () {
      return this.gender && this.objective;
    },

    recommendation () {
      return collections[this.gender][this.objective];
    },

    flipIn (el, onComplete) {
      gsap.fromTo(el, {
        duration: flipDuration,
        backfaceVisibility: 'hidden',
        rotationY: 180,
        z: -20
      }, {
        rotationY: 0,
        ease: Bounce.easeOut,
        z: 0,
        onComplete
      });
    },

    flipOut (el, onComplete) {
      gsap.fromTo(el, {
        duration: flipDuration,
        backfaceVisibility: 'hidden'
      }, {
        ease: Bounce.easeOut,
        rotationY: 180,
        z: -20,
        onComplete
      });
    },

    flipInScale (el, onComplete) {
      gsap.fromTo(el, {
        duration: flipDuration,
        backfaceVisibility: 'hidden',
        rotationY: 180,
        scale: 1,
        z: -20
      }, {
        rotationY: 0,
        ease: Bounce.easeOut,
        scale: 1.2,
        z: 0,
        onComplete
      });
    },

    flipOutScale (el, onComplete) {
      gsap.fromTo(el, {
        duration: flipDuration,
        backfaceVisibility: 'hidden',
        scale: 1.2
      }, {
        ease: Bounce.easeOut,
        rotationY: 180,
        z: -20,
        scale: 1,
        onComplete
      });
    }
  }
};
</script>
