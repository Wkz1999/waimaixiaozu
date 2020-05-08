//app.js
App({
  onLaunch: function () {

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'waimaixiaozu-0oyhd',
        //我刚刚从云开发控制台里复制过来的自己的环境ID，
        traceUser: true,
      })
    }

    this.globalData = {}
  }


})