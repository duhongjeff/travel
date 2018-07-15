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
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1706/6d/6d439eaa3424b483a3.img.png_200x200_7fdbc990.png',
                    title: '魅力赣江水上乐园',
                    desc: '魅力赣江天然浴场 江西唯一的人造冲浪浴场'
                },
                {
                    id:'0002',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1706/6d/6d439eaa3424b483a3.img.png_200x200_7fdbc990.png',
                    title: '魅力赣江水上乐园',
                    desc: '魅力赣江天然浴场 江西唯一的人造冲浪浴场'
                },
                {
                    id:'0003',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1706/6d/6d439eaa3424b483a3.img.png_200x200_7fdbc990.png',
                    title: '魅力赣江水上乐园',
                    desc: '魅力赣江天然浴场 江西唯一的人造冲浪浴场'
                },
                {
                    id:'0004',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1706/6d/6d439eaa3424b483a3.img.png_200x200_7fdbc990.png',
                    title: '魅力赣江水上乐园',
                    desc: '魅力赣江天然浴场 江西唯一的人造冲浪浴场'
                },
                {
                    id:'0005',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1706/6d/6d439eaa3424b483a3.img.png_200x200_7fdbc990.png',
                    title: '魅力赣江水上乐园',
                    desc: '魅力赣江天然浴场 江西唯一的人造冲浪浴场'
                },
                {
                    id:'0006',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1706/6d/6d439eaa3424b483a3.img.png_200x200_7fdbc990.png',
                    title: '魅力赣江水上乐园',
                    desc: '魅力赣江天然浴场 江西唯一的人造冲浪浴场'
                },
                {
                    id:'0007',
                    imgUrl: 'http://img1.qunarzz.com/sight/p0/1706/6d/6d439eaa3424b483a3.img.png_200x200_7fdbc990.png',
                    title: '魅力赣江水上乐园',
                    desc: '魅力赣江天然浴场 江西唯一的人造冲浪浴场'
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


