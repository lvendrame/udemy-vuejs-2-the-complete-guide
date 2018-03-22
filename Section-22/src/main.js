import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = "https://vue-update-lv.firebaseio.com";
axios.defaults.headers.common['Authorization'] = "fasdfasfas";
axios.defaults.headers.get['Accepts'] = "application/json";

const requestInteceptor = axios.interceptors.request.use(config => {
  console.log('interceptors.request', config);
  return config;  
});

const responseInteceptor = axios.interceptors.response.use(res => {
  console.log('interceptors.response', res);
  return res;  
});

axios.interceptors.request.eject(requestInteceptor);
axios.interceptors.response.eject(responseInteceptor);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
