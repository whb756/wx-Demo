//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    list: []
  },
  // 生命周期，组件加载完成
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  //  事件处理函数
  clickMe:() =>{
    console.log('dianjile')
    // 跳转到首页
    wx.switchTab({
      url: '../index/index'
    })
  }
})