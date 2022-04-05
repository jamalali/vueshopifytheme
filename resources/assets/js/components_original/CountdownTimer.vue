<template>
    <div v-bind:class="[justifystart ? 'md:justify-start md:items-start' : 'justify-center items-center', 'flex', 'tabular-nums']">
        <div class="mx-6 text-center">
            <span class="font-extrabold text-5xl">{{ minutes }}</span>
            <span class="block text-2xl">|| 'CountdownTimer.minutes_title' ||</span>
        </div>

        <div class="mx-6 text-center">
            <span :class="[secondsclass, 'font-extrabold', 'text-5xl']">{{ seconds }}</span>
            <span class="block text-2xl">|| 'CountdownTimer.seconds_title' ||</span>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import { padStart } from 'lodash';

function format (number) {
  if (number > 0) return '00';

  return padStart((0 - number).toString(), 2, '0');
}

export default {
  props: ['mins', 'redirect', 'secondsclass', 'justifystart'],

  mounted () {
    setInterval(this.tick, 1000);
  },

  data () {
    const endTime = moment().add(this.mins, 'minutes');
    const minutes = moment().diff(endTime, 'minutes');
    const seconds = moment().diff(endTime, 'seconds') - (minutes * 60);

    return {
      endTime,
      minutes: format(minutes),
      seconds: format(seconds)
    };
  },

  computed: {
    countdownComplete () {
      return !this.endTime.isFuture;
    }
  },

  methods: {
    tick () {
      if (this.redirect && moment().diff(this.endTime, 'seconds') > 0) {
        window.location.href = this.redirect;
      }

      const minutes = moment().diff(this.endTime, 'minutes');
      const seconds = moment().diff(this.endTime, 'seconds') - (minutes * 60);

      this.minutes = format(minutes);
      this.seconds = format(seconds);
    }
  }
};
</script>
