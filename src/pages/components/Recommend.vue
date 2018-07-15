<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in list" :key="item.id">
                <img class="item-img" 
                :src="item.imgUrl" :alt="item.title">
                <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                    <button class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
    
</template>
<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            list:[
                {
                    id:'0001',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1610/83/83a873f755d64992a3.water.jpg_200x200_f7acbacd.jpg',
                    title: '南昌万达主题乐园',
                    desc: '万达斥巨资邀请著名主题乐园设计公司福瑞克(Forrec)担纲设计、倾力打造，首度实现世界大型主题乐园元素与中国传统文化的融合，多项设备全球专利、万达专属'
                },
                {
                    id:'0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1706/6d/6d439eaa3424b483a3.img.png_200x200_7fdbc990.png',
                    title: '魅力赣江水上乐园',
                    desc: '魅力赣江天然浴场 江西唯一的人造冲浪浴场'
                },
                {
                    id:'0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1611/13/13b01816e08573e6a3.water.jpg_200x200_3bdbfa41.jpg',
                    title: '滕王阁游轮',
                    desc: '听着邮轮上讲解员的娓娓道来，伴着优雅的古琴乐声，八一大桥、滕王阁、秋水广场、摩天轮尽收眼底，绚丽的光影投在江面上，构成一幅流动的画卷'
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
.item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
        width: 1.7rem
        height: 1.7rem
        padding: .1rem
    .item-info
        flex: 1
        padding: .1rem
        min-width: 0
        .item-title
            line-height: .54rem
            font-size: .32rem
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
        .item-btn
            line-height: .44rem
            margin-top: .16rem
            background: #ff9300
            padding: 0 .2rem
            border-radius: .06rem
            color: #fff
    
</style>


