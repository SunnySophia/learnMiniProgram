// pages/home/home.js
import request from "../../servies/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
   title:["衣服","鞋子","裤子"],
   count:0,
   isShow:true,
   haha:'我是哈哈哈'
  },
  //弹框
  handleshowtoast(){
    wx.showToast({
      title: '加载中',
      duration:3000,
      mask:true,
      icon:"loading",
      success:function(){
        console.log("接口调用成功了")
      },
      fail:function(){
        console.log("接口调用失败了")
      },
      complete:function(){
        console.log("接口调用完成")
      }
    })
  },
  handleshowmodal(){
    wx.showModal({
      title: '猜一猜',
      content: '猜猜我是谁',
      success(res){
        if(res.confirm){
          console.log("用户点击了确认按钮")
        }
        else if(res.cancel){
          console.log("用户点击了取消按钮")
        }
      }
    })
  },
  handleloading(){
    wx.showLoading({
      title: 'loading',

    })
    setTimeout(()=>{
      wx.hideLoading()
    },1000)
  },
  handleactionsheet(){
    wx.showActionSheet({
      itemList: ["相册","图像"],
      success(res){
        console.log(res.tapIndex)
      }
    })
  },

  handlechange(){
  this.setData({
    isShow:!this.data.isShow
  })
  },
  handlinnercount(){
    //改变组件内的数据
    const my_sel = this.selectComponent('#innerclass')
    console.log(my_sel)
    my_sel.handleinnercount(10)
  },
  hanldeclick(event){
    console.log(event)
  },
  handleincrement(){
    this.setData({
      count:this.data.count+1
    })
  },
  handleCapture1(){
    console.log("hah1")
  },
  handleBind1(){
    console.log("heihei1")
  },
  handleCapture2() {
    console.log("hah2")
  },
  handleBind2() {
    console.log("heihei2")
  },
  handleCapture3() {
    console.log("hah3")
  },
  handleBind3() {
    console.log("heihei3")
  },

  handleTap(event){
    console.log(event)
  },
  handleBtnClick(){
    console.log("我执行了")
  },
  handleStart(){
    console.log("开始了")
  },
  handlemove(){
    console.log("移动中")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    
   
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
    return{
      title:'转发给你好了',
      path:'/pages/home/home',
      imageUrl:'https://i1.hdslb.com/bfs/archive/380031d6280a4f3402b3a2269cdf5fb5760c8c0d.jpg@336w_190h.webp'
    }
  }
}) 