//直接更新数据模块

import Vue from 'vue'
import {RECEIVE_CATAGORYS} from './mutations-type'

export default ({
[RECEIVE_CATAGORYS](state,{categorys}){
  state.categorys=categorys
}
})
