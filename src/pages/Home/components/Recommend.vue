<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link tag="li" :to="'/detail/'+item.id"
            class="item border-bottom" v-for="item in recommendList" :key="item.id">
                <img class="item-img" 
                :src="item.imgUrl" :alt="item.title">
                <div class="item-info">
                    <div class="item-title">{{item.title}}</div>
                    <div class="item-desc">{{item.desc}}</div>
                    <button class="item-btn">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
    
</template>
<script>
export default {
    name: 'HomeRecommend',
    props: {
        recommendList: {
            type: Array
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


