<template lang="html">
  <el-row class="content">
    <el-col :xs="24" :sm="{span:6,offset:9}">
      <span class="title">欢迎光临 {{account}}</span>
      <el-row>
        <el-input class="login-input" type="text" v-model="account" placeholder="请输入用户名"></el-input>
        <el-input class="login-input" type="password" v-model="password" placeholder="请输入密码"></el-input>
        <el-button class="login-input login-button" size="large" type="primary" @click="login">登录</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return{
      account:'',
      password:''
    }
  },
  methods:{
    login(){
      this.$router.push('/todolist')
    }
  }
}
</script>

<style lang="scss" scoped>
  .content{
    padding: 16px;
    .title{
      font-size: 28px;
    }
    .login-input{
      margin: 12px 0;
    }
    .login-button{
      width: 100%;
    }
  }
</style>
