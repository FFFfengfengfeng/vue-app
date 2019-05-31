// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/less/main.less'
import '@/assets/less/reset.less'
import { $http } from './utils/http'
import $storage from './utils/storage'

Vue.use(ElementUI)
Vue.prototype.$http = $http
Vue.prototype.$storage = $storage
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
