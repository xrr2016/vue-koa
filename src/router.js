import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Todos from './components/Todos.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode : 'history',
  routes:[
    {
      path:'/',
      component:Login
    },
    {
      path:'/todolist',
      component:Todos
    },
    {
      path:'*',
      redirect:'/'
    }
  ]
})

export default router
