<template>
    <div class="container-wrapper">
        <home-header :city="city"></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
    
</template>
<script>
import HomeHeader from '@/pages/components/Header'
import HomeSwiper from '@/pages/components/Swiper'
import HomeIcons from '@/pages/components/Icons'
import HomeRecommend from '@/pages/components/Recommend'
import HomeWeekend from '@/pages/components/Weekend'
import axios from 'axios'
export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    mounted () {
        this.getHomeInfo()
    },
    data () {
        return {
            city:'',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json').then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            if(res.data.ret && res.data) {
                let result = res.data.data
                this.city = result.city
                this.swiperList = result.swiperList
                this.iconList = result.iconList
                this.recommendList = result.recommendList
                this.weekendList = result.weekendList
            }
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>

