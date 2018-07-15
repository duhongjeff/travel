<template>
<div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="轮播图">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>
</template>
<script>
export default {
    name: 'HomeSwiper',
    props: {
        swiperList: {
            type: Array
        }
    },
    computed: {
        showSwiper () {
            return this.swiperList.length
        }
    },
    data () {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop: true,
                autoplay: true
            }
        }
    },
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
.wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.67%
    .swiper-img
        width 100%
</style>


