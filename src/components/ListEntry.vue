<template>
  <li class='list-entry' :class='dynamicListEntryClasses'>
    <div class='image-container'>
      <router-link :to='entry_url'><img class='image' src='../assets/ramen.jpg'></router-link> <!-- replace with image url -->
    </div>
    <template v-if='restaurant_url'>
      <p class='title'>{{ entry_name }} <a class='website' target='_blank' :href='restaurant_url'>@{{ restaurant_name }}</a></p>
    </template>
    <template v-else>
      <p class='title'>{{ entry_name }} @{{ restaurant_name }}</p>
    </template>
  </li>
</template>

<script>
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
    image: {
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
        left: this.index % 2 == 0
      };
    }
  }
}
</script>

<style lang='scss'>
.list-entry {
  background-color: #FFFFFF;
  display: inline-block;
  height: 210px;
  margin: 0 10px 20px 10px;
  vertical-align: top;
  width: 220px;

  .image-container {
    padding: 10px 10px 0 10px;

    .image {
      height: 150px;
      width: 200px;
    }
  }

  .title {
    margin: 0;
    padding: 0 5px 5px 5px;
    text-align: center;
    text-overflow: ellipsis;
    width: 100%;
  }
}

// TODO - adjust this media query
@media only screen and (min-device-width: 219px) and (max-device-width: 735px) {
  .list-entry {
    height: auto;
    margin: 0 0 5% 0;
    padding: 5px;
    width: 47.5%;

    .image-container {
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

  .list-entry.left {
    margin-right: 5%;
  }
}
</style>