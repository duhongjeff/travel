<template>
    <div class="header">
        <div class="header-left">
            <i class="iconfont back-icon">&#xe624;</i>
        </div>
        <div class="header-input">
            <i class="iconfont search-icon">&#xe632;</i>输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}} <i class="iconfont arrow-icon">&#xe64a;</i>
            </div>
        </router-link>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city']),
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles'
.header
    display flex
    line-height $headerHeight
    background #00bcd4
    color #fff
    .header-left
        width 0.64rem
        float left
        .back-icon
            display inline-block
            width 100%
            text-align center
            font-size .3rem
    .header-input
        flex 1
        background #ffffff
        border-radius .1rem
        margin-top .12rem
        margin-left .2rem
        padding-left .2rem
        height 0.64rem
        line-height 0.64rem
        color #ccc
    .header-right
        min-width 1.04rem
        padding 0 .1rem
        float right
        text-align center
        color #fff
        .arrow-icon
            font-size .24rem
</style>


