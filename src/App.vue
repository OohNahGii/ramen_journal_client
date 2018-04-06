<template>
  <div id='app'>
    <div id='content_container'>
      <div id='entries_container'>
        <template v-if='entries.length'></template>
        <template v-for='(list_entry, index) in entries'>
          <ListEntry
            :index=index
            :entry_id='list_entry.entry_id'
            :entry_name='list_entry.entry_name'
            :entry_url='list_entry.entry_url'
            :picture='list_entry.picture'
            :restaurant_name='list_entry.restaurant_name'
            :restaurant_url='list_entry.restaurant_url'
          ></ListEntry>
        </template>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import VueRouter from 'vue-router';
import ListEntry from './components/ListEntry';

export default {
  name: 'app',
  components: {
    ListEntry
  },
  data () {
    return {
      nextPage: 1
    }
  },
  computed: {
    entries() {
      return this.$store.state.entries;
    }
  },
  methods: {
    fetchNextPage() {
      fetch('http://localhost:3000/entries?page=' + this.nextPage)
        .then(response => {
          return response.json()
        })
        .then(json => {
          this.$store.commit('addEntries', json);
          this.nextPage = this.nextPage + 1;
        });
    }
  },
  created() {
    this.fetchNextPage();
  }
}
</script>

<style lang='scss'>
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  background-color: #EDEDED;
  margin: 0;
}

#content_container {
  padding: 30px;

  #entries_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; // Not ideal...but it'll work for now
  }
}

// TODO - adjust this media query
@media only screen and (min-device-width: 219px) and (max-device-width: 735px) {
  #content_container {
    padding: 3.5%;

    #entries_container {
      justify-content: flex-start;
    }
  }
}
</style>
