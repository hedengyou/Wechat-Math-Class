<template>
  <div>
    <div class="title-lesson">{{ lessonName }}</div>
    <div class="title-chapter">{{ chapterName }}</div>
    <div class="title-subchapter">{{ subChapterName }}</div>
    <video :src="videoUrl"></video>
    <div class="ques-button-wrap" v-if="!showQuestion">
      <button class="ques-button" size="mini" type="primary" @click="buttonClick">刷题</button>
    </div>
    <div class="ques-container" v-else>
      <div class="ques-item" v-for="(item, index) in quesList" :key="index">
        <div class="ques-choice-item">{{ item.title.content }}</div>
        <div class="ques-choices">
          <div
            class="ques-choice-item"
            v-for="(choice, i) in item.choices"
            :key="i"
            :class="[{'ques-choice-item-active': formData[item.id] == choice }]"
            @click="clickChoice(item, choice)"
          >{{ letterList[i]}}.{{ choice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import API from '../../utils/services';

export default {
  data() {
    return {
      videoUrl: '',
      lessonName: '',
      chapterName: '',
      subChapterName: '',
      quesList: [],
      showQuestion: false,
      letterList: ['A', 'B', 'C', 'D'],
      formData: { }
    };
  },
  methods: {
    buttonClick() {
      this.showQuestion = true;
    },
    clickChoice(que, choice) {
      this.formData[que.id] = choice;
      console.log(this.formData);
    }
  },
  mounted() {
    const option = this.$root.$mp.query;
    const { videoId, lesson, chapter, subChapter } = option;
    this.lessonName = lesson;
    this.chapterName = chapter;
    this.subChapterName = subChapter;
    if (videoId) {
      API.getVideoUrl(videoId).then(data => {
        this.videoUrl = data;
      });
    }
    API.getQuestions(lesson, chapter, subChapter).then(res => {
      console.log(res);
      this.quesList = res.filter(x => x.type === 'objective'); // 这里只会显示客观题
    });
  }
}
</script>
<style>
.title-lesson {
  font-size: 60rpx;
}
.title-chapter {
  font-size: 50rpx;
}
.title-subchapter {
  font-size: 40rpx;
}
.ques-button-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ques-button {
  margin: 20rpx 0rpx;
  width: 500rpx;
}
.ques-container {
  display: flex;
  flex-direction: column;
}
.ques-item {
  margin-bottom: 20rpx;
}
.ques-choices {
  display: flex;
  flex-direction: row;
}
.ques-choice-item {
  margin-left: 20rpx;
}
.ques-choice-item-active {
  color: red;
}
</style>
