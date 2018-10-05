<template>
  <div>
    <div>{{ lessonName }}</div>
    <div>{{ chapterName }}</div>
    <div>{{ subChapterName }}</div>
    <video :src="videoUrl"></video>
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
      subChapterName: ''
    };
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
  }
}
</script>
<style>

</style>
