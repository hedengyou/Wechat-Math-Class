<template>
  <div>
    <div>
      <p>{{ lesson.name }}</p>
    </div>
    <div>
      <p>微积分章节选择</p>
      </div>
    <div class="content">
      <div>
        <div v-for="(item,index) in chapters" :key="index" @click="chooseItem(item)">{{ item }}</div>
      </div>
      <div>
        <div v-for="(item,index) in subChapters" :key="index" >{{ item }}</div>
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
      chapters: [],
      subChapters: []
    }
  },
  methods:{
    chooseItem(item) {
      console.log(item);
      const subs = this.lesson.subChapter.filter(x => x.split('-')[0] === item);
      this.subChapters = subs;
    }
  },
  mounted() {
    const option = this.$root.$mp.query;
    const { id, name } = option;
    if (id) {
      API.getOneLessonById(id).then(data => {
        console.log(data);
        this.lesson = data;
        this.chapters = data.chapter;
      });
    } else if (name) {
      API.getOneLessonByName(name).then(data => {
        console.log(data);
        this.lesson = data;
        this.chapters = data.chapter;
      });
    }
  }
}
</script>
<style>
.content {
  display: flex;
  flex-direction: row;
}
</style>
