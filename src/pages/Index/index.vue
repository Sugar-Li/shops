<template>
  <div>
    <Header title="江宁区东方龙湖湾南湖苑80栋">
      <!--router-link相当于a，转换成搜索页面-->
      <router-link slot="search" to="/search" class="header_search">
        <i class="iconfont">&#xe720;</i>
      </router-link>
      <router-link slot="login" to="/login" class="header_login">
        <span>登录|注册</span>
      </router-link>
    </Header>
    <Nav></Nav>
  </div>

</template>

<script>
  import Header from '../../components/Hearder/Hearder'
  import Nav from './component/Nav'

  export default {
    name: "index",
    components: {
      Header,
      Nav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header_search
    /*垂直居中*/
    position: absolute
    left: 15px
    top: 50%
    transform translateY(-50%)
    width: 10%
    height: 50%
    .iconfont
      font-size: 25px
      color: #fff

  .header_login
    font-size: 14px
    position: absolute
    right: 15px
    top: 50%
    transform translateY(-50%)
    color: #fff
</style>
