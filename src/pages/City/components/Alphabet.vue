p<template>
    <ul class="alphabet">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>
</template>
<script>
export default {
    name: 'CityAlphabet'
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixin'
@import '~styles/varibles'
.alphabet
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    display flex
    flex-direction column
    justify-content center
    align-items center
    .item
        height .44rem
        color $bgColor
</style>


