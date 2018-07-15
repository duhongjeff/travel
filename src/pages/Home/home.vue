<template>
    <div class="container-wrapper">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
    
</template>
<script>
import HomeHeader from '@/pages/components/Header'
import HomeSwiper from '@/pages/components/Swiper'
import HomeIcons from '@/pages/components/Icons'
import HomeRecommend from '@/pages/components/Recommend'
import HomeWeekend from '@/pages/components/Weekend'
export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    }
}
</script>
<style lang="stylus" scoped>

</style>

