// pages/grade/grade.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   imgUrl:app.globalData.imgUrl,
   dstar: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
   totalscore:0,
   grade:[
     {
       title:"情商",
       levelFirst:"你完全无法感知别人对你不爽，你是矛盾制造机。",
       levelSecond: "你基本上不会另身边人觉得难堪。",
       levelThird: "和你在一起真心很舒服。",
       star: null,
       score:4,
     },
     {
       title: "智商",
       levelFirst: "你是上帝派来我身边的猪队友，真的，哪怕只是看到你我心就累了",
       levelSecond: "你时常还能帮帮忙，有你在我会轻松点。",
       levelThird: "论聪明，我甘拜下风，很多时候真的需要你。",
       star: null,
       score: 5,
     },
     {
       title: "颜值",
       levelFirst: "丑是你专属名片，又丑又可爱的你真的不要再出现我的世界里了。",
       levelSecond: "虽然你颜值普通，但看在你可爱的份上，我们还是可以一起玩耍",
       levelThird: "和你在一起真心很舒服。",
       star: null,
       score: 8,
     }
   ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTotalScore();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  selectStar:function(e){
    const {parentindex,sindex} = e.currentTarget.dataset;
    let grade = this.data.grade;
    grade[parentindex].score = sindex+1;
    let stararr = [];
    for (let i = 0; i < sindex + 1;i++){
      let arrvalue = "1";
      stararr.push(arrvalue);
    }
    grade[parentindex].star = stararr;
    this.setData({
      grade: grade
    })
  },
  /**
   * 计算总分
   */
  getTotalScore:function(e){
    let total = 0;
    let grade = this.data.grade;
    for(let i=0; i<grade.length;i++){
      let score = parseInt(grade[i].score);
      let star = grade[i].star;
      let stararr = [];
      for(let j=0;j<score;j++){
        let arrvalue = "1";
        stararr.push(arrvalue);
      }
      grade[i].star = stararr;
      total += parseInt(grade[i].score);
    }
    this.setData({
      grade:grade,
      totalscore: total,
    })
    console.log(this.data.totalscore)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})