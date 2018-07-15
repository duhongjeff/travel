<template>
    <div class="container-wrapper">
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
    
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    computed: {
        ...mapState(['city'])
    },
    data () {
        return {
            lastCity: '',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            if(res.data.ret && res.data) {
                let result = res.data.data
                this.swiperList = result.swiperList
                this.iconList = result.iconList
                this.recommendList = result.recommendList
                this.weekendList = result.weekendList
            }
        }
    },
    mounted () {
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated () {
        if (this.city !== this.lastCity) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>

