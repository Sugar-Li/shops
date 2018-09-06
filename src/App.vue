<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>

</template>

<script>
  import Footer from './components/Footer/Footer.vue'
export default {
  components:{
    Footer
  }
}
</script>

<style rel="stylesheet/stylus"lang="stylus">

  #app
    width: 100%
    height: 100%
    background: #f5f5f5;

</style>
