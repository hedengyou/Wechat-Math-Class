const baseUrl = 'http://localhost:4000';
// const baseUrl = 'http://132.232.82.254:4000';

// 不需要进行Token验证的api
const noAuthUrls = [
  '/api/login',
];

export default function (method, url, data, option) {
  const methodsArr = ['GET', 'POST', 'PUT', 'DELETE'];
  return new Promise(
    (resolve, reject) => {
      if (!methodsArr.includes(method)) {
        return reject('错误的Http method');
      }
      let header = {
        'content-type': 'application/json'
      };
      if (!noAuthUrls.includes(url)) {
        // 需要在header里面设置Token来进行验证
        let token = '';
        try {
          token = wx.getStorageSync('Token')
        } catch (e) {
          // Do something when catch error
          console.log(e);
          wx.redirectTo({ url: '../pages/login/main' });
          reject('Token读取失败');
        }
        if (!token) {
          wx.redirectTo({ url: '../pages/login/main' });
          reject('Token读取失败');
        }
        header.Authorization = token;
      }
      wx.request({
        url: baseUrl + url,
        method: method,
        header,
        data,
        success: function(res) {
          console.log(res);
          if (res.statusCode === 401) {
            console.log('test');
            wx.redirectTo({ url: '/pages/login/main' });
            reject('权限验证失败');
          } else if (res.statusCode === 200) {
            resolve(res.data);
          } else {
            // 返回的状态码不是200，说明请求有错误
            reject('error');
          }
        },
        fail: function(res) {
          console.log(res);
          wx.redirectTo({ url: '/pages/login/main' });
          reject('error');
        }
      })
    }
  )
}