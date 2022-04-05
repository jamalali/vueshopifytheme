<template>
<slick ref="slick" :options="slickOptions">
    <img v-bind:src="imgsrc" alt="Sustain Ingredients Spread" />
    <img v-bind:src="imgsrc" alt="Sustain Ingredients Spread" />
    <img v-bind:src="imgsrc" alt="Sustain Ingredients Spread" />
</slick>
</template>
<script>
    import Slick from 'vue-slick';
    export default {
        props: {
            imgsrc: {
                type: String
            }
        },
        components: { Slick },
        data() {
                return {
                        slickOptions: {
                            speed: 24000,
                            autoplay: true,
                            autoplaySpeed: 0,
                            cssEase: 'linear',
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false
                        }
                }
        },
        methods: {
                next() {
                        this.$refs.slick.next()
                },
                prev() {
                        this.$refs.slick.prev()
                },
                reInit() {
                        // Helpful if you have to deal with v-for to update dynamic lists
                        this.$refs.slick.reSlick()
                }
        }
    }
</script>