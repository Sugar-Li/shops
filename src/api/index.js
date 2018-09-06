/*
* 调用ajax函数，
* 与后台进行交互
* */

import ajax from './ajax'

//获取地址信息（根据经纬度）

//获取index页面食品分类列表
export const reqCategorys=()=>ajax('/api/index/index_category')
