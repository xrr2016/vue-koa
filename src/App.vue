<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <Login></Login> -->
    <Todos></Todos>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Todos from './components/Todos.vue'
export default {
  name: 'app',
  components: {
    Login,
    Todos
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title{
  font-size: 24px;
}
</style>
