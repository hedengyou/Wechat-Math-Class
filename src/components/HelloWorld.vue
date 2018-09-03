<template>
  <div>
    <div :class="['default', selected === index ? 'select' : '']" v-for="(item, index) in lists" :key="index" @click="changeHello(index)">{{ item }}</div>  
  </div>  
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      lists: ['mpvue', 'vue', 'wechat'],
      selected: -1
    };
  },
  methods: {
    changeHello (index) {
      this.selected = index;
    }
  }
}
</script>
<style>
.default {
  color: black;
}
.select {
  color: red;
}
</style>
