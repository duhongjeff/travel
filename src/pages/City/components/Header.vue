<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <i class="iconfont header-back" >&#xe624;</i>
        </router-link>
        
    </div>
</template>
<script>
export default {
    name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin'
@import '~styles/varibles'
.header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    .header-back
        position absolute
        top 0
        left 0
        width .64rem
        font-size .3rem
        text-align center
        color #fff
</style>


