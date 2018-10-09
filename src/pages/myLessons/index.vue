<template>
  <div class="page">
    <div class="all" v-if="source === 'lesson'">
      <p class="top"><b>四川大学数学公共课</b></p>
      <p class="title">我的课程<button type="txt" style="float: right;margin:5px;padding:2px;font-size:12px" @click="returnHome">返回主界面</button></p>
      <div class="container">
        <div class="container_1" v-for="(item, index) in lessonList" :key="index">
          <div class="box">
            <div class="img">
              <img  class="picture" :src="item.cover" />
              <p class="p">{{ item.name }}</p>
            </div>
            <div class="txt">{{ item.description }}<button style="float: right;margin:5px;padding:2px;font-size:12px"  @click="chooseLessons(item)">章节知识点选择</button></div>
          </div>
        </div>
      </div>  
    </div>
    <div class="all" v-if="source === 'task'">
      <p class="top"><b>四川大学数学公共课</b></p>
      <p class="title">我的作业<button type="txt" style="float: right;margin:5px;padding:2px;font-size:12px" @click="returnHome">返回主界面</button></p>
      <div class="task-container">
        <div class="task-item" v-for="(item, index) in allWork" :key="index">
          <div class="task-item-left">
            <image class="task-item-img" src="/static/images/4.jpg" />
            <div class="task-item-footer">{{ item.name }}</div>
          </div>
          <div class="task-item-right">
            <div class="task-item-date">截至日期至{{ item.date }}</div>
            <div class="task-item-more" @click="clickMore">更多信息</div>
          </div>
        </div>
      </div>  
    </div>
    <div v-else>
      未知页面，请重试
    </div>
  </div>
</template>

<script>
import API from '../../utils/services';
import dayjs from 'dayjs';

export default{
  data() {
    return {
      lessonList: [],
      allWork: [],
      source: ''
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
    },
    clickMore() {

    },
    dateFormat(str) {
      return dayjs(str).format('YYYY-MM-DD HH:mm');
    }
  },
  mounted() {
    const option = this.$root.$mp.query;
    const { source } = option;
    this.source = source;
    if (source === 'lesson') {
      API.getAllLessons().then(data => {
        this.lessonList = data;
      });
    } else if (source === 'task') {
      API.getAllWork().then(data => {
        // 这里其实用vue的filter是最好的办法，然而mpvue不支持template的filter
        this.allWork = data.map(x => Object.assign(x, { date: this.dateFormat(x.date) }));
      });
    }
  }
}
</script>

<style>
.page {
  width: 100%;
}
.all {
  width: 100%;
}
.top {
  text-align: left;
  margin-top: 1%;
  margin-bottom:20px ;
  padding: 5px;
  display: block;
  border: solid rgb(190,190,190);
  background: rgb(187, 186, 186)
}
.title {
  padding-left: 10px;
  margin-bottom: 20px;
  padding-bottom: 0px
}
.box {
  width: 95%;
  position: relative;
  float: left;
  padding: 1px;
  margin: 0px
}
.container {
  margin-top: 0px;
  padding-top: 10px;
  width: 100%;
}
.container_1 {
  width: 95%;
  height: 120px;
  margin-left: 2px;
  margin-bottom: 10px;
  margin-top: 2px;
  padding: 2px;
  border-bottom: solid rgb(46, 46, 46) 2px;
  line-height: 20px;
}
.img {
  width: 100px;
  height: 120px;
  margin-right: 8px;
  padding-right: 5px
}
.picture {
  width: 100px;
  height: 90px;
  margin-bottom: 0px;
}
.p1 {
  font-size: 15px;
  width: 98px;
  margin-left: 1px;
  margin-top: 0px;
  text-align: center;
  background: #aaa;
}
.txt {
  font-size: 10px;
  width: 150px;
  margin: 0px;
  margin-top: -120px;
  padding-left: 150px
}
.task-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.task-item {
  padding: 0px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
}
.task-item-left {
  margin-right: 20px;
}
.task-item-img {
  width: 110px;
  height: 91px;
}
.task-item-footer {
  width: 110px;
  height: 22px;
  background-color: #CCCCCC;
  text-align: center;
  line-height: 22px;
  font-size: 14px;
}
.task-item-right {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.task-item-date {
  font-size: 15px;
}
.task-item-more {
  margin-top: 10px;
  border: #aaa 1px solid;
}
</style>
