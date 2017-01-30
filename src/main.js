import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-default/index.css'
import 'assets/icono.min.css'

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  router,
  render : h => h(App)
}).$mount('#app')
