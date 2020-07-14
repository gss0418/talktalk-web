<template>
  <div class="content">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="password"></mt-field>
    <mt-field label="验证码" v-model="code"></mt-field>
    <div style="text-align:center">
      <mt-button type="primary">登录</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    components: {},
    data() {
      return {
        //验证码
        code: '',
        //登录信息
        loginInfo: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {}
    }
  }
</script>

<style scoped>
  body {
    font-size: 26px;
    height: 100vh;
    width: 100vw;
    position: relative;
  }
  .content {
    height: 50vh;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>