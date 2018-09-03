<template>
  <div class="container">
    <div class="title">
      四川大学公共数学课
    </div>
    <div>
      <mp-field
        placeholder="请输入账号"
        type="text"
        label="账号"
      />
      <mp-field
        placeholder="请输入密码"
        type="number"
        label="密码"
      />
    </div>
    <button class="submit-button" size="mini" type="primary" @click="buttonClick">登录</button>
  </div>
</template>

<script>
import MpField from 'mp-weui/packages/field';

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  components: {
    MpField
  },
  methods: {
    buttonClick () {
      wx.navigateTo({ url: '../index/main' });
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  margin-bottom: 50px;
}
.submit-button {
  width: 90%;
  margin-top: 20px;
}
</style>
