//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabData:['积分榜','分组信息'],
    activeIndex:0,
    windowHeight:0,
    toTop:0,
    scoreData:[
      {
        src:'../../src/images/1.png',
        team:'切尔西',
        played:5,
        win:5,
        draw:0,
        lost:0,
        goal:'14/4',
        score:15
      },
      {
        src:'../../src/images/2.png',
        team:'利物浦',
        played:5,
        win:5,
        draw:0,
        lost:0,
        goal:'11/2',
        score:15
      },
      {
        src:'../../src/images/3.png',
        team:'曼城',
        played:5,
        win:4,
        draw:0,
        lost:1,
        goal:'14/3',
        score:13
      },
      {
        src:'../../src/images/4.png',
        team:'沃特福德',
        played:5,
        win:4,
        draw:0,
        lost:1,
        goal:'14/3',
        score:12
      },
      {
        src:'../../src/images/5.png',
        team:'伯恩茅斯',
        played:5,
        win:3,
        draw:1,
        lost:1,
        goal:'14/3',
        score:10
      },
      {
        src:'../../src/images/6.png',
        team:'托特纳姆热刺',
        played:5,
        win:3,
        draw:1,
        lost:1,
        goal:'14/3',
        score:10
      },
      {
        src:'../../src/images/7.png',
        team:'阿森纳',
        played:5,
        win:3,
        draw:1,
        lost:1,
        goal:'14/3',
        score:10
      },
      {
        src: '../../src/images/1.png',
        team: '切尔西',
        played: 5,
        win: 5,
        draw: 0,
        lost: 0,
        goal: '14/4',
        score: 15
      },
      {
        src: '../../src/images/2.png',
        team: '利物浦',
        played: 5,
        win: 5,
        draw: 0,
        lost: 0,
        goal: '11/2',
        score: 15
      },
      {
        src: '../../src/images/3.png',
        team: '曼城',
        played: 5,
        win: 4,
        draw: 0,
        lost: 1,
        goal: '14/3',
        score: 13
      },
      {
        src: '../../src/images/4.png',
        team: '沃特福德',
        played: 5,
        win: 4,
        draw: 0,
        lost: 1,
        goal: '14/3',
        score: 12
      },
      {
        src: '../../src/images/5.png',
        team: '伯恩茅斯',
        played: 5,
        win: 3,
        draw: 1,
        lost: 1,
        goal: '14/3',
        score: 10
      },
      {
        src: '../../src/images/6.png',
        team: '托特纳姆热刺',
        played: 5,
        win: 3,
        draw: 1,
        lost: 1,
        goal: '14/3',
        score: 10
      },
      {
        src: '../../src/images/7.png',
        team: '阿森纳',
        played: 5,
        win: 3,
        draw: 1,
        lost: 1,
        goal: '14/3',
        score: 10
      },
      {
        src: '../../src/images/1.png',
        team: '切尔西',
        played: 5,
        win: 5,
        draw: 0,
        lost: 0,
        goal: '14/4',
        score: 15
      },
      {
        src: '../../src/images/2.png',
        team: '利物浦',
        played: 5,
        win: 5,
        draw: 0,
        lost: 0,
        goal: '11/2',
        score: 15
      },
      {
        src: '../../src/images/3.png',
        team: '曼城',
        played: 5,
        win: 4,
        draw: 0,
        lost: 1,
        goal: '14/3',
        score: 13
      },
      {
        src: '../../src/images/4.png',
        team: '沃特福德',
        played: 5,
        win: 4,
        draw: 0,
        lost: 1,
        goal: '14/3',
        score: 12
      },
      {
        src: '../../src/images/5.png',
        team: '伯恩茅斯',
        played: 5,
        win: 3,
        draw: 1,
        lost: 1,
        goal: '14/3',
        score: 10
      },
      {
        src: '../../src/images/6.png',
        team: '托特纳姆热刺',
        played: 5,
        win: 3,
        draw: 1,
        lost: 1,
        goal: '14/3',
        score: 10
      },
      {
        src: '../../src/images/7.png',
        team: '阿森纳',
        played: 5,
        win: 3,
        draw: 1,
        lost: 1,
        goal: '14/3',
        score: 10
      }
    ],
    groupData:[
      {
        groupName:'A组',
        data:[
          {
            src: '../../src/images/1.png',
            team: '切尔西',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          {
            src: '../../src/images/2.png',
            team: '利物浦',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          {
            src: '../../src/images/5.png',
            team: '伯恩茅斯',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          {
            src: '../../src/images/6.png',
            team: '托特拉姆热刺',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          
        ]
      },
      {
        groupName:'B组',
        data:[
          {
            src: '../../src/images/1.png',
            team: '切尔西',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          {
            src: '../../src/images/2.png',
            team: '利物浦',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          {
            src: '../../src/images/5.png',
            team: '伯恩茅斯',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          {
            src: '../../src/images/6.png',
            team: '托特拉姆热刺',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          
        ]
      },
      {
        groupName:'C组',
        data:[
          {
            src: '../../src/images/1.png',
            team: '切尔西',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          {
            src: '../../src/images/2.png',
            team: '利物浦',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          {
            src: '../../src/images/5.png',
            team: '伯恩茅斯',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          {
            src: '../../src/images/6.png',
            team: '托特拉姆热刺',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          
        ]
      },
      {
        groupName:'D组',
        data:[
          {
            src: '../../src/images/1.png',
            team: '切尔西',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          {
            src: '../../src/images/2.png',
            team: '利物浦',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          {
            src: '../../src/images/5.png',
            team: '伯恩茅斯',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          {
            src: '../../src/images/6.png',
            team: '托特拉姆热刺',
            played: 0,
            win: 5,
            draw: 0,
            lost: 0,
            goal: '0/0',
            score: 0
          },
          
        ]
      },
    ]
  },
  //事件处理函数
  onLoad() {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight + "px",
        })
      }
    })
  },
  toggle(e){
    this.setData({activeIndex:e.currentTarget.dataset.key})
  },
  onPullDownRefresh() {
    console.log('刷新');
  },
  onReachBottom() {
    console.log('下拉加载更多');
  },
  onPageScroll (res) {
    // let toTop = res.scrollTop;
    // this.setData({
    //   toTop
    // });
  }
})