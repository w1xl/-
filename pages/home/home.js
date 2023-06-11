// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //1.存放轮播图数据的列表
    swiperList:[],
    GridList:[]
  },
  
 
 
  //2.获取轮播图数据的方法
  getSwiperList() {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/slides', 
      method: 'GET',
      success: (res) => {
          console.log(res)
        this.setData({
          swiperList: res.data
        })
      }
    })
  },
  //获取九宫格数据的方法
  getGridList() {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/categories', 
      method: 'GET',
      success: (res) => {
          console.log(res)
          this.setData({
            GridList:res.data
          })
      }
    
    })
  },

  /**
   * 3.生命周期函数--监听页面加载,页面首次加载自动发送请求
   */
  onLoad (options) {
       this.getSwiperList()
       this.getGridList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom () {
    console.log('触发了上拉触底的事件')

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})