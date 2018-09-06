//ajax请求模块

import axios from 'axios'

//暴露一个ajax函数，返回promise对象，因为封装两次，因此得到的是promise对象的data数据
//ajax函数包含三个参数，url，data，type
export default function ajax(url='',data={},type='GET') {
  //创建Promise实例
  return  new Promise(function (resolve, reject) {
    let promise
    //如果类型是GET，那么url需要拼串获取
    if (type==='GET'){
      let dataStr=''
      //根据键名循环，拼串的到一个字符串，但是最后一个键值对多出一个 '&'，需要删除
      Object.keys(data).forEach(key=>{
        dataStr+=key+'='+data[key]+'&'
      })
      //删除 '&'
      if (dataStr!==''){
        //substring返回一个从开始到结束的字符串（不包括结束字符）,这里是获取最后一个'&'d的下标值作为结束值
        dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
        url=url+dataStr
      }
      //发送GET请求
      promise=axios.get(url)
    }else {
      //发送POST请求
      promise=axios.post(url,data)
    }
//  此时已经完成ajax请求，返回promise对象的过程，但是为了能过在调用ajax请求，
// 直接返回的是promise对象的data值，而不是对象，则需要进行二次封装

    // 成功则返回promise的data数据，失败则返回失败信息
    promise.then(response=>{
      resolve(response.data)
    })
      .catch(err=>{
        reject(err)
      })
  })



}
