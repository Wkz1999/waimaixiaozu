const db = wx.cloud.database({});
const cont = db.collection('river_data');
Page({

  data: {

    ne: []

  },

  onLoad: function () {

    var _this = this;

    const db = wx.cloud.database({

      env: 'waimaixiaozu-0oyhd'

    })

    db.collection('lxt').get({

      success: res => {
        console.log(res.data)
        this.setData({

          a: res.data

        })

      }

    })

  },





})
