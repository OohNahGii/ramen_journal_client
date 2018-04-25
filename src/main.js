import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';

import Router from './services/Router';
import Store from './services/Store';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter(Router);
const store = new Vuex.Store(Store);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
