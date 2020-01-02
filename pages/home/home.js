
const app = getApp();
const name = app.globalData.name;
const age = app.globalData.age;
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    count: 0,
    name: 'colin',
    age: 18,
    students: [{
      name: "joe",
      age: "18"
    }, {
      name: "colin",
      age: 20
    }]
  },
  handleBtClick() {
    this.setData({
      count: this.data.count + 1
    })
  },
  handleSubClick() {
    this.setData({
      count: this.data.count - 1
    })
  },
  handleGetUserIfo(event){
    console.log(event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.getUserInfo({
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
onPageScroll(obj){
  console.log("滚动滚动条")
},
onReachBottom(){
  console.log("底部栏")
},
onPullDownRefresh(){
  console.log("下拉刷新")
}
})