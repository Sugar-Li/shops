<template>
  <footer class="footer_guild border-1px">
    <!--每一个tab都是一个路由，可以进行路径导航和样式的转变
    avascript:是伪协议，点击时不做任何操作
    guild_item控制底部导航的基础样式，on动态控制当前页面的tab的样式-->

    <!--外卖-->
    <!--直接在标签内部调用方法传入实参path-->
    <div class="guide_item" @click="goto('/index')" :class="{on:isCurrent('/index')}">
      <!--item_icon图标-->
      <span class="item_icon">
          <i class="iconfont">&#xe607;</i>
        </span>
      <span>外卖</span>
    </div>

    <!--搜索-->
    <div class="guide_item"  @click="goto('/search')" :class="{on:isCurrent('/search')}">
      <!--item_icon图标-->
      <span class="item_icon">
          <i class="iconfont">&#xe720;</i>
        </span>
      <span>搜索</span>
    </div>

    <!--订单-->
    <div class="guide_item"  @click="goto('/order')" :class="{on:isCurrent('/order')}">
      <!--item_icon图标-->
      <span class="item_icon">
          <i class="iconfont">&#xe669;</i>
        </span>
      <span>订单</span>
    </div>

    <!--我的-->
    <div class="guide_item"  @click="goto('/mine')" :class="{on:isCurrent('/mine')}">
      <!--item_icon图标-->
      <span class="item_icon">
          <i class="iconfont">&#xe718;</i>
        </span>
      <span>我的</span>
    </div>
  </footer>

</template>

<script>
  export default {
    name: "footer",
    methods:{
      goto(path){
        return this.$router.replace(path)
      },
      isCurrent(path){
        console.log(this.$route)
        return this.$route.path===path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guild
    bottom-border-1px(red)
    position: fixed;
    left: 0
    right: 0
    bottom: 0
    z-index:100
    ///*background-color: #fff;*/
    width: 100%
    height: 50px
    display: flex
    .guide_item
    
      text-align center
      display: flex
      flex:1
      flex-direction column
      align-items center
      margin:5px
      color: #999999
      &.on
        color: #02a774
      span
        font-size:12px
        margin-top: 2px
        margin-bottom: 2px
        .iconfont
          font-size:22px



</style>
