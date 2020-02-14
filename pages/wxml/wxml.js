// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newdata:new Date().toLocaleString(),
    isactive:false,
    scroll:99,
    movies:["李银河，你好啊","再见，奇奇格","蓝色的蝴蝶"],
    price:"27.678"
  },
handlecolor(){
this.setData({
  isactive:!this.data.isactive
})
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    setInterval(()=>{
      this.setData({
        newdata: new Date().toLocaleString()
      })
    },1000)
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})