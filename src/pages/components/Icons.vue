<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <div class="icon-keywords">{{item.keywords}}</div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    data () {
        return {
            iconList:[
                {
                    id: '01',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    keywords: '景点门票'
                },
                {
                    id: '02',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
                    keywords: '本地玩乐'
                },
                {
                    id: '03',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
                    keywords: '夏日玩水'
                },
                {
                    id: '04',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    keywords: '一日游'
                },
                {
                    id: '05',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                    keywords: '游乐场'
                },
                {
                    id: '06',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                    keywords: '演出'
                },
                {
                    id: '07',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    keywords: '南昌必游'
                },
                {
                    id: '08',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ec/0e1e0238e24ba02.png',
                    keywords: '婺源'
                },
                {
                    id: '09',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                    keywords: '万达乐园'
                },
                {
                    id: '10',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
                    keywords: '全部玩乐'
                }
            ]
        }
    },
    computed: {
        pages () {
            const pages = []
            this.iconList.forEach( (item, index) => {
                const page = Math.floor(index / 8)
                console.log(page)
                if(!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
                console.log(pages)
            })
            return pages
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles'
@import '~styles/mixin'
.icons >>> .swiper-container
    height 0
    padding-bottom 50%
.icons
    margin-top: .1rem
    .icon
        position relative
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom 25%
        .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing: border-box
            padding: .1rem
            .icon-img-content
                display block
                margin 0 auto
                height 100%
        .icon-keywords
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: $darkTextColor
            ellipsis()
</style>


