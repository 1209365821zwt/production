import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import baseComponent from './plugins/baseComponent';
import './until/rem';
import api from './api/api'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/css/swiper.min.css';
import { Skeleton } from 'vant';
Vue.use(Skeleton);
Vue.config.productionTip = false
Vue.use(baseComponent)
Vue.use(ElementUI);
Vue.prototype.$api=api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
