<template>
  <div class='rating'>
    <template v-for='count in 5'>
      <Star :percentage='calculatePercentage(count)'/>
    </template>
    <h3 class='overall_rating'>{{ rating }}</h3>
  </div>
</template>

<script>
import Star from './Star';

export default {
  name: 'Rating',
  components: {
    Star
  },
  props: {
    rating: {
      type: Number,
      default: 0
    }
  },
  methods: {
    calculatePercentage: function (count) {
      const remainder = this.rating - (count - 1);
      if (remainder < 0) {
        return 0;
      } else if (remainder > 1) {
        return 100;
      } else {
        return Math.ceil((remainder * 100) / 10) * 10;
      }
    }
  }
}
</script>

<style lang='scss'>
.rating {
  align-items: center;
  display: flex;
}

.overall_rating {
  display: inline-block;
  margin: 0 0 0 5px;
}
</style>