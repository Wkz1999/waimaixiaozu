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

    db.collection('yla').get({

      success: res => {
        console.log(res.data)
        this.setData({

          b: res.data

        })

      }

    })

  },





})
