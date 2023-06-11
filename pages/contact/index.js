//index.js
//获取应用实例
var app = getApp();
var wxb = require('../../utils/wxb.js');
Page({
  data: {
    color: '',
    datas: [],
  },
  gotoLogs: function () {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },

  onShow: function () {
    wxb.that = this;   
    wxb.globalData = app.globalData; 
    
  },

  onLoad: function () {
    wxb.that = this;
    wxb.style();
    this.getHome();
  },

  getHome: function (e) {
    wxb.that = this;  
    wxb.globalData = app.globalData; 
    wx.showLoading({
      title: '加载中...',
    })
    wxb.Post('/api/companygw.index/getCompany', {

    }, function (data) {
      console.log(data);
      wx.hideLoading();
      wxb.that.setData({
        datas: data,
      })
    });
  }
})
