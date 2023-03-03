// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // object:{
    //   date:"March 1 2023"
    // },
    // title:"山水田园诗派",
    // postImg:"/images/avatar/avatar-1.png",
    // avatar:"/images/post/post-4.jpg",
    // content:"特点：题材多青山白云、幽人隐士；风格多恬静雅淡，富于阴柔之美；形式多五言古诗 、五绝、五律。",
    // readingNum:92,
    // collectionNum:{
    //   array:[108]
    // },
    // commentNum:7
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //页面初始化options为页面跳转所带来的参数
    // this.setData({
    //   title:"基于setdata的数据更新显示"
    // })
    // this.setData({
    //   "collectionNum.array[0]":66
    // })
    // this.setData({
    //   "object.date":"May 12 1986"
    // })
    var thischangedata = {
      object:{
        date:"March 1 2023"
      },
      title:"山水田园诗派",
      postImg:"/images/avatar/avatar-1.png",
      avatar:"/images/post/post-4.jpg",
      content:"特点：题材多青山白云、幽人隐士；风格多恬静雅淡，富于阴柔之美；形式多五言古诗 、五绝、五律。",
      readingNum:92,
      collectionNum:{
        array:[108]
      },
      commentNum:7
    }
    this.setData({
      bindchangedata:thischangedata
    })
    console.log("页面被加载")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("页面被渲染")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("页面被显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("页面被隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("页面被卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})