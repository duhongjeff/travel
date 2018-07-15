<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>
<script>
import axios from 'axios'
import cityHeader from './components/Header'
import citySearch from './components/Search'
import cityList from './components/List'
import cityAlphabet from './components/Alphabet'
export default {
    name: 'City',
    components: {
        cityHeader,
        citySearch,
        cityList,
        cityAlphabet
    },
    data () {
        return {
            cities: {},
            hotCities: []
        }
    },
    methods: {
        getCityInfo () {
            axios.get('api/city.json')
                .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res) {
            if(res.data.ret && res.data.data) {
                let result = res.data.data
                this.cities = result.cities
                this.hotCities = result.hotCities
            }
        }
    },
    mounted () {
        this.getCityInfo ()
    }
}
</script>
<style lang="stylus" scoped>

</style>


