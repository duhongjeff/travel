<template>
    <div class="search">
        <input class="search-input" type="search" placeholder="输入城市名或拼音">
    </div>
</template>
<script>
export default {
    name: 'CitySearch',
    props: {
        city: String
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles'
.search
    height .72rem
    background $bgColor
    padding 0 .1rem
    .search-input
        box-sizing border-box
        padding 0 .1rem
        width 100%
        height .62rem
        line-height .62rem
        text-align center
        border-radius .06rem
        color #ccc
</style>


