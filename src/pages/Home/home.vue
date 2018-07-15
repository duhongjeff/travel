<template>
    <div class="container-wrapper">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
    
</template>
<script>
import HomeHeader from '@/pages/components/Header'
import HomeSwiper from '@/pages/components/Swiper'
import HomeIcons from '@/pages/components/Icons'
export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>
<style lang="stylus" scoped>

</style>

