import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterialTabs from 'vue-material-tabs';

import AxiosPlugin from 'vue-axios-cors';

import 'materialize-css/dist/css/materialize.css'
import 'material-design-icons/iconfont/material-icons.css'


Vue.config.productionTip = false
Vue.use(VueMaterialTabs);

Vue.use(AxiosPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

