import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false
import store from './store'
import router from './router'
import axios from './httpconfig/http'

Vue.prototype.$http = axios  //定义一个全局变量

import util from './utils/util'

Vue.use(util)

new Vue({
    router,//路由器
    store,//
    render: h => h(App)//渲染组件
}).$mount('#app')
