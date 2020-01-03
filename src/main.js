import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
// 导入字体样式表
import './assets/fonts/iconfont.css'
// 导入axios
import axios from 'axios'

// 设置axios请求的baseURL
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 将axios挂载到vue的原型对象上,后面可以直接使用this.http获取
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
