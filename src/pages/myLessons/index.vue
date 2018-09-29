<template>
  <div class="all">
    <p class="top_1"><b>四川大学数学公共课</b></p>
    <p class="top_2">我的课程<button type="txt" style="float: right;margin:5px;padding:2px;font-size:12px" @click="returnHome">返回主界面</button></p>
    <div class="container">
      <div class="container_1" v-for="(item, index) in lessonList" :key="index">
        <div class="box">
          <div class="img_1">
            <img  class="picture_1" :src="item.cover" />
            <p class="p1">{{ item.name }}</p>
          </div>
          <div class="txt_1">{{ item.description }}<button style="float: right;margin:5px;padding:2px;font-size:12px"  @click="chooseLessons(item)">章节知识点选择</button></div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import API from '../../utils/services';

export default{
  data() {
    return {
      lessonList: []
    }
  },
  methods: {
    chooseLessons (item) {
      wx.navigateTo({
        url: `../chooseItem/main?id=${item.id}`
      });
    },
    returnHome() {
      wx.redirectTo({ url: '../index/main' });
    }
  },
  mounted() {
    API.getAllLessons().then(data => {
      this.lessonList = data;
    });
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
