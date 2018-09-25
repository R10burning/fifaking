//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperData: [{
        title: '新闻1',
        src: '../../src/images/swiper01.jpg'
      },
      {
        title: '新闻2',
        src: '../../src/images/swiper02.jpg'
      },
      {
        title: '新闻3',
        src: '../../src/images/swiper03.jpg'
      }
    ],
    themColor: app.globalData.themeColor,
    matchData: [
      {
        home: '国际米兰',
        homeSrc: '../../src/images/inter.jpg',
        matchTime:'8:00',
        matchType:'小组赛',
        score:'2:0',
        host:'AC米兰',
        hostSrc:'../../src/images/AC.jpg'
      },
      {
        home: '国际米兰',
        homeSrc: '../../src/images/inter.jpg',
        matchTime: '2:45',
        matchType: '1/8决赛',
        score: '2:0',
        host: 'AC米兰',
        hostSrc: '../../src/images/AC.jpg'
      }, 
      {
        home: 'Inter',
        homeSrc: '../../src/images/inter.jpg',
        matchTime: '8:00',
        matchType: '小组赛',
        score: '3:2',
        host: 'Milan',
        hostSrc: '../../src/images/AC.jpg'
      }, 
      {
        home: '国际米兰',
        homeSrc: '../../src/images/inter.jpg',
        matchTime: '8:00',
        matchType: '小组赛',
        score: '1:1',
        host: 'AC米兰',
        hostSrc: '../../src/images/AC.jpg'
      }, 
      {
        home: '国际米兰',
        homeSrc: '../../src/images/inter.jpg',
        matchTime: '8:00',
        matchType: '小组赛',
        score: '1:1',
        host: 'AC米兰',
        hostSrc: '../../src/images/AC.jpg'
      }, 
      {
        home: '国际米兰',
        homeSrc: '../../src/images/inter.jpg',
        matchTime: '8:00',
        matchType: '小组赛',
        score: '2:3',
        host: 'AC米兰',
        hostSrc: '../../src/images/AC.jpg'
      },  
    ],
    windowHeight:''
  },
  //事件处理函数
  onLoad() {
    let that =this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight + "px",
        })
      }
    })
  },
  onPullDownRefresh (){
    console.log('刷新');
  },
  onReachBottom () {
    console.log('下拉加载更多');
  }
})