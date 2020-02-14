import request from "servies/network.js"
App({
globalData:{
  token:''
},
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //code有效期只有五分钟
    const token = wx.getStorageSync(token)
    if(token && token.length>0){
      this.check_token(token)
    }else{
      this.login()
    }
    
  
  },
  //验证token是否过期
  check_token:(token)=>{
    request({
      url:'http:/123.20.32.32:3000/autn',
      method:'post',
      header:{
        token
      }

    }).then(res=>{
      if(!res.data.errcCode){
        this.globalData.token = token
      }
    }).catch(err=>{})
  },
  login:() =>{
    wx.login({
      success: (res) => {
        console.log(this)
        const code = res.code
        request({
          url: 'https://123.207.32.32.3000/login',
          method: 'post',
          data: {
            code
          }
        }).then(res => {
          //取出token
          const token = res.data.token
          //将token放到globalData中
          this.globalData.token = token
          //进行本地存储
          wx.setStorageSync("token", token)
        }).catch(err => { })
      }
    })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
