<template lang="html">
  <el-row class="todos-content">
    <el-col :sm="24" :xs="24" :md="24" :lg="{span:12,offset:6}">
      <p class="title">欢迎你：{{name}}！你的待办事项是：</p>
      <el-select class="todos-types" size="normal" v-model="todoType"  placeholder="类型">
          <el-option
          v-for="type in todoTypes"
          :label="type.label"
          :value="type.value">
        </el-option>
      </el-select>
      <el-time-picker is-range class="todos-time" placeholder="时间范围" v-model="planTime"></el-time-picker>
      <el-input class="todos-input"
      placeholder="请输入待办事项" v-model="newTodo"
      @keyup.enter.native = "addTodo">
        <el-button slot="append" icon="plus" @click="addTodo"></el-button>
      </el-input>
      <!-- 事件列表 -->
      <el-tabs type="border-card" class="todos-tabs">
          <el-tab-pane label="未完成事项" name="unfinish">
            <ul class="todos-list" >
              <li class="todos-list-item" v-for="(todo,index) of unfinishedTodos">
                <el-tag type="gray" v-if="todo.type === 'normal' ">普通</el-tag>
                <el-tag type="warning" v-else-if="todo.type === 'important' ">重要</el-tag>
                <el-tag type="danger" v-else="todo.type === 'urgent' ">紧急</el-tag>
                <span class="todos-content">{{index + 1}}. {{todo.content}}</span>
                <i class="todos-planTime">{{todo.planTime | formatPlanTime}}</i>
                <span class="pull-right">
                  <el-tooltip effect="dark" content="完成"  placement="top">
                    <el-button type="success" icon="circle-check" @click="finishTodo(index)"></el-button>
                  </el-tooltip>
                  <el-tooltip effect="dark" content="删除"  placement="top">
                    <el-button type="danger" icon="delete" @click="removeTodo(index)"></el-button>
                  </el-tooltip>
                </span>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="已完成事项">
            <ul class="todos-list">
              <li class="todos-list-item"  v-for="(todo,index) of finishedTodos">
                <el-tag type="gray" v-if="todo.type === 'normal' ">普通</el-tag>
                <el-tag type="warning" v-else-if="todo.type === 'important' ">重要</el-tag>
                <el-tag type="danger" v-else="todo.type === 'urgent' ">紧急</el-tag>
                <span class="item">{{ index + 1 }}. {{ todo.content }}</span>
                <span class="pull-right">
                  <el-tooltip effect="dark" content="还原"  placement="top">
                    <el-button  type="primary" @click="reStoreTodo(index)">
                      <i class="icono-reset"></i>
                    </el-button>
                  </el-tooltip>
                </span>
              </li>
            </ul>
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
      todoType:'',
      newTodo: '',
      todos:[],
      planTime:[new Date(),new Date()],
      todoTypes:[{value:'normal',label:'普通'},{value:'important',label:'重要'},{value:'urgent',label:'紧急'}]
    }
  },
  methods: {
    addTodo() {
      if(this.newTodo === '') return
      const todo = {
        type : this.todoType,
        content: this.newTodo,
        planTime:this.planTime,
        status: false
      }
      this.todos.push(todo)
      this.newTodo = ''
      this.planTime = ''
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
.todos-content{
  .el-input{
    margin: 12px 0;
  }
  .todos-types{
    width: 10%;
  }
  .todos-time{
    width:24%;
  }
  .todos-input{
    width:64%;
  }
  .todos-list{
    text-align: left;
    list-style: none;
    padding-left: 10px;
    .todos-list-item{
      position: relative;
      height: 42px;
      line-height: 42px;
      display: block;
      font-size: 22px;
      .todos-planTime{
        padding-left: 80px;
        font-size: 16px;
      }
      .pull-right{
        position: absolute;
        top: 0px;
        right: 6px;
      }
      .el-icon{
        display: block;
      }
      .icono-reset{
        display: block;
        width: 14.1px;
        height: 13.33px;
        margin: 0;
      }
    }
  }
}
</style>
