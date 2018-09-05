//接口js
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  //在实例汇总添加router即调用路由器，很多路由功能都可以调用
  router,
})
