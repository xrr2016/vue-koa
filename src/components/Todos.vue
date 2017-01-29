<template lang="html">
  <el-row class="todos-content">
    <el-col :sm="24" :xs="24" :md="24" :lg="{span:12,offset:6}">
      <p class="title">欢迎：{{name}}！你的待办事项是：</p>
      <!-- <el-time-select placeholder="起始时间" v-model="startTime" :picker-options="{start: '08:30',step: '00:15',
      end: '18:30',minTime:'00:00'}"></el-time-select>
      <el-time-select placeholder="结束时间" v-model="endTime" :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}"></el-time-select> -->
      <el-input class="totos-input" placeholder="请输入待办事项" v-model="newTodo" @keyup.enter.native = "addTodo">
        <el-button slot="append" icon="plus" @click="addTodo"></el-button>
      </el-input>

      <el-tabs type="border-card" v-model="active" class="todos-tabs">
          <el-tab-pane label="未完成事项" name="unfinish">
            <template v-for="(todo,index) of unfinishedTodos">
              <div class="todos-list">
                <span class="item">{{index + 1}}. {{todo.content}}</span>
                <span class="pull-right">
                  <el-button size="small" type="primary" @click="finishTodo(index)">完成</el-button>
                  <el-button size="small" type="danger" @click="removeTodo(index)">删除</el-button>
                </span>
              </div>
            </temolate>
          </el-tab-pane>
          <el-tab-pane label="已完成事项">
            <template v-for="(todo,index) of finishedTodos">
              <div class="todos-list">
                <span class="item">{{index + 1}}. {{todo.content}}</span>
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
      neweTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      const todo = {
        planTime: '',
        content: this.newTodo,
        status: false
      }
      this.todos.push(todo)
      this.todo = ''
    },
    removeTodo(index) {
      this.unfinishedTodos.splice(index,1)
    },
    finishTodo(index) {
      this.unfinishedTodos[index].status = true
    },
    reStoreTodo(index) {
      this.unfinishedTodos[index].status = false
    }
  },
  computed: {
    finishedTodos(){
      return this.todos.map(todo => {
        return todo.status === false
      })
    },
    unfinishedTodos(){
      return this.todos.map(todo => {
        return todo.status === true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
