<template>
    <div
      :class="[
        justifystart ? 'md:justify-start md:items-start' : 'justify-center items-center',
        navbar ? 'inline-flex' : 'flex text-2xl sm:text-3xl xl:text-4xl'
      ]"
      class="tabular-nums font-extrabold tracking-wider">
        <div class="">
            <span :class="[{ 'bg-black-1 pl-1' : !navbar }, 'text-white']">{{ days }}</span><span :class="{ 'text-ocean-week-blue' : !navbar }">|| 'CountdownTimerDaysOW.days_title' ||</span><span :class="{ 'green-friday-grey-3' : !navbar }">:</span>
        </div>

        <div class="">
            <span :class="[{ 'bg-black-1' : !navbar }, 'text-white pl-1']">{{ hours }}</span><span :class="{ 'text-ocean-week-blue' : !navbar }">|| 'CountdownTimerDaysOW.hours_title' ||</span><span :class="{ 'green-friday-grey-3' : !navbar }">:</span>
        </div>

        <div class="">
            <span :class="[{ 'bg-black-1' : !navbar }, 'text-white pl-1']">{{ minutes }}</span><span :class="{ 'text-ocean-week-blue' : !navbar }">|| 'CountdownTimerDaysOW.minutes_title' ||</span><span :class="[ navbar ? 'hidden sm:inline' : 'green-friday-grey-3' ]">:</span>
        </div>

        <div :class="{ 'hidden sm:block' : navbar }" class="">
            <span :class="[{ 'bg-black-1' : !navbar }, 'text-white pl-1']">{{ seconds }}</span><span :class="{ 'text-ocean-week-blue' : !navbar }">|| 'CountdownTimerDaysOW.seconds_title' ||</span>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import { padStart } from 'lodash';

function format(number) {
    if (number > 0) return '00';

    return padStart((0 - number).toString(), 2, '0');
}

export default {
    props: {
      datetime: {
        type: String,
        required: true
      },
      redirect: {
        type: String
      },
      justifystart: {
        type: Boolean,
        default: false
      },
      navbar: {
        type: Boolean,
        default: false
      }
    },

    mounted() {
        setInterval(this.tick, 1000);
    },

    data() {
        const eventTime = moment(this.datetime, 'DD/MM/YYYY HH:mm:ss').unix(),
        currentTime = moment().unix(),
        diffTime = eventTime - currentTime,
        duration = moment.duration(diffTime * 1000, 'milliseconds');


        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            duration
        };
    },

    computed: {
        countdownComplete() {
            return !this.endTime.isFuture;
        }
    },

    methods: {
        tick() {
            if (this.redirect && moment().diff(this.endTime, 'seconds') > 0) {
                window.location.href = this.redirect;
            }

            const eventTime = moment(this.datetime, 'DD/MM/YYYY HH:mm:ss').unix(),
            currentTime = moment().unix(),
            diffTime = eventTime - currentTime;
            let duration = moment.duration(diffTime * 1000, 'milliseconds');
            duration = moment.duration(duration.asMilliseconds() - 1000, 'milliseconds');
            let d = moment.duration(duration).days(),
                h = moment.duration(duration).hours(),
                m = moment.duration(duration).minutes(),
                s = moment.duration(duration).seconds();
            d = $.trim(d).length === 1 ? '0' + d : d;
            h = $.trim(h).length === 1 ? '0' + h : h;
            m = $.trim(m).length === 1 ? '0' + m : m;
            s = $.trim(s).length === 1 ? '0' + s : s;
            //console.log(`Days: ${d} Hours: ${h} Minutes: ${m} Seconds: ${s}`);

            this.days = d;
            this.hours = h;
            this.minutes = m;
            this.seconds = s;
        },
    }
};
</script>
