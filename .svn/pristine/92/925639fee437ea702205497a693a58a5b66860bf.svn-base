// 抽取 基地址
// 配置
import wepy from 'wepy';
let baseURL = 'http://api.dgweidao.com/';

// 写封装的东西
let method = {
  /*
    opt
      url
      method
      success
      fail
      函数的上下文调用模式
      apply call bind
  */
  request: async opt => {
    let res = await wepy.request({
      url: `${baseURL}${opt.url}` || '',
      method: opt.method || 'get',
      header: opt.header || {},
      data: opt.data || {}
    });
    return res;
  }
};
// 暴露出去
module.exports.request = method.request;
