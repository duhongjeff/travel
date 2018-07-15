<template>
<div class="wrapper">
    <div class="banner" @click="handleBannerClick">
        <img src="http://img1.qunarzz.com/sight/p0/1610/83/83a873f755d64992a3.water.jpg_600x330_9d4add39.jpg"
        class="banner-img">
        <div class="banner-info">
            <div class="banner-title">南昌万达主题乐园</div>
            <div class="banner-number"><i class="iconfont banner-icon">&#xe692;</i>
                3
            </div>
        </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleClose"></common-gallary>
</div>
</template>
<script>
import CommonGallary from 'common/Gallary/gallary'
export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallary: false,
            imgs:[
                'http://img1.qunarzz.com/sight/p0/1610/83/83a873f755d64992a3.water.jpg_r_800x800_5315aa68.jpg',
                'http://img1.qunarzz.com/sight/p0/1610/c4/c4546850d9938a10a3.water.jpg_r_800x800_28760412.jpg',
                'http://img1.qunarzz.com/sight/p0/1610/93/93d878020d079940a3.water.jpg_r_800x800_ba9a9e1b.jpg'
            ]
        }
    },
    components: {
        CommonGallary
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleClose () {
            this.showGallary = false
        }
    }
}
</script>
<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
        width  100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #fff
        background-image linear-gradient(top, rgba(0, 0, 0, 0),rgba(0, 0, 0, .8))
        .banner-title
            flex 1
            font-size .32rem
            padding 0 .2rem
        .banner-number
            height .32rem
            line-height .32rem
            margin-top .14rem
            padding 0 .4rem
            border-radius .2rem
            background rgba(0,0,0,.8)
            font-size .24rem
            .banner-icon
                font-size .24rem

</style>


