// pages/wxml/wxml.js
Page({

  /* 页面的初始数据 */
  data: {
    message: "你好，小程序",
    firstName: "kobe",
    lastName: "bryant",
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 48,
    movies: ["盗墓者", "星际穿越", "海贼王"],
    // 多维数组
    numbers: [
      [10, 14, 11, 12],
      [20, 24, 21, 22],
      [30, 34, 31, 32],
    ],
    letters: ['a', 'b', 'c', 'd']
  },

  /* 生命周期函数--监听页面加载 */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },

  handlerChangeColor(){
    console.log("改变颜色");
    this.setData({
      isActive: !this.data.isActive
    })
  },

  handlerSwitch(){
    this.setData({
      isShow: !this.data.isShow
    })
  },

  handlerIncrementScore(){
    this.setData({
      score: this.data.score + 6
    })
  }

})