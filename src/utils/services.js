import request from './request';

// Api service

// Hello Api,仅测试接口使用
function helloApi() {
  return request('GET', '/');
}

export default {
  helloApi
}