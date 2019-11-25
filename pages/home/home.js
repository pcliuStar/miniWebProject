// pages/home/home.js
Page({

  /*页面的初始数据*/
  data: {
    // 定义一个变量
    name: "刘文明",
    age: 18,
    // 定义一个对象数组
    students: [
      { id: "100", name: "张三", age: 18},
      { id: "102", name: "王五", age: 19 },
      { id: "103", name: "赵六", age: 20 },
      { id: "104", name: "李四", age: 21 },
    ],
    count: 0
  },
  /*事件方法*/
  handleSumClick(){
    console.log("按钮发生点击");
    // 错误的做法：数据发生改变，但是页面不刷新
    // this.data.count +=1;

    // 正确的做法：this.setData()
    this.setData({
      count: this.data.count + 1
    });
    console.log(this.data.count);
  },
  handleMulClick() {
    this.setData({
      count: this.data.count - 1
    });
  }

})