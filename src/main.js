import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import Entry from './components/Entry.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes: [
    { path: '/:id', component: Entry }
  ]
});
const store = new Vuex.Store({
  state: {
    currentIndex: null,
    entries: []
  },
  getters: {
    getPrevEntryId: state => {
      if (!isNaN(state.currentIndex) && state.entries.length && state.currentIndex - 1 >= 0) {
        return state.entries[state.currentIndex - 1].entry_id;
      }
      return null;
    },
    getNextEntryId: state => {
      if (!isNaN(state.currentIndex) && state.entries.length && state.currentIndex + 1 <= state.entries.length) {
        return state.entries[state.currentIndex + 1].entry_id;
      }
      return null;
    }
  },
  mutations: {
    addEntries(state, entries) {
      state.entries = state.entries.concat(entries);
    },
    setCurrentIndexByEntryId(state, entryId) {
      const index = state.entries.findIndex(entry => entry.entry_id == entryId);
      if (index >= 0) {
        state.currentIndex = index;
      }
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
