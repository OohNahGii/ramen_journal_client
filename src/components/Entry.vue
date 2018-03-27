<template>
  <!-- TODO handle navigation (left, right, X) -->
  <div class='overlay'>
    <div class='overlay_content'>
      <div class='header'>
        <h1>{{ entry_name }}</h1>
        <template v-if='restaurant_url'>
          <h3><a :href='restaurant_url'>@{{ restaurant_name }}</a> in {{ city }}, {{ state }} on {{ entry_date }}</h3>
        </template>
        <template v-else>
          <h3>@{{ restaurant_name }} in {{ city }}, {{ state }} on {{ entry_date }}</h3>
        </template>
      </div>
      <div class='description_container'>
        <div class='image_column'>
          <div class='image_container'>
            <img class='image' :src='picture'>
          </div>
        </div>
        <div class='description_column'>
          <Rating :rating='this.rating'></Rating>
          <p><strong>Broth ({{ broth_rating }}):</strong> {{ broth }}</p>
          <p><strong>Noodles ({{ noodles_rating }}):</strong> {{ noodles }}</p>
          <p><strong>Toppings ({{ toppings_rating }}):</strong> {{ toppings }}</p>
        </div>
      </div>
      <div class='notes'>
        <p>{{ notes }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from './Rating';

export default {
  name: 'Entry',
  props: {
    entry_name: {
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
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    entry_date: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    broth: {
      type: String,
      required: true
    },
    broth_rating: {
      type: Number,
      required: true
    },
    noodles: {
      type: String,
      required: true
    },
    noodles_rating: {
      type: Number,
      required: true
    },
    broth: {
      type: String,
      required: true
    },
    broth_rating: {
      type: Number,
      required: true
    },
    notes: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang='scss'>
.overlay {
  background-color: rgba(0,0,0,0.5);
  bottom: 0;
  height: 100%;
  left: 0;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 2;

  .overlay_content {
    background-color: #EDEDED;
    border-radius: 6px;
    margin: 20px auto 0 auto;
    padding: 40px 80px;
    width: 920px;

    .header h1 {
      margin-top: 0;
    }

    .description_container {
      min-height: 340px;

      .image_column {
        float: left;
        width: 65%;

        .image_container {
          background-color: #FFFFFF;
          height: 340px;
          padding: 20px;
          width: 440px

          .image {
            height: 300px;
            width: 400px;
          }
        }
      }

      .description_column {
        box-sizing: content-box;
        padding-left: 65%;
        width: 35%;
      }
    }

    .notes {
      border-top-style: solid;
      border-top-width: 1px;
      margin-top: 30px;
    }
  }
}

// TODO - adjust this media query
@media only screen and (min-device-width: 219px) and (max-device-width: 735px) {
  .overlay_content {
    border-radius: 0;
    margin: 0;
    padding: 3.5%;
    width: 100%;

    .description_container {
      min-height: unset;

      .image_column {
        float: none;
        width: 100%;

        .image_container {
          height: 0;
          margin-left: -3.5%;
          padding: 0 0 75% 0;
          overflow: hidden;
          width: 107%;

          .image {
            height: unset;
            width: 100%;
          }
        }
      }

      .description_column {
        box-sizing: border-box;
        margin-top: 20px;
        padding: 0;
        width: 100%;
      }

      .notes {
        margin-top: 20px;
      }
    }
  }
}
</style>