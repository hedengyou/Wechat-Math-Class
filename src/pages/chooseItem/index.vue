<template>
  <div>
    <div>
      <p class="title">{{ lesson.name }}</p>
    </div>
    <div>
      <p>{{ lesson.name }}章节选择</p>
    </div>
    <div class="content">
      <div class="left">
        <div v-for="(item,index) in lesson.chapters" :key="index" @click="chooseItem(item)">{{ item.name }}</div>
      </div>
      <div class="right">
        <div v-for="(item,index) in subChapters" :key="index" @click="playVideo(item)">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '../../utils/services';
export default {
  data() {
    return{
      lesson: {},
      currentChapter: [],
      subChapters: []
    }
  },
  methods:{
    chooseItem(item) {
      this.currentChapter = item;
      const subs = item.subChapters;
      this.subChapters = subs;
    },
    playVideo(item) {
      wx.navigateTo({ url: `../video/main?videoId=${item.video}&lesson=${this.lesson.name}&chapter=${this.currentChapter.name}&subChapter=${item.name}`});
    }
  },
  mounted() {
    this.subChapters = [];
    this.currentChapter = {};
    const option = this.$root.$mp.query;
    const { id, name } = option;
    if (id) {
      API.getOneLessonById(id).then(data => {
        this.lesson = data;
      });
    } else if (name) {
      API.getOneLessonByName(name).then(data => {
        this.lesson = data;
      });
    }
  },
}
</script>
<style>
.content {
  display: flex;
  flex-direction: row;
  border-top: 1px #000 solid;
  padding: 0rpx 20rpx;
}
.title {
  font-size: 70rpx;
}
.left {
  margin-right: 50rpx;
}
</style>
