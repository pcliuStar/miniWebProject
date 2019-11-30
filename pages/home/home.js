// pages/home/home.js
import request from "../../service/network.js"


Page({

  /*页面的初始数据*/
  data: {

  },

  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {
    /*请求轮播图和推荐数据 */
    wx.request({
      url: 'http://123.207.32.32:8000/home/multidata',
    }).then(res => {
      console.log(res);
    })
  }

})