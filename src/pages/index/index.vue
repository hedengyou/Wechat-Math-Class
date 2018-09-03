<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div>测试一下
      {{JSON.stringify(userInfo)}}
    </div>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld';

export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main';
      wx.navigateTo({ url });
    },
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
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev);
      wx.navigateTo({ url: '../login/main' });
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128px;
  height: 128px;
  margin: 20px;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
