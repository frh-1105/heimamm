import Vue from 'vue'
import App from './App.vue'
//导入路由
import router from './router'

//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//注册element-ui
Vue.use(ElementUI);

//导入全局样式
import '@/style/base.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
