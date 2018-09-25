//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    windowHeight:0,
    username:'',
    password:'',
    showModal:true
  },
  onLoad: function () {
    let _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          windowHeight: res.windowHeight + "px",
        })
      }
    })
  },
  username (e) {
    this.setData({username:e.detail.value});
  },
  password (e) {
    this.setData({ password: e.detail.value});
  },
  login () {
    if (this.data.username==='fifaking'&&this.data.password==='123456'){
      wx.showToast({title:'登陆成功'})
      this.setData({showModal:false})
    } else{
      wx.showToast({ title: '用户名密码错误',icon:'none'})
    }
  }
})
