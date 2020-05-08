// 云函数入口文件
const cloud = require('wx-server-sdk')
const db = wx.cloud.database();
const user = db.collection("user");
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    wx.navigateTo({ url: '/pages/lzy/lzy' })

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}