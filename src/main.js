import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/src/styles/main.sass'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';


Vue.use(VueToast);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')