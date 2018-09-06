//vuex最核心的模块

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

//暴露一个store实例对象
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
