<template>
  <div class="container">
    测试分支
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
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
  },
  created: function() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
}
</script>

<style scoped>

</style>
