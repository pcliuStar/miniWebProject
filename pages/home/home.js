// pages/home/home.js
Page({

  /*页面的初始数据*/
  data: {
    titles: ["衣服", "裤子", "鞋子"]
  },

  handlerBtnClick(){
    console.log("按钮发生点击");
  },

  handleTouchStart(){
    console.log("handleTouchStart")
  },

  handleTouchMove(){
    console.log("handleTouchMove");
  },

  handleTouchChend(){
    console.log("handleTouchChend");
  },

  handleLongPress(){
    console.log("handleLongPress");
  },

  handleEventClick(event){
    console.log("按钮点击", event);
    console.log("当前事件类型", event.type);
    console.log("页面打开到触发事件所经过的毫秒数", event.timeStamp);
    console.log("组件额外的信息", event.detail);
  },

  handleItemClick(event){
    console.log(event);
    var dataset = event.currentTarget.dataset;
    var index = dataset.index;
    var item = dataset.item;
    console.log(index + "-----------" + item);
  },

  handleCaptureView1(){
    console.log("handleCaptureView1");
  },
  handleBtnView1(){
    console.log("handleBtnView1");
  },
   handleCaptureView2() {
    console.log("handleCaptureView2");
  },
  handleBtnView2() {
    console.log("handleBtnView2");
  },
   handleCaptureView3() {
    console.log("handleCaptureView3");
  },
  handleBtnView3() {
    console.log("handleBtnView3");
  }

})