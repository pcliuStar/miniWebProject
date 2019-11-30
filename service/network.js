export default function request(options) {

  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: options.data,
      success: function(res) {
        resolve(res.data)
      },
      fail: reject,
      complete: res => {
        wx.hideLoading()
      }
    })
  })

}
