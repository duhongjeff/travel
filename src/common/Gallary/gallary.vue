<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="Option">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Gallary',
    props: {
        imgs: {
            type: Array
        }
    },
    data () {
        return {
            Option: {
                pagination : '.swiper-pagination',
                paginationType : 'fraction',
                observeParents: true,
                observer: true
            }
        }
    },
    methods: {
        handleGallaryClick () {
            this.$emit('close')
        }
    }
}
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
    overflow inherit
.container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
        padding-bottom 100%
        width 100%
        height 0
        .gallary-img
            width 100%
        .swiper-pagination
            color #fff
            bottom -1rem
</style>


