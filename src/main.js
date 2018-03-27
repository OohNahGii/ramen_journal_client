import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Entry from './components/Entry.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/:id' , component: Entry }
  ]
});
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
