<template>
    <ul class="alphabet">
        <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
    </ul>
</template>
<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    }
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
        height .34rem
        color $bgColor
</style>


