import Vue from 'vue'
import App from './App.vue'
import router from './router'

// const element = require('element-ui/lib/index.js');

require('element-ui/packages/theme-chalk/src/index.scss');


// 测试骨架屏的时候发现这个没有注册，在这里全局注册一下
import ElSkeletonItem from "element-ui/packages/skeleton/src/item.vue"
Vue.component("ElSkeletonItem", ElSkeletonItem);

// Vue.use(element);



Vue.config.productionTip = false


import loadingDirective from "element-ui/packages/loading/src/directive.js"
Vue.use(loadingDirective);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
