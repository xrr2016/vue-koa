import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
import 'assets/icono.min.css'

Vue.use(ElementUI)
Vue.prototype.$http = axios

Vue.filter('formatPlanTime',(planTime) => {
    if(!planTime) return
    const startTime = `${planTime[0].getHours()}:${planTime[0].getMinutes() >= 10 ? planTime[0].getMinutes() : '0' + planTime[0].getMinutes()}`
    const endTime = `${planTime[1].getHours()}:${planTime[1].getMinutes() >= 10 ? planTime[1].getMinutes() : '0' + planTime[1].getMinutes()}`
  return `${startTime} - ${ endTime }`
})

/* eslint-disable no-new */
new Vue({
  router,
  render : h => h(App)
}).$mount('#app')
