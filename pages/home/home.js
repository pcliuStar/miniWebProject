// pages/home/home.js
Page({

  /* 页面的初始数据 */
  data: {
    title: "哈哈哈"
  },

  handlePushDeatil(){
    wx.navigateTo({
      url: '/pages/detail/detail?title=12',
    }),

    wx.redirectTo({
      url: '',
    })
  }

})