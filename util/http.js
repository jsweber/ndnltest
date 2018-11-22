import config from '..//config.js'
const TipMap = {
  1: '发生错误！',
  2: '服务器错误！',
  1004: '禁止访问',
  1005: '不正确的开发者key'
}

class Http {
  request(param) {
    let p = Object.assign({
      method: 'GET',
      success() { }
    }, param)

    wx.request({
      url: config.url + p.api,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: resp => {
        if (resp.statusCode.toString().startsWith('2')) {
          p.success(resp.data)
        } else {
          this._dealError(resp.data.error_code)
        }
      },
      fail: err => {
        this._dealError(2)
      }
    })
  }

  _dealError(errCode) {
    if (!errCode) errCode = 1
    wx.showToast({
      title: TipMap[errCode],
      icon: 'none',
      duration: 2000
    })
  }

}

export default Http
