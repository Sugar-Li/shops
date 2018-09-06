<template>
   <nav class="index_nav border-1px">
     <!--nav总框，包含整个滑块内容-->
     <div class="swiper-container">
       <!--包含滑动的页面-->
       <div class="swiper-wrapper">
         <!--滑动的页面-->
         <div class="swiper-slide">
            <!--每一个nav单元-->
           <a href="javascript:" class="link_to_food">
             <!--图片内容-->
             <div class="food_container">
               <img src="../nav/1.jpg" alt="">
             </div>
             <span>甜品饮品</span>
           </a>
           <a href="javascript:" class="link_to_food">
             <!--图片内容-->
             <div class="food_container">
               <img src="../nav/1.jpg" alt="">
             </div>
             <span>甜品饮品</span>
           </a>
           <a href="javascript:" class="link_to_food">
             <!--图片内容-->
             <div class="food_container">
               <img src="../nav/1.jpg" alt="">
             </div>
             <span>甜品饮品</span>
           </a>
           <a href="javascript:" class="link_to_food">
             <!--图片内容-->
             <div class="food_container">
               <img src="../nav/1.jpg" alt="">
             </div>
             <span>甜品饮品</span>
           </a>
           <a href="javascript:" class="link_to_food">
             <!--图片内容-->
             <div class="food_container">
               <img src="../nav/1.jpg" alt="">
             </div>
             <span>甜品饮品</span>
           </a>
           <a href="javascript:" class="link_to_food">
             <!--图片内容-->
             <div class="food_container">
               <img src="../nav/1.jpg" alt="">
             </div>
             <span>甜品饮品</span>
           </a>
           <a href="javascript:" class="link_to_food">
             <!--图片内容-->
             <div class="food_container">
               <img src="../nav/1.jpg" alt="">
             </div>
             <span>甜品饮品</span>
           </a>
           <a href="javascript:" class="link_to_food">
             <!--图片内容-->
             <div class="food_container">
               <img src="../nav/1.jpg" alt="">
             </div>
             <span>甜品饮品</span>
           </a>

         </div>
         <!--第二页-->
         <div class="swiper-slide">

         </div>
       </div>
       <!--包含滑动的小点点-->
       <div class="swiper-pagination"></div>
     </div>
   </nav>
</template>

<script>
  // import {mapState} from 'vuex'

    export default {
        name: "Nav",
      // computed:{
      //    ...mapState('categorys')
      // },
      mounted(){
          this.$store.dispatch('getCategorys')
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .index_nav
    bottom-border-1px(#e4e4e4)
    margin-top:45px
    height: 200px
    background: #fff;
    .swiper-container
      width: 100%
      height: 100%
      .swiper-wrapper
        width: 100%
        height: 100%
        /*nav页面样式*/
        .swiper-slide
          display: flex
          /*主轴上居中分布*/
          align-items flex-start
          /*交叉轴上从顶端开始分布*/
          justify-content center
          /*换行*/
          flex-wrap wrap
          /*单个nav组元样式*/
          .link_to_food
            /*一行分成4个-*/
            width:25%
            .food_container
              display: block
              width:100%
              padding-bottom: 10px
              font-size: 0
              text-align: center
              img
                display: inline-block
                width: 50px
                height: 50px
            span
              display: block
              width: 100%
              text-align center
              font-size:13px
              color: #666


    .swiper-pagination
      >span.swiper-pagination-bullet-active
        background: #02a774;
</style>
