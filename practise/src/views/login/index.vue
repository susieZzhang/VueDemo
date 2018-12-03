<template>
  <div class="login_conainer">
    <div class="login_title">
      <p>预案管理</p>
    </div>
    <div class="main_con">
      <p class="title">系统登录</p>
      <div class="item clearfix username">
        <label class="fl" for="">用户名：</label>
        <em></em>
        <input  class="fl" v-model="user">
      </div>
      <div class="item clearfix password">
        <label class="fl" for="">密 &nbsp;&nbsp;码：</label>
        <em></em>
        <input type="password" value="" v-model="password">
        </div>
        <input type="button" class="login_btn" value="登录" @click="submit">
        <div class="isremember clearfix">
          <span class="fr">记住账号</span>
          <input class="fr" type="checkbox">
        </div>
    </div>
  </div>
</template>
<script>
import { login } from '@/assets/js/api.js'
import cookies from 'js-cookie'
export default {
  name: 'login',
  data () {
    return {
      user: 'admin',
      password: ''
    }
  },
  methods: {
    submit () {
      login(
        {
          username: this.user,
          password: this.password
        }
      ).then(res => {
        console.log(res.data.code)
        if (res.data.code === '200') {
          cookies.set('user', res.data.shiroUser.account)
          this.$router.push({
            name: 'home'
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
@import "index.css";
</style>
