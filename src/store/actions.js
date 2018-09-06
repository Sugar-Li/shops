/*
* 通过mutation间接更新data
*
*
* */

//接收暴露出来的信息（主要接收ajax函数请求得到的数据）
import {reqCategorys} from '../api'

//传递给mutations的常量名称可以固定为大写（这个只是代码习惯，为了好看而已）
import {RECEIVE_CATAGORYS} from './mutations-type'

//将数据传递给mutation
export default {


  // 调用函数getCategorys，异步获取分类数组，然后传递给mutations，然后进行data更新
  async getCategorys(commit){
    const result=await reqCategorys()
    //调教一个mutation
    if (result.code===0){//成功，这个是看后台代码给定的判定
      const categorys=result.data
      //传递一个常量名称和一个计算后想要更新的数据
      commit(RECEIVE_CATAGORYS,{categorys})
    }

  }
}
