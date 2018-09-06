const baseUrl = 'http://localhost:4000';

export default function(method, url, data, option) {
  const methodsArr = ['GET', 'POST', 'PUT', 'DELETE'];
  return new Promise(
    (resolve, reject) => {
      if (!methodsArr.includes(method)) {
        return resolve('error');
      }
      wx.request({
        url: baseUrl + url,
        method: method,
        header: {
          'content-type': 'application/json'
        },
        data,
        success: function(res) {
          console.log(res);
          resolve(res.data);
        },
        fail: function(res) {
          console.log(res);
          resolve('error');
        }
      })
    }
  )
}