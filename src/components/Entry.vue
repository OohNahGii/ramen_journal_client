<template>
  <!-- TODO handle navigation (left, right) -->
  <div class='overlay'>
    <Close></Close>
    <div class='overlay_content'>
      <div class='header'>
        <h1>{{ entryName }}</h1>
        <template v-if='restaurantUrl'>
          <h3><a target='_blank' :href='restaurantUrl'>@{{ restaurantName }}</a> in {{ city }}, {{ state }} on {{ entryDate }}</h3>
        </template>
        <template v-else>
          <h3>@{{ restaurantName }} in {{ city }}, {{ state }} on {{ entryDate }}</h3>
        </template>
      </div>
      <div class='description_container'>
        <div class='image_column'>
          <div class='image_container'>
            <img class='image' :src='picture'>
          </div>
        </div>
        <div class='description_column'>
          <Rating :rating='rating'></Rating>
          <p><strong>Broth ({{ brothRating }}):</strong> {{ broth }}</p>
          <p><strong>Noodles ({{ noodlesRating }}):</strong> {{ noodles }}</p>
          <p><strong>Toppings ({{ toppingsRating }}):</strong> {{ toppings }}</p>
        </div>
      </div>
      <div class='notes'>
        <p>{{ notes }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Close from './Close';
import Rating from './Rating';

const baseUrl = 'http://localhost:3000/entries/';

export default {
  name: 'Entry',
  components: {
    Close,
    Rating
  },
  data() {
    return {
      entryName: null,
      restaurantName: null,
      restaurantUrl: null,
      city: null,
      state: null,
      entryDate: null,
      picture: null,
      rating: null,
      broth: null,
      brothRating: null,
      noodles: null,
      noodlesRating: null,
      toppings: null,
      toppingsRating: null,
      notes: null
    }
  },
  beforeRouteEnter(to, from, next) {
    const url = baseUrl + to.params.id;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        next(vm => vm.setData(json));
      });
  },
  beforeRouteUpdate(to, from, next) {
    const url = baseUrl + to.params.id;
    clearData();
    fetchh(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setData(json);
        next();
      });
  },
  methods: {
    setData(json) {
      this.entryName = json.entry_name;
      this.restaurantName = json.restaurant_name;
      this.restaurantUrl = json.restaurant_url;
      this.city = json.city;
      this.state = json.state;
      this.entryDate = json.entry_date;
      this.picture = json.picture;
      this.rating = json.rating;
      this.broth = json.broth;
      this.brothRating = json.broth_rating;
      this.noodles = json.noodles;
      this.noodlesRating = json.noodles_rating;
      this.toppings = json.toppings;
      this.toppingsRating = json.toppings_rating;
      this.notes = json.notes;
    },
    clearData() {
      this.entryName = null;
      this.restaurantName = null;
      this.restaurantUrl = null;
      this.city = null;
      this.state = null;
      this.entryDate = null;
      this.picture = null;
      this.rating = null;
      this.broth = null;
      this.brothRating = null;
      this.noodles = null;
      this.noodlesRating = null;
      this.toppings = null;
      this.toppingsRating = null;
      this.notes = null;
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

  .close {
    height: 40px;
    width: 40px;
  }

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
          width: 440px;

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
// Note: this currently isn't working on mobile
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