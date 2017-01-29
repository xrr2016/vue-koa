<template lang="html">
  <el-row class="content">
    <el-col :sm="24" :xs="24" :md="24" :lg="{span:8,offset:8}">
      <span>欢迎：{{name}}！你的待办事项是：</span>
      <el-input class="" placeholder="请输入待办事项" v-model="todo" @keyup.enter.native = "addTodo">
        <el-button slot="append" icon="plus" @click="addTodo"></el-button>
      </el-input>
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
       <el-tab-pane label="配置管理">配置管理</el-tab-pane>
       <el-tab-pane label="角色管理">角色管理</el-tab-pane>
       <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return {
      name : 'VariableX',
      todo:'',
      todos:[]
    }
  },
  methods:{
    addTodo(){

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
