<template>
<div class="wrapper">
    <div class="banner" @click="handleBannerClick">
        <img :src="bannerImg"
        class="banner-img">
        <div class="banner-info">
            <div class="banner-title">{{this.sightName}}</div>
            <div class="banner-number"><i class="iconfont banner-icon">&#xe692;</i>
                {{this.gallaryImgs.length}}
            </div>
        </div>
    </div>
    <fade-animation>
        <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleClose"></common-gallary>
    </fade-animation>
</div>
</template>
<script>
import CommonGallary from 'common/Gallary/gallary'
import FadeAnimation from 'common/Fade/fade'
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    },
    data () {
        return {
            showGallary: false
        }
    },
    components: {
        CommonGallary,
        FadeAnimation
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


