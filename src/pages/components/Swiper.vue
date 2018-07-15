<template>
<div class="wrapper">
    <swiper :options="swiperOption">
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
    data () {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop: true
            },
            swiperList: [
                {
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/b6/38ea2abdaafa0f02.jpg_750x200_f47f3b0a.jpg'
                },
                {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
                },
                {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/a1/41a802abfc4f0202.jpg_750x200_9f0cf69c.jpg'
                }
            ]
        }
    },
    name: 'HomeSwiper'
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


