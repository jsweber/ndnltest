// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    defaultImg: '../images/like@2x.png',
    activeImg: '../images/like-red@2x.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    likeHandler(e){
      let like = !this.properties.like
      let count = like ? this.properties.count + 1 : this.properties.count -1
      this.setData({
        like,
        count
      })
    }
  }
})
