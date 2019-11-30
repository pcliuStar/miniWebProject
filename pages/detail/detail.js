// pages/detail/detail.js
Page({

  onLoad: function (options) {
    console.log(options);
  },


  onUnload(){
    console.log("页面退出后回调函数");
    // 获取首页页面对象
    var pages = getCurrentPages();
    console.log(pages);
    var home = pages[pages.length - 2];

    home.setData({
      title: "呵呵呵"
    })
  },


  handleBackHome(){
    wx.navigateBack({
      delta: 1
    })
  }

})