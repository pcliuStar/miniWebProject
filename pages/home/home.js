// pages/home/home.js
Page({

  /*页面的初始数据*/
  data: {

  },

  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {
    // 发送网络请求
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success: function(res){
        console.log(res);
      }
    })
  }

})