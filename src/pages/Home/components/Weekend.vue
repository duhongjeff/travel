<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
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
    props: {
        weekendList: {
            type: Array
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin'
.title
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


