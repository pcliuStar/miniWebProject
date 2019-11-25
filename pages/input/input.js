// pages/input/input.js
Page({

  /* 页面的初始数据 */
  data: {

  },

  handlerInput(event){
    console.log("用户输入内容", event);
  },
  
  handlerFocus(event){
    console.log("input获取焦点", event);
  },

  handlerBlur(event){
    console.log("input失去焦点", event);
  }

})