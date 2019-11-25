// pages/image/image.js
Page({

  data: {
    imagePath: ""
  },

  handlerChooseImage(){
    console.log("选中图片");
    /*系统API：让用户在相册当中选择图片或者拍照 */
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        /*取出图片路径*/
        var path = res.tempFilePaths[0];
        /*设置imagePath */
        this.setData({
          imagePath: path
        })
      },
    })
  }

})