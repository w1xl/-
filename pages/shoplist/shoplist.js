// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    page:1,
    pageSiZe:10,
    total:0,
    shopList:[]
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //赋值
    this.setData({
      query:options
    })
    this.getShopList()
  },
  getShopList(){
    wx.request({
        url: `https://applet-base-api-t.itheima.net/categories/${this.data.query.id}/shops`,
        method: 'GET',
        data: {
          _page: this.data.page,
          _limit: this.data.pageSize
        },
        success: (res) => {
          console.log(res)
          this.setData({
            shopList: [...this.data.shopList, ...res.data],
            total: res.header['X-Total-Count'] - 0
        })
        }
      })
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
  onReachBottom: function () {
    this.setData({
      page: this.data.page+1
    })
    this.getShopList()

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})