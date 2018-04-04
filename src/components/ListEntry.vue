<template>
  <div class='list_entry' :class='dynamicListEntryClasses'>
    <div class='image_container'>
      <router-link :to='entry_url'><img class='image' :src='picture'></router-link>
    </div>
    <template v-if='restaurant_url'>
      <p class='title'>{{ entry_name }} <a class='website' target='_blank' :href='restaurant_url'>@{{ restaurant_name }}</a></p>
    </template>
    <template v-else>
      <p class='title'>{{ entry_name }} @{{ restaurant_name }}</p>
    </template>
  </div>
</template>

<script>
import VueRouter from 'vue-router';

export default {
  name: 'ListEntry',
  props: {
    index: {
      type: Number,
      required: true
    },
    entry_id: {
      type: Number,
      required: true
    },
    entry_name: {
      type: String,
      required: true
    },
    entry_url: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    restaurant_name: {
      type: String,
      required: true
    },
    restaurant_url: {
      type: String,
      default: null
    }
  },
  computed: {
    dynamicListEntryClasses: function () {
      return {
        left: this.index % 2 ==0
      };
    }
  }
}
</script>

<style lang='scss'>
.list_entry {
  background-color: #FFFFFF;
  height: 210px;
  margin: 0 10px 20px 10px;
  width: 220px;

  .image_container {
    padding: 10px 10px 0 10px;

    .image {
      height: 150px;
      width: 200px;
    }
  }

  .title {
    margin: 0;
    padding: 5px;
    text-align: center;
    text-overflow: ellipsis;
    width: 100%;
  }
}

// TODO - adjust this media query
@media only screen and (min-device-width: 219px) and (max-device-width: 735px) {
  .list_entry {
    height: auto;
    margin: 0 0 5% 0;
    padding: 5px;
    width: 47.5%;

    .image_container {
      height: 0;
      overflow: hidden;
      padding: 0 0 75% 0;
      width: 100%;

      .image {
        height: unset;
        width: 100%
      }
    }

    .title {
      display: none;
    }
  }

  .list_entry.left {
    margin-right: 5%;
  }
}
</style>