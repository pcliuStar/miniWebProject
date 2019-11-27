// pages/wxs/wxs.js
Page({

  /*页面的初始数据*/
  data: {
    price: 25.666666
  },

  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {

  },

  /*自定义一个处理小数点的函数 */
  numberToFixed(value){
    return value.toFixed(2)
  }

})