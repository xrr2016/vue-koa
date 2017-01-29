<template lang="html">
  <el-row class="todos-content">
    <el-col :sm="24" :xs="24" :md="24" :lg="{span:12,offset:6}">
      <p class="title">欢迎你：{{name}}！你的待办事项是：</p>
      <!-- <el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{start: '08:30',step: '00:15',
      end: '18:30',minTime:'00:00'}"></el-time-select>
      <el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}"></el-time-select> -->
      <el-input class="totos-input"
      placeholder="请输入待办事项" v-model="newTodo"
      @keyup.enter.native = "addTodo">
        <el-button slot="append" icon="plus" @click="addTodo"></el-button>
      </el-input>
      <el-tabs type="border-card" class="todos-tabs">
          <el-tab-pane label="未完成事项" name="unfinish">
            <template v-for="(todo,index) of unfinishedTodos">
              <div class="todos-list">
                <span class="item">{{index + 1}}. {{todo.content}}</span>
                <span class="pull-right">
                  <el-button size="small" class="pull-right" type="primary" @click="finishTodo(index)">完成</el-button>
                  <el-button size="small" class="pull-right" type="danger" @click="removeTodo(index)">删除</el-button>
                </span>
              </div>
            </temolate>
          </el-tab-pane>
          <el-tab-pane label="已完成事项">
            <template v-for="(todo,index) of finishedTodos">
              <div class="todos-list">
                <span class="item">{{ index + 1 }}. {{ todo.content }}</span>
                <span class="pull-right">
                  <el-button size="small" type="primary" @click="reStoreTodo(index)">还原</el-button>
                </span>
              </div>
            </temolate>
          </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      name: 'VariableX',
      // startTime: '',
      // endTime:'',
      newTodo: '',
      todos:[]
    }
  },
  methods: {
    addTodo() {
      if(this.newTodo === '') return
      const todo = {
        planTime: '',
        content: this.newTodo,
        status: false
      }
      this.todos.push(todo)
      this.newTodo = ''
      this.$message({
        type:'success',
        message:'添加任务成功.'
      })
    },
    removeTodo(index) {
      this.$confirm('确定删除任务?',{
        showCancelButton:true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type:'danger'
      })
      .then(()=>{
        this.todos.splice(index,1)
        this.$message({
          type:'success',
          message:'删除成功'
        })
      })
      .catch(()=>{
        this.$message({
          type:'info',
          message:'取消删除'
        })
      })
    },
    finishTodo(index) {
      this.$set(this.unfinishedTodos[index],'status',true)
      this.$message({
        type:'success',
        message:'完成任务'
      })
    },
    reStoreTodo(index) {
      this.finishedTodos[index].status = false
    }
  },
  computed: {
    finishedTodos(){
      return this.todos.filter(todo => {
        return todo.status === true
      })
    },
    unfinishedTodos(){
      return this.todos.filter(todo => {
        return todo.status === false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-input{
    margin: 12px 0;
  }
  .todos-list{
    text-align: left;
  }
</style>
