<template>
    <div v-bind:class="[justifystart ? 'md:justify-start md:items-start' : 'justify-center items-center', 'flex', 'tabular-nums']">
        <div class="mx-6 text-center">
            <span class="font-extrabold text-3xl lg:text-5xl">{{ days }}</span>
            <span class="block text-xl lg:text-2xl">|| 'CountdownTimerDays.days_title' ||</span>
        </div>

        <div class="mx-6 text-center">
            <span class="font-extrabold text-3xl lg:text-5xl">{{ hours }}</span>
            <span class="block text-xl lg:text-2xl">|| 'CountdownTimerDays.hours_title' ||</span>
        </div>

        <div class="mx-6 text-center">
            <span class="font-extrabold text-3xl lg:text-5xl">{{ minutes }}</span>
            <span class="block text-xl lg:text-2xl">|| 'CountdownTimerDays.minutes_title' ||</span>
        </div>

        <div class="mx-6 text-center">
            <span :class="[secondsclass, 'font-extrabold', 'text-3xl', 'lg:text-5xl']">{{ seconds }}</span>
            <span class="block text-xl lg:text-2xl">|| 'CountdownTimerDays.seconds_title' ||</span>
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
  props: ['datetime', 'redirect', 'secondsclass', 'justifystart'],

  mounted () {
    setInterval(this.tick, 1000);
  },

  data () {
    const eventTime = moment(this.datetime, 'DD/MM/YYYY HH:mm:ss').unix();
    const currentTime = moment().unix();
    const diffTime = eventTime - currentTime;
    const duration = moment.duration(diffTime * 1000, 'milliseconds');

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      duration
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

      const eventTime = moment(this.datetime, 'DD/MM/YYYY HH:mm:ss').unix();
      const currentTime = moment().unix();
      const diffTime = eventTime - currentTime;
      let duration = moment.duration(diffTime * 1000, 'milliseconds');

      duration = moment.duration(duration.asMilliseconds() - 1000, 'milliseconds');
      let d = moment.duration(duration).days();
      let h = moment.duration(duration).hours();
      let m = moment.duration(duration).minutes();
      let s = moment.duration(duration).seconds();
      d = $.trim(d).length === 1 ? '0' + d : d;
      h = $.trim(h).length === 1 ? '0' + h : h;
      m = $.trim(m).length === 1 ? '0' + m : m;
      s = $.trim(s).length === 1 ? '0' + s : s;
      // console.log(`Days: ${d} Hours: ${h} Minutes: ${m} Seconds: ${s}`);

      this.days = d;
      this.hours = h;
      this.minutes = m;
      this.seconds = s;
    }
  }
};
</script>
