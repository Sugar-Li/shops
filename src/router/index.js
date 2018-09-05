// 路由器模块

import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index/index.vue'
import Search from '../pages/Search/search.vue'
import Order from '../pages/Order/order.vue'
import Mine from '../pages/Mine/mine.vue'

//调用路由器
Vue.use(VueRouter)

//输出路由器
export default new VueRouter({
  //输出路由
  routes:[
    //默认直接跳转到index页面
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      component:Index
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/order',
      component:Order,
    },
    {
      path:'/mine',
      component:Mine
    },
  ]
})
