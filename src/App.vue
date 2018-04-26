<template>
  <div id='app'>
    <header>
      <img src='./assets/header.png'/>
    </header>
    <div class='content'>
      <div class='entries'>
        <ul>
          <template v-for='(list_entry, index) in entries'>
            <ListEntry
              :index=index
              :entry_id='list_entry.entry_id'
              :entry_name='list_entry.entry_name'
              :entry_url='list_entry.entry_url'
              :image='list_entry.image'
              :restaurant_name='list_entry.restaurant_name'
              :restaurant_url='list_entry.restaurant_url'
            ></ListEntry>
          </template>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Entries from './services/Entries';
import ListEntry from './components/ListEntry';

export default {
  name: 'app',
  components: {
    ListEntry
  },
  computed: {
    entries() {
      return this.$store.state.entries;
    }
  },
  methods: {
    async fetchEntries() {
      const entries = await Entries.getEntries();
      this.$store.commit('addEntries', entries);
    }
  },
  created() {
    this.fetchEntries();
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

  .entries ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
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
