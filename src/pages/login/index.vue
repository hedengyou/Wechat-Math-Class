<template>
  <div class="container">
    <div class="title">
      四川大学公共数学课
    </div>
    <div>
      <Field
        placeholder="请输入学号"
        type="number"
        label="账号"
        @change="nameChange"
      />
      <Field
        placeholder="请输入密码"
        type="password"
        label="密码"
        @change="passwordChange"
      />
    </div>
    <button class="submit-button" size="mini" type="primary" @click="buttonClick">登录</button>
  </div>
</template>

<script>
import Field from '../../components/Field';
import Toast from 'mp-weui/packages/toast'

import API from '../../utils/services';

export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  components: {
    Field, Toast
  },
  methods: {
    buttonClick () {
      const { name, password } = this;
      if (!name || !password) return;
      API.login(name, password).then(res => {
        // 登录成功
        wx.setStorage({
          key: "Token",
          data: res,
          success: () => {
            wx.redirectTo({ url: '../index/main' });
          }
        });
      }).catch(err => {
        Toast('登录失败！请检查输入！');
      });
    },
    nameChange(value) {
      this.name = value;
    },
    passwordChange(value) {
      this.password = value;
    }
  },
  watch: {

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
