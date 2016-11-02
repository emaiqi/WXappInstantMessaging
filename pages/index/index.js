//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady: function() {
    console.log("onready")
    // Do something when page ready.
  },
  onShow: function() {
    console.log("onShow")
    // Do something when page show.
  },
  onHide: function() {
    console.log("onHide")
    // Do something when page hide.
  },
  onUnload: function() {
    console.log("onUnload")
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    console.log("onPullDownRefresh")
    // Do something when pull down
    wx.stopPullDownRefresh
    this.setData({
       motto: 'Hello PullDownRefresh'
    })
  },
  
})
