<template>
  <div id='app'>
    <header>
      <img src='./assets/header.png'/>
    </header>
    <div class='content'>
      <div class='entries'>
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
@import url('https://fonts.googleapis.com/css?family=Oxygen');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  background-color: #EDEDED;
  color: #333333;
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
}

h1 {
  font-family: 'Oxygen', sans-serif;
}

header {
  align-items: center;
  background-color: #FFFFFF;
  display: flex;
  height: 80px;
  justify-content: center;
  width: 100%;
}

.content {
  padding: 30px;

  .entries {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; // Not ideal...but it'll work for now
  }
}

// TODO - adjust this media query
@media only screen and (min-device-width: 219px) and (max-device-width: 735px) {
  header {
    height: 60px;

    img {
      max-width: 65%;
      height: auto;
    }
  }

  .content {
    padding: 3.5%;

    .entries {
      justify-content: flex-start;
    }
  }
}
</style>
