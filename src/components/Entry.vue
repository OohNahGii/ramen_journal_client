<template>
  <div class='overlay'>
    <Close/>
    <div class='entry-container'>
      <Prev :prevEntryUrl='prevEntryUrl'/>
      <div class='entry'>
        <div class='header'>
          <h1>{{ entryName }}</h1>
          <template v-if='restaurantUrl'>
            <h3><a target='_blank' :href='restaurantUrl'>@{{ restaurantName }}</a> in {{ city }}, {{ state }} on {{ entryDate }}</h3>
          </template>
          <template v-else>
            <h3>@{{ restaurantName }} in {{ city }}, {{ state }} on {{ entryDate }}</h3>
          </template>
        </div>
        <div class='description-container'>
          <div class='image-column'>
            <div class='image-container'>
              <img class='image' src='../assets/ramen.jpg'> <!-- replace with image url -->
            </div>
          </div>
          <div class='description-column'>
            <Rating :rating='rating'></Rating>
            <p><strong>Broth ({{ brothRating }}):</strong> {{ broth }}</p>
            <p><strong>Noodles ({{ noodlesRating }}):</strong> {{ noodles }}</p>
            <p><strong>Toppings ({{ toppingsRating }}):</strong> {{ toppings }}</p>
          </div>
        </div>
        <div class='notes'>
          <p v-for='note in notes'>
            {{ note }}
          </p>
        </div>
      </div>
      <Next :nextEntryUrl='nextEntryUrl'/>
    </div>
  </div>
</template>

<script>
import Close from './Close';
import Entries from '../services/Entries';
import EventHandler from '../services/EventHandler';
import Next from './Next';
import Prev from './Prev';
import Rating from './Rating';

let keypressHandler = null;

export default {
  name: 'Entry',
  components: {
    Close,
    Next,
    Prev,
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
  mounted() {
    keypressHandler = EventHandler.getKeypressHandler(this.$store);
    window.addEventListener('keyup', keypressHandler);
  },
  beforeDestroy() {
    window.removeEventListener('keyup', keypressHandler);
    keypressHandler = null;
  },
  computed: {
    prevEntryUrl() {
      const prevEntryId = this.$store.getters.getPrevEntryId;
      return prevEntryId == null ? '#' : '/' + prevEntryId;
    },
    nextEntryUrl() {
      const nextEntryId = this.$store.getters.getNextEntryId;
      return nextEntryId == null ? '#' : '/' + nextEntryId;
    }
  },
  async beforeRouteEnter(to, from, next) {
    const entryId = to.params.id;
    const entry = await Entries.getEntry(entryId);
    next(vm => {
      vm.$store.commit('setCurrentIndexByEntryId', entryId);
      vm.setData(entry);
    });
  },
  async beforeRouteUpdate(to, from, next) {
    const entryId = to.params.id;
    this.clearData();
    const entry = await Entries.getEntry(entryId);
    this.$store.commit('setCurrentIndexByEntryId', entryId);
    this.setData(entry);
    next();
  },
  methods: {
    setData(json) {
      this.entryName = json.entry_name;
      this.restaurantName = json.restaurant_name;
      this.restaurantUrl = json.restaurant_url;
      this.city = json.city;
      this.state = json.state;
      this.entryDate = json.entry_date;
      this.image = json.image;
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
      this.image = null;
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

  .entry-container {
    text-align: center;
    width: 100%;

    .entry {
      background-color: #EDEDED;
      border-radius: 6px;
      display: inline-block;
      margin-top: 20px;
      padding: 40px 80px;
      text-align: left;
      width: 920px;

      .header h1 {
        margin-top: 0;
      }

      .description-container {
        min-height: 340px;

        .image-column {
          float: left;
          width: 65%;

          .image-container {
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

        .description-column {
          box-sizing: content-box;
          padding-left: 65%;
          width: 35%;
        }
      }

      .notes {
        border-top: 1px solid;
        margin-top: 30px;
      }
    }
  }
}

// TODO - adjust this media query
@media only screen and (min-device-width: 219px) and (max-device-width: 735px) {
  .overlay .entry-container .entry {
    border-radius: 0;
    margin: 0;
    padding: 3.5%;
    width: 100%;

    .description-container {
      min-height: unset;

      .image-column {
        float: none;
        width: 100%;

        .image-container {
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

      .description-column {
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