<template>
  <div class="all">
       <p class="top_1"><b>四川大学数学公共课</b></p>
          <p class="top_2">我的课程<button type="txt" style="float: right;margin:5px;padding:2px;font-size:12px" @click="chooseLessons">返回主界面</button></p>
    <div class="container">
      <div class="container_1">
        <div class="box">
          <div class="img_1">
            <img  class="picture_1" src="/static/images/3.jpg"/>
            <p class="p1">微积分</p>
          </div>
          <div class="txt_1">微积分是高等数学中研究函数的微分、积分以及有关概念和应用的数学分支。内容主要包括极限、微分学、积分学及其应用。<button style="float: right;margin:5px;padding:2px;font-size:12px">章节知识点选择</button></div>
        </div>
      </div>
     
      <div class="container_2">
        <div class="box">
          <div class="img_2">
            <image  class="picture_2" src="/static/images/1.jpg"/>
            <p class="p2">概率统计</p>
          </div>
          <div class="txt_2">概率统计是研究自然界中随机现象统计规律的数学方法。概率统计主要研究对象为随机事件、随机变量以及随机过程。<button style="float: right;margin:5px;padding:2px;font-size:12px">章节知识点选择</button></div>
        </div>
      </div>
      
      <div class="container_3">
        <div class="box">
          <div class="img_3">
            <image  class="picture_3" src="/static/images/2.jpg"/>
            <p class="p3">线性代数</p>
          </div>
          <div class="txt_3">线性代数是数学的一个分支，它的研究对象是向量，向量空间（或称线性空间），线性变换和有限维的线性方程组。<button style="float: right;margin:5px;padding:2px;font-size:12px">章节知识点选择</button></div>
        </div>
      </div>

    </div>  
  </div>
</template>

<script>
export default{
  data: {

  },
  methods: {
    chooseLessons () {
      wx.navigateTo({url:'../index/main'});
    }
  }
}
</script>

<style>
  .top_1 {
  text-align: left;
  margin-top: 1%;
  margin-bottom:20px ;
  padding: 5px;
  display: block;
  border: solid rgb(190,190,190);
  background: rgb(187, 186, 186)
}
.top_2{
  padding-left: 10px;
  margin-bottom: 20px;
  padding-bottom: 0px
}
.box{
  width: 95%;
  position: relative;
  float: left;
  padding: 1px;
  margin: 0px
}
.container{
  margin-top: 0px;
  padding-top: 10px;
  width: 100%;
  
}
.container_1,.container_2,.container_3{
  width: 95%;
  height: 120px;
  margin-left: 2px;
  margin-bottom: 10px;
  margin-top: 2px;
  padding: 2px;
  border-bottom: solid rgb(46, 46, 46) 2px;
  line-height: 20px;
}
.img_1,.img_2,.img_3 {
  width: 100px;
  height: 120px;
  margin-right: 8px;
  padding-right: 5px
}
.picture_1,.picture_2,.picture_3{
  width: 100px;
  height: 90px;
  margin-bottom: 0px;
}
.p1,.p2,.p3{
  font-size: 15px;
  width: 98px;
  margin-left: 1px;
  margin-top: 0px;
  text-align: center;
  background: #aaa;
}
.txt_1,.txt_2,.txt_3{
  font-size: 10px;
  width: 150px;
  margin: 0px;
  margin-top: -120px;
  padding-left: 150px
}
</style>
