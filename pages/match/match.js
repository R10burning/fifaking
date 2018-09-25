
const app = getApp()

Page({
  data: {
    themColor: app.globalData.themeColor,
    toTop:0,
    matchList: [
      { matchDay: "2018-10-02", data: [
        {
          home: '国际米兰',
          homeSrc: '../../src/images/inter.jpg',
          matchTime: '8:00',
          matchType: '小组赛',
          score: '2:0',
          host: 'AC米兰',
          hostSrc: '../../src/images/AC.jpg'
        },
        {
          home: '国际米兰',
          homeSrc: '../../src/images/inter.jpg',
          matchTime: '2:45',
          matchType: '1/8决赛',
          score: '2:0',
          host: 'AC米兰',
          hostSrc: '../../src/images/AC.jpg'
        }
      ]},
      {
        matchDay: "2018-10-03", data: [
          {
            home: '国际米兰',
            homeSrc: '../../src/images/inter.jpg',
            matchTime: '8:00',
            matchType: '小组赛',
            score: '2:0',
            host: 'AC米兰',
            hostSrc: '../../src/images/AC.jpg'
          },
          {
            home: '国际米兰',
            homeSrc: '../../src/images/inter.jpg',
            matchTime: '2:45',
            matchType: '1/8决赛',
            score: '2:0',
            host: 'AC米兰',
            hostSrc: '../../src/images/AC.jpg'
          }
        ]
      },
      {
        matchDay: "2018-10-03", data: [
          {
            home: '国际米兰',
            homeSrc: '../../src/images/inter.jpg',
            matchTime: '8:00',
            matchType: '小组赛',
            score: '2:0',
            host: 'AC米兰',
            hostSrc: '../../src/images/AC.jpg'
          },
          {
            home: '国际米兰',
            homeSrc: '../../src/images/inter.jpg',
            matchTime: '2:45',
            matchType: '1/8决赛',
            score: '2:0',
            host: 'AC米兰',
            hostSrc: '../../src/images/AC.jpg'
          }
        ]
      }
    ]
  },
  onLoad () {
  },
  onShow () {
    
  },
  onPullDownRefresh() {
    console.log('刷新');
  },
  onReachBottom() {
    console.log('下拉加载更多');
  }
})
