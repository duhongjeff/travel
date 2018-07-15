<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item in list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" :alt="item.title">
                </div>
                
                <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                </div>
            </li>
        </ul>
    </div>
    
</template>
<script>
export default {
    name: 'HomeWeekend',
    data () {
        return {
            list:[
                {
                    id:'0001',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/74/a665dfecf12ae.jpg_r_640x214_5d22909a.jpg',
                    title: '南昌必游TOP10',
                    desc: '看山看水，看看历史对南昌的浸润'
                },
                {
                    id:'0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1606/7d/451ad0850c83cb.jpg_r_640x214_31d053e9.jpg',
                    title: '经典漂流地',
                    desc: '这个夏天周边湿身游，现在就GO'
                },
                {
                    id:'0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/source/1505/bd/688c12889af7ad.jpg_r_640x214_cc490c32.jpg',
                    title: '带着宝贝玩乐',
                    desc: '全家出游，可以说是再好不过的美事了'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin'
.title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
.item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 33.9%
    .item-img
        width 100%
.item-info
    padding: .1rem
    .item-title
        line-height: .54rem
        font-size: .32rem
    .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
    
</style>


