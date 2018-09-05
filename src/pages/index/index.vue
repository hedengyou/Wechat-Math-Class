<template>
    <div>
      <p class="top"><b>四川大学数学公共课</b></p>
      
      <div>
          <p style="padding:5px">我的课程<button type="txt" style="float: right;padding:1px;font-size:12px" @click="enterChooseLessons">更多课程</button></p>
          <div class="container_1">
          <div class="img_1">
            <image  class="picture_1" src="/static/images/3.jpg"/>
            <p class="p1">微积分</p>
          </div>

          <div class="img_2">
              <image  class="picture_2" src="/static/images/1.jpg"/>
            <p class="p2">概率统计</p>
          </div>

          <div class="img_3">
              <image  class="picture_3" src="/static/images/2.jpg"/>
            <p class="p3">线性代数</p>
          </div>
          </div>
      </div>
      <div>
          <p style="padding:5px">我的任务<button type="txt" style="float: right;padding:1px;font-size:12px" @click="enterChooseLessons">更多任务</button></p>
          <div class="container_2">
          <div class="img_4">
              <image  class="picture_4" src="/static/images/4.jpg"/>
            <p class="p4">作业1</p>
          </div>

          <div class="img_5">
              <image  class="picture_5" src="/static/images/4.jpg"/>
            <p class="p5">作业2</p>
          </div>

          <div class="img_6">
              <image  class="picture_6" src="/static/images/4.jpg"/>
            <p class="p6">作业3</p>
          </div>
      </div>
      
      </div>
    </div>
    
</template>

<script>
import HelloWorld from '../../components/HelloWorld';
 


export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main';
      wx.navigateTo({ url });
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.navigateTo({ url: '../login/main' });
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo;
              console.log(this.userInfo);
            }
          })
        }
      })
    },
    
    enterChooseLessons () {
    wx.navigateTo({ url: '../myLessons/main'});
  }
    },
  created: function() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
}
</script>
<style>
.container_1,.container_2{
  height: 120px;
  border-top: dashed #aaa 1.5px;
  margin-left: 2px;
  margin-bottom: 10px;
  margin-top: 2px;
  padding: 10px;
  border-left: dotted #aaa 1.5px;
  border-bottom: dotted #aaa 1.5px;
  line-height: 20px;
}
.top {
  text-align: left;
  margin-top: 2%;
  margin-bottom:30px ;
  padding: 5px;
  display: block;
  border: solid rgb(190,190,190);
  background: rgb(187, 186, 186)

}
.img_1,.img_2,.img_3 {
  width: 100px;
  height: 120px;
  float: left;
  margin-right: 8px;
}
 .img_4,.img_5,.img_6 {
  width: 100px;
  height: 120px;
  float: left;
  margin-right: 8px;
} 
 /* .img_1{
  margin-left: 20px;
}  */
.picture_1,.picture_2,.picture_3,.picture_4,.picture_5,.picture_6{
  width: 100px;
  height: 90px;
  margin-bottom: 0px;
}
.p1,.p2,.p3,.p4,.p5,.p6{
  font-size: 15px;
  width: 98px;
  margin-left: 1px;
  margin-top: 0px;
  text-align: center;
  background: #aaa;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128px;
  height: 128px;
  margin: 20px;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
