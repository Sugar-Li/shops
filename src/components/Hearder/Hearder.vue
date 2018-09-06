<template>
    <header class="hearder">
      <!--name区分不同slot,样式要写在slot-->
      <slot name="search"></slot>
      <a class="header_title">
        <span>{{title}}</span>
      </a>
      <slot name="login"></slot>
    </header>
</template>

<script>
    export default {
        name: "Hearder",
        props:{
          title:String
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .hearder
    background: $green;
    position: fixed
    z-index:100
    left: 0
    top: 0
    width: 100%
    height: 45px
    .header_title
      position: absolute
      left: 50%
      top: 50%
      transform translate(-50%,-50%)
      width:50%
      color: #fff
      text-align center
      .hearder_title_text
        font-size:20px
        color: #fff
        display: block

</style>
